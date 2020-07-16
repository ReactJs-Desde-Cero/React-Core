import React, { useState, useRef } from 'react'
import arrow from '../img/arrow.svg'
import propTypes from 'prop-types'

export const Acordion = ({ title, content, bgcolor }) => {

    const [active, setActive] = useState(false)
    const newRef = useRef()

    const panelStyle = {
        background: bgcolor,
        color: '#FFF',
        padding: '0.4em 1em',
        display: 'flex',
        alingItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none'
    }


    const contentStyle = {
        height: active ? newRef.current.scrollHeight : '0px',
        overflow: 'hidden',
        padding: active ? '1em 0.5em' : '0 0.5em',
        transition: 'all 350ms ease',
        border: '2px solid ' + bgcolor
    }

    const imgStyle = {
        width: '18px',
        transition: 'transform 250ms ease-out',
        transform: active ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    const toggle = () => {
        setActive(!active)
    }

    return (
        <div>
            <div
                style={panelStyle}
                onClick={toggle}
            >
                <span>{title}</span>
                <img
                    src={arrow}
                    alt="Flecha"
                    style={imgStyle}
                />
            </div>
            <div
                style={contentStyle}
                ref={newRef}
            >
                {content}
            </div>
        </div>
    )
}

Acordion.defaultProps = {
    title: '',
    content: '',
    bgcolor: '#523da5'
}

Acordion.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    bgcolor: propTypes.string
}