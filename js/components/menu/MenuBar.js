import React from 'react'
import './menu.scss'
import Title from '../menu/Title'

class MenuBar extends React.Component {
  render () {
    return (
      <div className='header'>
        <Title />
      </div>
    )
  }
}

export default MenuBar
