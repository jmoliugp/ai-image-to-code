'use client'

// IG test screenshot
// https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/instagram-notes-2942288.jpg?tf=2048x

import { CodeGenProvider, useImageToCodeContext } from '@/app/providers/codeGenProvider'
import { Step } from '@/app/useImageToCode'
import CodePreview from '@/components/ui/codePreview'
import ImageLoader from '@/components/ui/imageLoader'

function Home() {
  const { step } = useImageToCodeContext()

  const Scene = step === Step.Initial ? ImageLoader : CodePreview
  return <Scene />
}

export default function HomeWithProvider() {
  return (
    <CodeGenProvider>
      <Home />
    </CodeGenProvider>
  )
}
