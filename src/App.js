import React from 'react'
import styled, { keyframes } from 'styled-components'

const Header = styled.header`
    background: #db7093;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;
    padding: 0.3em;
    margin: 0.3em;
    font-size: 14px;
`

const pulse = keyframes`

    0% {
        transform: scale(1);
        color: #000;
        background: gray;
    }

    50%{
        transform: scale(1.3);
        color: #FFF;
        background: purple;
    }

    100% {
        transform: scale(1);
        color: #000;
        background: gray;
    }
`

const Button = styled.button`
    padding: 1em 2.5em;
    margin: 1em;
    background: gray;

    &:hover{
        animation: ${pulse} 1s ease-in-out infinite;
    }

`

const App = () => (
    <div>
        <Header>
            <h1>
                Styled Components
            </h1>
        </Header>
        <Button>
            Boton
        </Button>
    </div>
)

export default App
