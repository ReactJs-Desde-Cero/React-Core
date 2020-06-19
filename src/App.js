import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Profile extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }

    render() {
        const { name, bio, email } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Profile
                    name='Alexander'
                    bio='Desarollador Back End'
                    email='alexander.ayras@gmail.com'
                />
            </div>
        )
    }
}

export default App