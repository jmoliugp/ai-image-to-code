'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import { ClickableIcon } from '@/components/ui/clickableIcon'
import { useLike } from '@/components/ui/codePreview/useLike'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Preview() {
  const { htmlGenerated, cancelRequest } = useImageToCodeContext()
  const { disLike, like, thumbDownIcon, thumbUpIcon } = useLike()
  const isStreaming = false

  const onClick = () => console.log('## CLICK')

  return (
    <div className="flex flex-col flex-grow w-screen justify-center items-center px-56 gap-7">
      <div className="w-full h-96 relative rounded-2xl border ">
        <iframe srcDoc={htmlGenerated} className="w-full h-full border-4 rounded border-gray-700 aspect-video" />
      </div>
      {isStreaming && (
        <footer className="w-full self-end flex-row inline-flex justify-between content-between">
          <p className={`${typography.p} text-2xl ml-2`}>Generating...</p>
          <button className="flex-row  items-center inline-flex" onClick={cancelRequest}>
            <Image className="mx-auto" src="/cross.svg" alt="pointer" width={30} height={30} priority />
            <p className={`${typography.p} text-2xl ml-2`}>Stop</p>
          </button>
        </footer>
      )}
      {!isStreaming && (
        <footer className="w-full self-end flex-row inline-flex justify-between content-between">
          <div className="flex-row inline-flex gap-3 justify-start">
            <p className={`${typography.p} text-2xl ml-2`}>How well did I do?</p>
            <ClickableIcon iconAlt="thumb-up" iconSrc={thumbUpIcon} onClick={like} />
            <ClickableIcon iconAlt="thumb-down" iconSrc={thumbDownIcon} onClick={disLike} />
          </div>
          <div className="flex-row  items-center inline-flex gap-4">
            <div className="flex-row inline-flex gap-1 justify-start">
              <ClickableIcon iconAlt="copy-to-clipboard" iconSrc="/copy.svg" onClick={onClick} />
              <p className={`${typography.p} text-2xl ml-2`}>Copy code</p>
            </div>
            <div className="flex-row inline-flex gap-1 justify-start">
              <ClickableIcon iconAlt="regenerate" iconSrc="/revert.svg" onClick={onClick} />
              <p className={`${typography.p} text-2xl ml-2`}>Regenerate</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
