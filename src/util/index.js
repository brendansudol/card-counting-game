const SUITS = { H: '♥', D: '♦', C: '♣', S: '♠' }

export const randBetween = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

export const rand = () => randBetween(2, 5)

export const shuffle = arr => {
  let counter = arr.length

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)

    counter--

    let temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }

  return arr
}

export const add = (a, b) => a + b

export const deck = () => ([
  'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA',
  'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA',
  'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA',
  'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA',
])

export const makeShoe = (n = 6) => (
  [].concat(...[...Array(n)].map(_ => shuffle(deck())))
)

export const hiLo = card => {
  const val = card.slice(1)
  if (['2', '3', '4', '5', '6'].includes(val)) return -1
  if (['10', 'J', 'Q', 'K', 'A'].includes(val)) return 1
  return 0
}

export const cardPretty = card => `${card.slice(1)}${SUITS[card[0]]}`

export const getCount = (init, cards) => cards.map(hiLo).reduce(add, init)
