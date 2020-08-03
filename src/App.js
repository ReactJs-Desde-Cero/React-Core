import React from 'react'
import Slides from './Components/Slides'

const imag = [
	{
		src:
			'https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		title: 'Arte Extremo',
	},
	{
		src:
			'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		title: 'Bonito Reloj',
	},
	{
		src:
			'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		title: 'Buena Foto',
	},
]

const App = () => {
	return (
		<div>
			<Slides images={imag} interval={1000} />
		</div>
	)
}

export default App
