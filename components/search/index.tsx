'use client'
import { useState } from 'react'
import { SearchManufacturer } from '../search-manufacturer'
import React from 'react'

export const Search = () => {
	const [manufacturer, setManufacturer] = useState('')

	const handleSearch = () => {}

	return (
		<form className="searchbar">
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	)
}
