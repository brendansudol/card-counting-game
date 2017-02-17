import React from 'react'


const Game = ({ game, actions }) => {
  const { shoe, idx, rand, count, is_visible } = game
  const cards = shoe.slice(idx, idx + rand)

  return (
    <div style={{ padding: 32 }}>
      <h1>What’s the count?</h1>
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
      <p>cards seen: {idx + rand}</p>
      <p>
        <button onClick={actions.toggleCount}>
          {is_visible ? 'hide' : 'show'} count
        </button>
        <button onClick={actions.newGame}>reset</button>
        <button onClick={actions.deal}>deal</button>
      </p>
      {is_visible && <h2>{count}</h2>}
    </div>
  )
}

export default Game
