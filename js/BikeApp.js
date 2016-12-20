import React from 'react'
import { render } from 'react-dom'
import '../js/scss/reset.scss'
import '../js/scss/base.scss'

import MenuBar from './components/menu/MenuBar'

// import { BrowserRouter, Match } from 'react-router'

const App = React.createClass({
  render () {
    return (
      <div>
        <MenuBar />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
