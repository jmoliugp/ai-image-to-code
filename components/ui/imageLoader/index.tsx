'use client'

// IG test screenshot
// https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/instagram-notes-2942288.jpg?tf=2048x

import { typography } from '@/app/ui/fonts'
import { Dropzone } from '@/components/ui/imageLoader/dropzone'

export default function ImageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full relative bg-stone-900">
      <div className="flex flex-row mb-20 text-center ">
        <h1 className={typography.h1}>IMAGE</h1>
        <h2 className={typography.h2}>TO</h2>
        <h1 className={typography.h1}>CODE</h1>
      </div>
      <Dropzone />
      <h3 className={typography.h3}>Developed by Solo</h3>
    </div>
  )
}
