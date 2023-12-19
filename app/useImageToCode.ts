import { useState } from 'react'

export enum Step {
  Initial = 'Initial',
  Loading = 'Loading',
  Preview = 'Preview',
  Error = 'Error',
}

function toBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

interface StreamReaderObserver {
  onStart: () => void
  onEnd: () => void
}

async function* streamReader(res: Response, observer: StreamReaderObserver) {
  observer.onStart()

  const reader = res.body?.getReader()
  const decoder = new TextDecoder()
  if (reader == null) {
    observer.onEnd()
    return
  }

  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      observer.onEnd()
      break
    }
    const chunk = decoder.decode(value, { stream: true })
    yield chunk
  }
}

export const useImageToCode = () => {
  const [result, setResult] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [step, setStep] = useState<Step>(Step.Initial)

  const abortController = new AbortController()
  const observer: StreamReaderObserver = {
    onStart: () => setIsStreaming(true),
    onEnd: () => setIsStreaming(false),
  }

  const transformToCode = async (body: string) => {
    setStep(Step.Loading)

    const res = await fetch('api/generate-code-from-image', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abortController.signal,
    })

    if (!res.ok || res.body === null) {
      setStep(Step.Error)
      throw new Error('Error generating the code')
    }

    setStep(Step.Preview)

    for await (const chunk of streamReader(res, observer)) {
      setResult((prev) => prev + chunk)
    }
  }

  const genCodeFromImage = async (file: File) => {
    const img = await toBase64(file)
    transformToCode(JSON.stringify({ img }))
  }

  const genCodeFromUrl = async (url: string) => {
    transformToCode(JSON.stringify({ url }))
  }

  const cancelRequest = () => {
    abortController.abort()
    setStep(Step.Initial)
  }

  return {
    cancelRequest,
    genCodeFromImage,
    genCodeFromUrl,
    isStreaming,
    result,
    step,
  }
}
