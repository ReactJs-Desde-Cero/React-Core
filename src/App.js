import React from 'react'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Info from './components/Info'
import store from './redux/store'

const App = () => {
  return (
      <Provider store={store}>
          <div>
              <Info />
              <Counter />
          </div>
      </Provider>
  )
}

export default App
