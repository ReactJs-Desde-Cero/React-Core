import React from 'react'
import Carrousel from './Components/Carrousel/Carrousel'

const images = [
  'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1185434/pexels-photo-1185434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/54320/rose-roses-flowers-red-54320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]

const App = () => (
    <div>
        <Carrousel images={images} />
    </div>
)

export default App
