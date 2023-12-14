'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import { ClickableIcon } from '@/components/ui/clickableIcon'

export const Regenerate = () => {
  const { genCodeFromImage, image } = useImageToCodeContext()

  const onRegenerate = () => {
    if (image == null) return
    genCodeFromImage(image)
  }

  return (
    <div className="flex-row inline-flex gap-1 justify-start">
      <ClickableIcon iconAlt="regenerate" iconSrc="/revert.svg" onClick={onRegenerate} />
      <p className={`${typography.p} text-2xl ml-2`}>Regenerate</p>
    </div>
  )
}
