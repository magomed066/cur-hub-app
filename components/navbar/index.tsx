import { Button } from '@components/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:p-16 px-6 py-4">
				<Link href="/" className="flex items-center justify-center">
					<Image
						src="/logo.svg"
						alt="Car Hub Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>

				<Button
					title="Sign In"
					containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
				/>
			</nav>
		</header>
	)
}
