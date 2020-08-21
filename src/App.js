import React from 'react'
import {
  BrowserRouter, Route, Link, NavLink,
} from 'react-router-dom'
import './App.css'
import queryString from 'query-string'

const Hola = () => (
    <h1>Hola</h1>
)

const Productos = (props) => (
    <div>
        <h1>Productos</h1>
        <Link to='/productos/gamers'>Gamers </Link>
        <Link to='/productos/hogar'>Hogar</Link>
    </div>
)

const Home = () => (
    <h1>Home</h1>
)

const ProductosCategoria = ({ match }) => {
  console.log(match)
  return (
      <div>
          <h1>Categoria: { match.params.categoria }</h1>
      </div>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around',
}

const NavActive = {
  color: 'orangered',
}

const Navegation = () => (
    <nav style={ navStyles }>
        <NavLink
          to='/'
          exact
          activeStyle={ NavActive }
        >
            Home
        </NavLink>
        <NavLink
          to='/hola'
          activeClassName='navActive'
        >
            Hola
        </NavLink>
        <NavLink
          to='/productos'
          activeStyle={ NavActive }
        >
            Productos
        </NavLink>
        <NavLink
          to='/ropa'
          activeStyle={ navStyles }
        >
            Ropa
        </NavLink>
    </nav>
)

const Ropa = ({ location }) => {

  // const query = new URLSearchParams(location.search)
  // const color = query.get('color')
  // const talla = query.get('talla')
  // otra manera de trabajar con parametros
  const { color, talla } = new queryString.parse(location.search)
  return (
      <div>
          <h1>Ropa</h1>
          <div>
              Color: { color }
          </div>
          <div>
              Talla: { talla }
          </div>
      </div>
  )
}

const App = () => (
    <div>
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact render={ Home } />
            <Route path='/hola' render={ Hola } />
            <Route path='/productos' exact render={ Productos } />
            <Route path='/productos/:categoria' render={ ProductosCategoria } />
            <Route path='/ropa' render={ Ropa } />
        </BrowserRouter>
    </div>
)

export default App
