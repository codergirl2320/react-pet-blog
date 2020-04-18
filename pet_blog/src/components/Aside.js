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
        <img src="./images/Buddy.png"/>
      </aside>
    )
  }
}

export default Aside
