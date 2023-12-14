'use client'

import { useState } from 'react'

type Liked = null | boolean

const THUMB_UP_ICON = '/thumbUp.svg'
const THUMB_DOWN_ICON = '/thumbDown.svg'
const THUMB_UP_FILLED_ICON = '/thumbUpFilled.svg'
const THUMB_DOWN_FILLED_ICON = '/thumbDownFilled.svg'

export const useLike = () => {
  const [liked, setLiked] = useState<Liked>(null)

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

  return {
    thumbUpIcon,
    thumbDownIcon,
    like,
    disLike,
  }
}
