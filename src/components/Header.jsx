import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo"><a href="#home">Chakra.dev</a></div>
      <div className="header_items">
        <div className="header_item"><a href="#home">Home</a></div>
        <div className="header_item"><a href="#about">About</a> </div>
        <div className="header_item"><a href='#portfolio'>Projects</a></div>
        <div className="header_item"><a href='#contact'>Contact</a></div>
      </div>
    </div>
  )
}

export default Header
