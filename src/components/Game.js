import React from 'react'

import Footer from './Footer'
import Header from './Header'


const Game = ({ game, actions }) => {
  const { shoe, idx, rand, count, is_visible } = game
  const idxEnd = idx + rand
  const cards = shoe.slice(idx, idxEnd)

  return (
    <div className='p3 mx-auto' style={{ maxWidth: 600 }}>
      <Header />
      <div className='mb3'>
        {cards.map((c, i) =>
          <img
            key={i}
            alt={c}
            className='mr1'
            src={`${process.env.PUBLIC_URL}/img/cards/${c}.svg`}
            style={{ width: 100, height: 139 }}
          />
        )}
      </div>
      <div className='mb2'>
        <button
          className='btn btn-primary bg-red'
          onClick={actions.toggleCount}
          style={{ width: 210 }}
        >
          {is_visible ? 'Hide' : 'Show'} running count
        </button>
        {is_visible &&
          <span className='ml2 h3 bold align-middle'>{count}</span>
        }
      </div>
      <div className='mb2'>
        <button
          className='btn btn-primary bg-black mr2'
          onClick={actions.newGame}
        >
          Reset
        </button>
        <button
          className='btn btn-primary bg-black'
          onClick={actions.deal}
        >
          More cards →
        </button>
      </div>
      <p className='h5'>
        Cards seen: {idxEnd} ({shoe.length - idxEnd} remaining)
      </p>
      <Footer />
    </div>
  )
}

export default Game
