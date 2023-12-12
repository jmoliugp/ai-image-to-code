import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { spaceGrotesk } from '@/app/ui/fonts'
import clsx from 'clsx'

export const Dropzone = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log('🚀 ~ acceptedFiles:', acceptedFiles)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const classNameContainer = clsx(
    'flex flex-col justify-center items-center w-auto h-52 px-28 py-10 rounded-2xl border-stone-600 gap-10 mb-40',
    {
      'border-dashed': !isDragActive,
      'border-4': !isDragActive,
      'bg-opacity-0': isDragActive,
      'shadow-stone-600/70': isDragActive,
      'shadow-lg': isDragActive,
      'border-2': isDragActive,
    },
  )
  const dragMsg = isDragActive ? 'Drop it! Drop it! Drop it!' : 'Drag and drop your image, or click to select one.'

  return (
    <div {...getRootProps()} className={classNameContainer}>
      <input {...getInputProps()} />
      <div className="flex-1">
        <Image className="mx-auto" src="/click.svg" alt="pointer" width={30} height={30} priority />
      </div>
      <div className="flex-1">
        <p className={`${spaceGrotesk.className} w-52`}>{dragMsg}</p>
      </div>
    </div>
  )
}
