'use client'

import { Form } from '@/app/form'

export default function Home() {
	const transformUrlToCode = async (url: string) => {
		const res = await fetch('api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (res.ok || res.body === null) {
			throw new Error('Error generating the code')
		}

		const reader = res.body.getReader()
		const decoder = new TextDecoder()

		while (true) {
			const { done, value } = await reader.read()
			const chunk = decoder.decode(value)

			if (done) break
		}
	}

	return (
		<div className="grid grid-cols-[400px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
				<header>
					<h1 className="text-3xl font-semibold">Image to code</h1>
					<h2 className="text-sm opacity-75">Convert your images to code in seconds</h2>
				</header>

				<section>{/*filters*/}</section>

				<footer>Developed by Solo</footer>
			</aside>
			<main className="bg-gray-950">
				<section className="max-w-2xl mx-auto p-10">
					<div className="flex flex-col gap-10">
						<Form transformUrlToCode={transformUrlToCode} />
					</div>
				</section>
			</main>
		</div>
	)
}
