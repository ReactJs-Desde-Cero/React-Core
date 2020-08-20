import React from 'react'
import styled from 'styled-components'

// Variable Basica
const colorPrincipal = 'tomato'

// Constante Completa
const paddingBasic = 'padding: 0.4em;'

const Header = styled.header`
    background: ${colorPrincipal};
    text-aling: center;
    border-radius: 0.2em;
    color: #FFF;
    ${paddingBasic}
    margin: 0.3em;
    font-size: 14px;

`

const Subtitle = styled.h2`

    color: ${colorPrincipal};

`

const App = () => (
    <div>
        <Header>
            <h1>
                Styled Components
            </h1>
        </Header>
        <Subtitle>
            Ejemplo de Titulo
        </Subtitle>
    </div>
)

export default App
