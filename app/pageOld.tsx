'use client'

// IG test screenshot
// https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/01/instagram-notes-2942288.jpg?tf=2048x

import { Form } from '@/app/form'
import { Step, useImageToCode } from '@/app/useImageToCode'
import { DragAndDrop } from '@/components/ui/dragAndDrop'
import { Spinner } from '@/components/ui/spinner'

export default function Home() {
  const { genCodeFromImage, genCodeFromUrl, result, step } = useImageToCode()

  return (
    <div className="grid grid-cols-[400px_1fr]">
      <aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
        <header className="text-center">
          <h1 className="text-3xl font-semibold">Image to code</h1>
          <h2 className="text-sm opacity-75">Convert your images to code in seconds</h2>
        </header>

        <section>{/*filters*/}</section>

        <footer>Developed by Solo</footer>
      </aside>

      <main className="bg-gray-950">
        <section className="max-w-5xl w-full mx-auto p-10">
          {step === Step.Loading && (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          )}
          {step === Step.Preview && (
            <div className="rounded flex flex-col gap-4">
              <iframe srcDoc={result} className="w-full h-full border-4 rounded border-gray-700 aspect-video" />
            </div>
          )}
          {step === Step.Initial && (
            <div className="flex flex-col gap-10">
              <DragAndDrop transformImageToCode={genCodeFromImage} />
              <Form transformUrlToCode={genCodeFromUrl} />
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
