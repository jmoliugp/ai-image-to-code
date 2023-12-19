'use client'

import { typography } from '@/app/ui/fonts'
import { ClickableIcon } from '@/components/ui/clickableIcon'
import React, { useState } from 'react'

interface Props {
  code: string
}

const COPY_MSG = 'Copy code'
const COPIED_MSG = 'Copied'
const COPY_ICON = '/copy.svg'
const COPIED_ICON = '/checkMark.svg'

export const CopyToClipboard: React.FC<Props> = ({ code }) => {
  const [msg, setMsg] = useState(COPY_MSG)
  const [icon, setIcon] = useState(COPY_ICON)

  const onCopy = () => {
    setMsg(COPIED_MSG)
    setIcon(COPIED_ICON)
    setTimeout(() => {
      setMsg(COPY_MSG)
      setIcon(COPY_ICON)
    }, 1500)
  }

  const copyToClipboard = async () =>
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log('## COPIED')
        onCopy()
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })

  return (
    <div className="flex-row inline-flex w-48 gap-1 justify-start items-start">
      <ClickableIcon iconAlt="copy-to-clipboard" iconSrc={icon} onClick={copyToClipboard} />
      <p className={`${typography.p} text-2xl ml-2`}>{msg}</p>
    </div>
  )
}
