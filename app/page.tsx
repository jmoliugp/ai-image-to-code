'use client'

// IG test screenshot
// https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/instagram-notes-2942288.jpg?tf=2048x

import Image from 'next/image'
import { Form } from '@/app/form'
import { Step, useImageToCode } from '@/app/useImageToCode'
import { DragAndDrop } from '@/components/ui/dragAndDrop'
import { Spinner } from '@/components/ui/spinner'
import Head from 'next/head'
import { spaceGrotesk, spaceMono, spaceMonoBold } from '@/app/ui/fonts'
import { Dropzone } from '@/components/ui/dropzone'

export default function Home() {
  const { genCodeFromImage, genCodeFromUrl, result, step } = useImageToCode()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full relative bg-stone-800">
      <div className="flex flex-row left-[771px] top-[276px] mb-20 text-center ">
        <h1 className={`${spaceMonoBold.className}`}>IMAGE</h1>
        <h1 className={`${spaceMono.className}`}>TO</h1>
        <h1 className={`${spaceMonoBold.className}`}>CODE</h1>
      </div>

      <Dropzone />
      <h2 className={`${spaceGrotesk.className} `}>Developed by Solo</h2>
    </div>
  )
}
