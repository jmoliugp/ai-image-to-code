'use client'

import { useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { typography } from '@/app/ui/fonts'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const BASE_LOADING_MSG = 'Looking at your image'
const LOADING_DOT = '.'
const MAX_DOTS_COUNT = 3

export default function LoadingImage() {
  const { cancelRequest } = useImageToCodeContext()
  const [dotsCount, setDotsCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDotsCount((prevCount) => (prevCount + 1) % (MAX_DOTS_COUNT + 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const loadingMsg = BASE_LOADING_MSG + LOADING_DOT.repeat(dotsCount)

  return (
    <div className="flex flex-col flex-grow w-screen justify-center items-center px-56 ">
      <div className="self-center w-3/6 h-3/6 mb-40 px-28 py-10 rounded-2xl shadow flex-col justify-center items-center gap-5 inline-flex">
        <Image className="mx-auto" src="/eye.svg" alt="pointer" width={30} height={30} priority />
        <div className=" w-[30vh] flex items-center">
          <p className={`${typography.p} text-2xl`}>{loadingMsg}</p>
        </div>
      </div>
      <footer className="self-end flex-col justify-end items-end">
        <button className="flex-row  items-center inline-flex" onClick={cancelRequest}>
          <Image className="mx-auto" src="/cross.svg" alt="pointer" width={30} height={30} priority />
          <p className={`${typography.p} text-2xl ml-2`}>Stop</p>
        </button>
      </footer>
    </div>
  )
}
