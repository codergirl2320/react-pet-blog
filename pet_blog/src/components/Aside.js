import React from 'react'

class Aside extends React.Component {
  render() {
    return(
      <aside>
        <h1>Navigate</h1>
        <ul>
          <li onClick={() => {this.props.viewHandler('home')}}>home</li>
          <li onClick={() => {this.props.viewHandler('addPost')}}>add post</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
