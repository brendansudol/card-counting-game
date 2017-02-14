import { NEW_GAME, DEAL_CARDS, TOGGLE_COUNT } from '../actions'

const init = {
  cards: [],
  count: 0,
  idx: 0,
  rand: 0,
  is_visible: false,
}

const game = (state = init, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...init,
        cards: action.cards,
        rand: action.rand,
      }
    case DEAL_CARDS:
      return {
        ...state,
        count: state.count + action.rand,
        idx: state.idx + state.rand,
        rand: action.rand,
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
