import React, { Component } from 'react'
import { render } from '@testing-library/react'

class Contador extends Component {

    state = {
        video: {
            titulo: 'Super Video',
            likes: 0
        }
    }

    add = () => {
        this.setState((state) => ({
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.video.titulo} 🎮 </h1>
                <button
                    onClick={this.add}
                >
                    Likes: {this.state.video.likes}
                </button>
            </div>
        )
    }
}

const App = (props) => {
    return (
        <div>
            <Contador />
        </div>
    )
}

export default App