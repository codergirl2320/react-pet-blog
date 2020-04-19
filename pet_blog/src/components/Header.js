import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <img className="header-image" src="./images/city_header.jpg" alt=""/>
        <img className="logo" src="./images/logo.png" alt=""/>
      </header>
    )
  }
}

export default Header
