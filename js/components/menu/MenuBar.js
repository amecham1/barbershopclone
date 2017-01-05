import React from 'react'
import './menu.scss'
import Title from '../menu/Title'
import HamMenu from '../menu/HamMenu'

class MenuBar extends React.Component {
  render () {
    return (
      <div className='header'>
        <HamMenu />
        <Title />

      </div>
    )
  }
}

export default MenuBar
