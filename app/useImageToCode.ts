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

async function* streamReader(res: Response) {
  const reader = res.body?.getReader()
  const decoder = new TextDecoder()
  if (reader == null) return

  while (true) {
    const { done, value } = await reader?.read()
    const chunk = decoder.decode(value)
    yield chunk
    if (done) break
  }
}

export const useImageToCode = () => {
  const [result, setResult] = useState('')
  const [step, setStep] = useState<Step>(Step.Initial)

  const transformToCode = async (body: string) => {
    setStep(Step.Loading)
    const res = await fetch('api/generate-code-from-image', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok || res.body === null) {
      console.log('🚀 ~ ERROR res:', res)
      setStep(Step.Error)
      throw new Error('Error generating the code')
    }

    setStep(Step.Preview)

    for await (const chunk of streamReader(res)) {
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

  const [background, html = ''] = result.split('|||')

  return {
    genCodeFromImage,
    genCodeFromUrl,
    background,
    html,
    step,
  }
}
