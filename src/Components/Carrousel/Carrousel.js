import React, { useState } from 'react'
import propTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Carrousel.css'

const Carrousel = ({ images }) => {
  const [active, setActive] = useState(0)

  const left = () => {
    if (active > 0) {
      setActive(active - 1)
    } else {
      setActive(images.length - 1)
    }
  }

  const right = () => {
    if (active < images.length - 1) {
      setActive(active + 1)
    } else {
      setActive(0)
    }
  }

  return (
      <div className="Carrousel">
          <div className="Carrousel_Buttons">
              <button
                onClick={left}
              >
                  Anterior
              </button>
              <button
                onClick={right}
              >
                  Siguiente
              </button>
          </div>
          <TransitionGroup>
              <CSSTransition
                timeout={1000}
                classNames="slide"
                key={active}
              >
                  <img
                    src={images[active]}
                    alt="Images"
                    className="Carrousel_Img"
                  />
              </CSSTransition>
          </TransitionGroup>
      </div>
  )
}

Carrousel.defaultProps = {
  images: [],
}

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string,
  ),
}

export default Carrousel
