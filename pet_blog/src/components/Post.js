import React from 'react'

class Post extends React.Component {
  constructor(){
    super()
    this.state = {
      likes: 0
    }
     this.likedPost = this.likedPost.bind(this);
  }

  likedPost = (event) => {
    this.setState({likes: this.state.likes + 1})

  }

  render() {
    return (
      <article>
        <div className="post-title">
          {this.props.postData.title}
        </div>
        <div className="post-box">
          <div className="post-header">
            <img className="avatar" src={this.props.postData.avatar} alt=""/><br/>
            <h1>{this.props.postData.name}</h1>
          </div><br/>
          <div className="post-body">
            {this.props.postData.body}
          </div>
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {
              this.props.viewHandler('editPost', this.props.postData)
            }}>Edit Entry</li>
            <li onClick={() => {
              this.props.deleteHandler(this.props.postData.id)
            }}>Delete Entry</li>
            </ul>
            <p>Love for this post: {this.state.likes}</p>
            <button onClick={this.likedPost}>Loves</button>

        </div>
      </article>
    )
  }
}

export default Post
