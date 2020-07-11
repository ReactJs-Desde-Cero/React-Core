import React, { useState, lazy, Suspense } from 'react'
import { MoonLoader } from 'react-spinners'

const Image = lazy(() => import('./Components/Image'))

const App = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show)
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <button onClick={toggle}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      {show && <Suspense fallback={<MoonLoader color='orangered' />} >
        <Image />
      </Suspense>}
    </div>
  )
}
export default App