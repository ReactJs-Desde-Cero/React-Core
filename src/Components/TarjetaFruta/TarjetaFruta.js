import React, { Component } from 'react'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends Component {

    state = {
        cantidad: 0
    }

    agregar = () => {
        this.setState((state) => ({
            cantidad: this.state.cantidad + 1
        }))
    }

    quitar = () => {
        this.setState((state) => ({
            cantidad: this.state.cantidad - 1
        }))
    }

    limpiar = () => {
        this.setState((state) => ({
            cantidad: 0
        }))
    }

    render() {

        const hasItems = this.state.cantidad > 0
        const activeClass = hasItems ? styles['card-active'] : ''
        const clases = styles.card + ' ' + activeClass

        return (
            <div className={clases} >
                <h3>{this.props.name}</h3>
                <div>Cantidad: {this.state.cantidad} </div>
                <button
                    onClick={this.agregar}
                >
                    +
                </button>
                <button
                    onClick={this.quitar}
                >
                    -
                </button>
                <button
                    onClick={this.limpiar}
                >
                    Limpiar
                </button>
                <hr />
                <p>$ {this.props.price}</p>
                <p>
                    Total: {`${this.state.cantidad * this.props.price}`}
                </p>
            </div>
        )
    }
}

export default TarjetaFruta