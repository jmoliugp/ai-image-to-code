'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import Image from 'next/image'

export default function LoadingImage() {
  const { cancelRequest } = useImageToCodeContext()

  return (
    <div className="flex flex-col flex-grow w-screen justify-center items-center px-56 ">
      <div className="self-center w-3/6 h-3/6 mb-40 px-28 py-10 rounded-2xl shadow flex-col justify-center items-center gap-5 inline-flex">
        <Image className="mx-auto" src="/eye.svg" alt="pointer" width={30} height={30} priority />
        <p className={`${typography.p} text-2xl`}>Looking at your image...</p>
      </div>
      <footer className="self-end flex-col justify-end items-end">
        <button className="flex-row  items-center inline-flex" onClick={cancelRequest}>
          <Image className="mx-auto" src="/cross.svg" alt="pointer" width={30} height={30} priority />
          <p className={`${typography.p} text-2xl ml-2`}>Stop</p>
        </button>
      </footer>
    </div>
  )
}
