import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
// import Counter from './components/Counter'
// import Info from './components/Info'
// import Fruits from './components/Fruits'
// import Todos from './components/Todos'
import Controller from './components/controller'

const App = () => {
  return (
      <Provider store={store}>
          <div>
              {/* <Fruits /> */}
              {/* <Info /> */}
              {/* <Counter /> */}
              {/* <Todos /> */}
              <Controller />
          </div>
      </Provider>
  )
}

export default App
