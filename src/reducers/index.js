import { DEAL_CARDS, TOGGLE_COUNT } from '../actions'

const init = {
  count: 0,
  is_visible: false,
}

const game = (state = init, action) => {
  switch (action.type) {
    case DEAL_CARDS:
      return {
        ...state,
        rand: action.rand,
        count: state.count + action.rand,
      }
    case TOGGLE_COUNT:
      return {
        ...state,
        is_visible: !state.is_visible,
      }
    default:
      return state
  }
}

export default game
