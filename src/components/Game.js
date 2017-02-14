import React from 'react'

const Game = ({ game, actions }) => {
  const { cards, count, idx, rand, is_visible } = game

  return (
    <div>
      <pre>{JSON.stringify({ count, idx, rand, is_visible }, null, 2)}</pre>
      <div>
        {[...Array(rand)].map((_, i) => (
          <span key={i}>{cards[idx + i]}{' '}</span>
        ))}
      </div>
      <p>
        <button onClick={actions.deal}>next</button>
        <button onClick={actions.toggleCount}>show/hide</button>
        <button onClick={actions.newGame}>new game</button>
      </p>
    </div>
  )
}

export default Game
