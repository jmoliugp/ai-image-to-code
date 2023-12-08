import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { SYSTEM_PROMPT, USER_PROMPT } from '@/app/api/generate-code-from-image/prompts'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { url, img } = await req.json()
  const imageUrl = url ?? img

  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    stream: true,
    max_tokens: 4096,
    messages: [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: USER_PROMPT,
          },
          {
            type: 'image_url',
            image_url: imageUrl,
          },
        ],
      },
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
