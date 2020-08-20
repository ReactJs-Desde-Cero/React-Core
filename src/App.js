import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: linear-gradient(20deg, #db7093, #daa357);
    text-aling: center;
    border-radius: 0.2em;
    color: #FFF;
    padding: 0.3em;
    margin: 0.3em;
    font-size: 14px;

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
