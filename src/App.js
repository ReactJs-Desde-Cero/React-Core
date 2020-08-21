import React from 'react'
import {
  BrowserRouter, Route, NavLink, Redirect,
} from 'react-router-dom'
import './App.css'

const Navegation = () => (
    <nav>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/login' activeClassName='active'>Login</NavLink>
        <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    </nav>
)

const Home = () => (
    <h1>Home</h1>
)

const Login = ({location}) => {
  if (location.state) {
    return <h2>{location.state.message}</h2>
  }

  return (
      <h1>Login</h1>
  )
}

const isAuth = false

const Perfil = () => {
  return isAuth
    ? <h2>Bienvenido a tu Perfil</h2>
    : <Redirect to={ {
      pathname: '/login',
      state: {
        message: 'Debes hacer login para acceder a tu perfil',
      },
    } }
    />
}

const App = () => (
    <BrowserRouter>
        <Navegation />
        <Route path='/' exact render={ Home } />
        <Route path='/login' exact render={ Login } />
        <Route path='/perfil' exact render={ Perfil } />
        <Redirect from='/p' to='/perfil' />
    </BrowserRouter>
)

export default App
