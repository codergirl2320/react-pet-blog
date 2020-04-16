import React from 'react'

class Post extends React.Component {
  render() {
    return (
      <article>
        <div className="post-header">
          <img src={this.props.postData.avatar} alt=""/>
          <h1>{this.props.postData.name} barked: </h1>
        </div>
        <div className="post-body">
          {this.props.postData.post}
        </div>
        <div className="post-options">
          <button onClick={() => {
            this.props.viewHandler('editPost', this.props.postData)
          }}>Edit Entry</li>
          <button onClick={() => {
            this.props.deleteHandler(this.props.postData.id)
          }}>Delete Entry</li>
        </div>
      </article>
    )
  }
}

export default Post
