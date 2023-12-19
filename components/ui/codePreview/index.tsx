'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { Step } from '@/app/useImageToCode'
import LoadingImage from '@/components/ui/codePreview/loadingImage'
import Preview from '@/components/ui/codePreview/preview'

export default function CodePreview() {
  const { step } = useImageToCodeContext()

  return (
    <div className="flex flex-col items-center justify-start min-h-screen h-full relative bg-stone-900">
      <header className="bg-stone-800 w-full h-36 px-20 py-10 justify-start items-center gap-96 inline-flex">
        <div className="w-48 flex-col justify-start items-start gap-px inline-flex">
          <div className="text-center">
            <span className="text-stone-600 text-2xl font-bold font-['Space Mono'] tracking-widest">IMAGE</span>
            <span className="text-stone-600 text-2xl font-normal font-['Space Mono'] tracking-widest">TO</span>
            <span className="text-stone-600 text-2xl font-bold font-['Space Mono'] tracking-widest">CODE</span>
          </div>
          <div className="text-start w-[32vh] text-stone-600 text-lg font-normal font-['Space Grotesk']">
            Developed by Juan Oliú
          </div>
        </div>
      </header>
      {step === Step.Loading && <LoadingImage />}
      {step === Step.Preview && <Preview />}
      {/* <LoadingImage /> */}
    </div>
  )
}
