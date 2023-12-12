import { useImageToCode } from '@/app/useImageToCode'
import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface Context {
  cancelRequest: () => void
  genCodeFromImage: (file: File) => Promise<void>
  htmlGenerated: string
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
  const { genCodeFromImage, result, step, cancelRequest } = useImageToCode()
  const htmlGenerated = result

  return (
    <ImageToCodeContext.Provider
      value={{
        cancelRequest,
        genCodeFromImage,
        htmlGenerated,
        step,
      }}
    >
      {children}
    </ImageToCodeContext.Provider>
  )
}
