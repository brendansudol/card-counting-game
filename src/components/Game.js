import React from 'react'

const Game = ({ game, actions }) => {
  const { count, is_visible, rand } = game

  return (
    <div>
      <p>{JSON.stringify(game)}</p>
      <p>{rand}{' '}{is_visible && count}</p>
      <p>
        <button onClick={actions.deal}>next</button>
        <button onClick={actions.toggleCount}>show/hide</button>
      </p>
    </div>
  )
}

export default Game
