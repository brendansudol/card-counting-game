import { NEW_GAME, DEAL_CARDS, TOGGLE_COUNT } from '../actions'
import { getCount } from '../util'


const init = {
  shoe: [],
  idx: 0,
  rand: 0,
  count: 0,
  is_visible: false,
}

const start = (state, action) => {
  const { shoe, rand } = action

  return {
    ...init,
    shoe,
    rand,
    count: getCount(0, shoe.slice(0, rand)), 
  }
}

const deal = (state, action) => {
  const { rand } = action
  const idx = state.idx + state.rand
  const cards = state.shoe.slice(idx, idx + rand)

  return {
    ...state,
    idx,
    rand,
    count: getCount(state.count, cards),
  }
}

const game = (state = init, action) => {
  switch (action.type) {
    case NEW_GAME:
      return start(state, action)
    case DEAL_CARDS:
      return deal(state, action)
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
