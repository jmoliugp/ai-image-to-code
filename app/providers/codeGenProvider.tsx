import { useImageToCode } from '@/app/useImageToCode'
import React, { ReactNode, createContext, useContext } from 'react'

export interface Context {
  cancelRequest: () => void
  genCodeFromImage: (file: File) => Promise<void>
  htmlGenerated: string
  isStreaming: boolean
  step: Step
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
  const htmlGenerated = result

  return (
    <ImageToCodeContext.Provider
      value={{
        cancelRequest,
        genCodeFromImage,
        isStreaming,
        htmlGenerated,
        step,
      }}
    >
      {children}
    </ImageToCodeContext.Provider>
  )
}
