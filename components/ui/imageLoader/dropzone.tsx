import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { spaceGrotesk } from '@/app/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './dropzone.module.css'

interface Props {
  isDragActive: boolean
}

const DROP_MSG = 'Drag and drop your image, or click to select one.'
const DROP_MSG_HOVER = 'Drop it! Drop it! Drop it!'

export const Dropzone: React.FC<Props> = ({ isDragActive }) => {
  const { genCodeFromImage } = useImageToCodeContext()

  const onDrop = (droppedFiles: File[]) => {
    const file = droppedFiles[0]
    if (file == null) return

    genCodeFromImage(file)
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const classNameContainer = clsx(
    'h-[23vh] min-h-[170px] min-w-[100px] flex flex-col justify-center items-center w-auto px-28 py-10 border-2 rounded-2xl border-stone-600 gap-10 mb-[25vh]',
    {
      'border-dashed': !isDragActive,
      'bg-opacity-0': isDragActive,
      'shadow-stone-600/70': isDragActive,
      'shadow-lg': isDragActive,
      [styles.animateExpand]: isDragActive,
      [styles.animateMinimize]: !isDragActive,
    },
  )
  const dragMsg = isDragActive ? DROP_MSG_HOVER : DROP_MSG

  return (
    <div {...getRootProps()} className={`${classNameContainer} neon-button neon-button__2`}>
      <input {...getInputProps()} />
      <div className="flex-1">
        <Image className="mx-auto" src="/click.svg" alt="pointer" width={30} height={30} priority />
      </div>
      <div className="flex-1">
        <p className={`${spaceGrotesk.className} w-52 text-center`}>{dragMsg}</p>
      </div>
    </div>
  )
}
