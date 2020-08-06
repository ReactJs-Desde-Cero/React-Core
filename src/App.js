import React from 'react'
import Carrousel from './Components/Carrousel/Carrousel'

const images = [
    'https://images.pexels.com/photos/355403/pexels-photo-355403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/890049/pexels-photo-890049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]

const App = () => (
    <div>
        <Carrousel images={images} />
    </div>
)

export default App
