'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  iconAlt: string
  iconSrc: string
  onClick: () => void
}

export const ClickableIcon: React.FC<Props> = ({ iconAlt, iconSrc, onClick }) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const iconClassName = clsx('mx-auto', {
    'opacity-70': isPressed,
  })

  return (
    <button
      className="flex-row items-center inline-flex"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={onClick}
    >
      <Image className={iconClassName} src={iconSrc} alt={iconAlt} width={30} height={30} priority />
    </button>
  )
}
