import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Game from '../components/Game'
import * as Actions from '../actions'


const App = ({ game, actions }) => (
  <div>
    <Game game={game} actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  game: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
