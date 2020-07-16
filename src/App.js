import React from 'react'
import { Acordion } from './Components/Acordion'

const App = () => {
    return (
        <div>
            <Acordion
                title='Nanatsu no Taizai'
                content='Meliodas es hijo del rey Demonio y Elizabet es hija de la Deidad Suprema y no pueden estar juntos por que no esta permitido que un demonio este con un angel'
                bgcolor='black'
            />
            <Acordion
                title='DragonBall Heroes'
                content='Ya no esta muy bueno por que ahora parece que pokemon se ha incluido en ese anime y no gusta  :V'
                bgcolor='purple'
            />
            <Acordion
                title='Nanuto'
                content='Un anime epico que nunca olvidare, te enseña que uno nunca debe de rendirse por lo que quiere tener y es un ejemplo a seguir y lo mejor de todo que habra acabado Naruto pero aun sigure Boruto que parece que esta llendo por buen camino'
            // bgcolor='purple'
            />
        </div>
    )
}

export default App