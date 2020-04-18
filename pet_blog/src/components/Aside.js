import React, { Component } from "react";

class Aside extends React.Component {
  render() {
    return(
      <aside>
        <h1>Navigate</h1>
        <ul>
          <li onClick={() => {this.props.viewHandler('home')}}>home</li>
          <li onClick={() => {this.props.viewHandler('addPost')}}>add post</li>
          <li><a href="/about">about</a></li>
        </ul>
        <div className="aside-images">
          <img className="Buddy" src="./images/Buddy.png" alt=""/>
          <img className="Ozone" src="./images/Ozone.png" alt=""/>
          <img className="Mel" src="./images/Mel.png" alt=""/>
        </div>
      </aside>
    )
  }
}

export default Aside
