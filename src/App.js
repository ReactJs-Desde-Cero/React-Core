import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
    <h1>Hola</h1>
)

const Productos = () => (
    <h1>Productos</h1>
)

const Home = () => (
    <h1>Home</h1>
)

const App = () => (
    <div>
        <BrowserRouter>
            {/* <Route path='/' exact component={ () => (<h1>Home en linea</h1>) } /> */}
            <Route path='/' exact component={ Home } />
            <Route path='/hola' render={ Hola } />
            <Route path='/productos'>
                {/* <Productos /> */}
                {({ match }) => {
                  if (!match) return null
                  return (
                      <Productos />
                  )
                }}
            </Route>
            {/* <Route path='/productos' sensitive component={ Productos } /> */}
        </BrowserRouter>
    </div>
)

export default App
