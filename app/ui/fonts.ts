import { Space_Mono, Space_Grotesk } from 'next/font/google'

export const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400'] })
export const spaceMonoBold = Space_Mono({ subsets: ['latin'], weight: ['700'] })
export const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400'] })

export const typography = {
  h1: `${spaceMonoBold.className} text-stone-600 text-2xl font-bold tracking-widest`,
  h2: `${spaceMono.className} text-stone-600 text-2xl font-bold tracking-widest`,
  h3: `${spaceMonoBold.className} text-stone-600`,
  p: `${spaceGrotesk.className} text-center text-stone-200`,
}
