'use client'

import { typography } from '@/app/ui/fonts'
import { ClickableIcon } from '@/components/ui/clickableIcon'
import { useState } from 'react'

const THUMB_UP_ICON = '/thumbUp.svg'
const THUMB_DOWN_ICON = '/thumbDown.svg'
const THUMB_UP_FILLED_ICON = '/thumbUpFilled.svg'
const THUMB_DOWN_FILLED_ICON = '/thumbDownFilled.svg'

export default function LikePanel() {
  const [liked, setLiked] = useState<null | boolean>(null)

  let thumbUpIcon = THUMB_UP_ICON
  let thumbDownIcon = THUMB_DOWN_ICON

  if (liked === true) {
    thumbUpIcon = THUMB_UP_FILLED_ICON
    thumbDownIcon = THUMB_DOWN_ICON
  }

  if (liked === false) {
    thumbUpIcon = THUMB_UP_ICON
    thumbDownIcon = THUMB_DOWN_FILLED_ICON
  }

  if (liked == null) {
    thumbUpIcon = THUMB_UP_ICON
    thumbDownIcon = THUMB_DOWN_ICON
  }

  const like = () => {
    setLiked((prev) => (prev === true ? null : true))
  }

  const disLike = () => {
    setLiked((prev) => (prev === false ? null : false))
  }

  return (
    <div className="w-80 inline-flex gap-3 justify-start">
      <p className={`${typography.p} text-2xl ml-2`}>How well did I do?</p>
      <ClickableIcon iconAlt="thumb-up" iconSrc={thumbUpIcon} onClick={like} />
      <ClickableIcon iconAlt="thumb-down" iconSrc={thumbDownIcon} onClick={disLike} />
    </div>
  )
}
