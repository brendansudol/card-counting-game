import { rand } from '../util'

export const DEAL_CARDS = 'DEAL_CARDS'
export const TOGGLE_COUNT = 'TOGGLE_COUNT'

export const deal = () => ({
  type: DEAL_CARDS,
  rand: rand(),
})

export const toggleCount = () => ({
  type: TOGGLE_COUNT,
})
