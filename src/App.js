import React from 'react'
import {
  BrowserRouter, Route, NavLink, Redirect,
} from 'react-router-dom'
import './App.css'

const Navegation = () => (
    <nav>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/ninja' activeClassName='active'>Ninja</NavLink>
        <NavLink to='/videos' activeClassName='active'>Videos</NavLink>
    </nav>
)

const Home = () => (
    <h1>Home</h1>
)

const Ninja = () => (
    <h1>Ninja</h1>
)

const Videos = () => (
    <h1>Videos</h1>
)

const NavegacionInperativa = ({history}) => {
  console.log(history)
  return (
      <div>
          <button onClick={history.goBack}>
              Atras
          </button>
          <button onClick={history.goForward}>
              Adelante
          </button>
          <button onClick={() => {
            history.go(2)
          }}
          >
              Go 2
          </button>
          <button onClick={() => {
            history.push('/ninja')
          }}
          >
              GO NINJA
          </button>
          <button onClick={() => {
            history.replace('/ninja')
          }}
          >
              Replace
          </button>
      </div>
  )
}

const App = () => (
    <BrowserRouter>
        <Navegation />
        <Route render={NavegacionInperativa} />
        <Route path='/' exact render={ Home } />
        <Route path='/ninja' exact render={ Ninja } />
        <Route path='/videos' exact render={ Videos } />
    </BrowserRouter>
)

export default App
