import { ADD_FRUITS } from '../actions/fruitsAction'

const FRUITS=[
  'manzana',
  'pera'
]

function fruits(state=FRUITS, acction) {
  switch (acction.type) {
    case ADD_FRUITS:
    //   return state.concat(acction.payload.fruts)
      return [
        acction.payload.fruts,
        ...state,
      ]

    default:
      return state
  }
}

export default fruits
