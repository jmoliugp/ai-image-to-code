import { useImageToCode } from '@/app/useImageToCode'
import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface Context {
  cancelRequest: () => void
  genCodeFromImage: (file: File) => Promise<void>
  htmlGenerated: string
  isStreaming: boolean
  step: Step
  setImage: (image: File | undefined) => void
  image: File | undefined
}

export enum Step {
  Initial = 'Initial',
  Loading = 'Loading',
  Preview = 'Preview',
  Error = 'Error',
}

const ImageToCodeContext = createContext<Context>({} as Context)
export const useImageToCodeContext = () => useContext(ImageToCodeContext)

export const CodeGenProvider: React.FC<{ children?: ReactNode | undefined }> = ({ children }) => {
  const { genCodeFromImage, isStreaming, result, step, cancelRequest } = useImageToCode()
  const [image, setImage] = useState<File | undefined>()
  const htmlGenerated = result

  return (
    <ImageToCodeContext.Provider
      value={{
        cancelRequest,
        genCodeFromImage,
        image,
        isStreaming,
        htmlGenerated,
        setImage,
        step,
      }}
    >
      {children}
    </ImageToCodeContext.Provider>
  )
}
