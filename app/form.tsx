'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

interface Props {
	transformUrlToCode: (url: string) => Promise<void>
}

export const Form: React.FC<Props> = ({ transformUrlToCode }) => {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault()

				const form = event.currentTarget
				const url = form.elements.namedItem('url') as HTMLInputElement

				transformUrlToCode(url.value)
			}}
		>
			<Label htmlFor="url">Enter your image URL</Label>
			<Input name="url" id="url" type="url" placeholder="https://your-screenshot/image.jpg"></Input>
			<Button>Generate image code</Button>
		</form>
	)
}
