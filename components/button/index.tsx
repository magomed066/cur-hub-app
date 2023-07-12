'use client'
import Image from 'next/image'
import { Props } from './types'

export const Button = ({
	title,
	containerStyles,
	onClick,
	disabled = false,
	type = 'button',
}: Props) => {
	return (
		<button
			disabled={disabled}
			type={type}
			className={`custom-btn ${containerStyles}`}
			onClick={onClick}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}
