import { makeShoe, rand } from '../util'


export const NEW_GAME = 'NEW_GAME'
export const DEAL_CARDS = 'DEAL_CARDS'
export const TOGGLE_COUNT = 'TOGGLE_COUNT'

export const newGame = () => ({
  type: NEW_GAME,
  shoe: makeShoe(2),
  rand: rand(),
})

export const deal = () => ({
  type: DEAL_CARDS,
  rand: rand(),
})

export const toggleCount = () => ({
  type: TOGGLE_COUNT,
})
