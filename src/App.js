import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: linear-gradient(20deg, #db7093, #daa357);
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;
    padding: 0.3em;
    margin: 0.3em;
    font-size: 14px;

`

const Button = styled.button`
padding: 0.6em 1em;
background: ${(props) => props.active ? 'purple' : 'black'};
border-radius: 0.1em;
color: #FFF;
border: 0;
margin: 0.4em;

`

const App = () => {
  const [active, setActive] = useState(false)

  const click = () => {
    setActive(!active)
  }

  return (

      <div>
          <Header>
              <h1>
                  Styled Components
              </h1>
          </Header>
          <Button onClick = { click }>
              Un Boton
          </Button>
          <Button onClick = { click } active = { active }>
              toggle
          </Button>
      </div>

  )
}

export default App
