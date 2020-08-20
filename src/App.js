import React from 'react'
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
background: ${(props) => props.bg || 'black'};
border-radius: 0.1em;
color: #FFF;
border: 0;
margin: 0.4em;

`

const App = () => (
    <div>
        <Header>
            <h1>
                Styled Components
            </h1>
        </Header>
        <Button>
            Un Boton
        </Button>
        <Button bg = "red">
            toggle
        </Button>
    </div>
)

export default App
