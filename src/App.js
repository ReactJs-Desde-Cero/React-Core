import React from 'react'
import { Counter, Title, Button } from './Components/Counter'

const App = () => {
  return (
    <div>
      <Counter>
        <Title />
        <Title>
          {(clicks) => (
            <div>
              <h1>{clicks} Clicks</h1>
            </div>
          )}
        </Title>
        <Button type='increment' />
        <Button type='decrement' />
      </Counter>
    </div>
  )
}

export default App