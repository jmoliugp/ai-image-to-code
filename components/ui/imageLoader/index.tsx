'use client'

// IG test screenshot
// https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/instagram-notes-2942288.jpg?tf=2048x

import { typography } from '@/app/ui/fonts'
import { Dropzone } from '@/components/ui/imageLoader/dropzone'
import clsx from 'clsx'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ImageLoader() {
  const { getRootProps, isDragActive } = useDropzone()

  const dragActive = clsx({
    'text-opacity-60': isDragActive,
  })

  return (
    <div
      {...getRootProps()}
      className="flex flex-col p-[10vh] items-center justify-center min-h-screen h-full relative bg-stone-900"
    >
      <div className="flex flex-row mb-20 text-center ">
        <h1 className={`${typography.h1} ${dragActive}`}>IMAGE</h1>
        <h2 className={`${typography.h2} ${dragActive}`}>TO</h2>
        <h1 className={`${typography.h1} ${dragActive}`}>CODE</h1>
      </div>
      <Dropzone isDragActive={isDragActive} />
      <footer className="w-screen justify-center items-center flex flex-col">
        <h3 className={`${typography.h3} ${dragActive}`}>Developed by Solo</h3>
      </footer>
    </div>
  )
}
