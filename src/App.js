import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: #db7093;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;
    padding: 0.3em;
    margin: 0.3em;
    font-size: 14px;

    @media (max-width: 700px) {
        background: #000;
        font-size: 20px;

        h1 {
            color: yellow;
        }

    }

    @media(max-width: 1000px){
        background: purple;
        padding: 1em 0.3em;
    }


`

const App = () => (
    <div>
        <Header>
            <h1>
                Styled Components
            </h1>
        </Header>
    </div>
)

export default App
