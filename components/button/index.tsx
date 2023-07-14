'use client'
import Image from 'next/image'
import { Props } from './types'

export const Button = ({
	title,
	containerStyles,
	onClick,
	disabled = false,
	type = 'button',
	textStyles,
	rightIcon,
}: Props) => {
	return (
		<button
			disabled={disabled}
			type={type}
			className={`custom-btn ${containerStyles} ${textStyles}`}
			onClick={onClick}
		>
			<span className={`flex-1`}>{title}</span>

			{rightIcon ? (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						alt={rightIcon}
						fill
						className="object-contain"
					/>
				</div>
			) : null}
		</button>
	)
}
