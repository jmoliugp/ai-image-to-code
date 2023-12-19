'use client'

import { typography } from '@/app/ui/fonts'
import { useEffect, useState } from 'react'

const LOADING_DOT = '.'
const MAX_DOTS_COUNT = 3

interface Props {
  msg: string
}

export function LoadingMsg(props: Props) {
  const [dotsCount, setDotsCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDotsCount((prevCount) => (prevCount + 1) % (MAX_DOTS_COUNT + 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const loadingMsg = props.msg + LOADING_DOT.repeat(dotsCount)

  return <p className={`${typography.p} text-2xl`}>{loadingMsg}</p>
}
