'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import { ClickableIcon } from '@/components/ui/clickableIcon'
import { CopyToClipboard } from '@/components/ui/codePreview/copyToClipboard'
import LikePanel from '@/components/ui/codePreview/likePanel'
import Image from 'next/image'

export default function Preview() {
  const { htmlGenerated, cancelRequest } = useImageToCodeContext()
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
          <LikePanel />
          <div className="flex-row  items-center inline-flex gap-4">
            <CopyToClipboard code={htmlGenerated} />
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
