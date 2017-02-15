import React from 'react'


const Game = ({ game, actions }) => {
  const { shoe, idx, rand, count, is_visible } = game
  const cards = shoe.slice(idx, idx + rand)

  return (
    <div>
      <pre>{JSON.stringify({ idx, rand, count, is_visible }, null, 2)}</pre>
      <div>
        {cards.map((c, i) =>
          <img
            key={i}
            alt={c}
            src={`${process.env.PUBLIC_URL}/img/cards/${c}.svg`}
            style={{ marginRight: 8, width: 100 }}
          />
        )}
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
