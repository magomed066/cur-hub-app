import { MouseEventHandler } from 'react'

export interface Props {
	title: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	containerStyles?: string
	disabled?: boolean
	type?: 'button' | 'submit'
}
