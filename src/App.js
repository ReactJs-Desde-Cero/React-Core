import React, { Component } from 'react'

class App extends Component {

  state = {
    user: {
      name: 'Gerardo Gallegos',
      country: 'Mexico',
      twiter: '@luxfenix',
      youtube: 'tecs.ninja'
    }
  }

  render() {
    const { user } = this.state
    const keys = Object.keys(user)
    // => ['name', 'country', 'twitter']
    return (
      <div>
        <h3>Iterando listas de objetos 🌟 </h3>
        <ul>
          {keys.map(key => (
            <li>
              <strong>{key}</strong>: {user[key]}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
