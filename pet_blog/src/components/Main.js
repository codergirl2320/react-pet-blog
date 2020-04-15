//all of the imports we need
import React from 'react'

import Post from './Post.js'
import Form from './Form.js'

//I think this is for the heroku stuff if we do it from here
let defaultUrl = '';
if(process.env.NODE_ENV === 'development') {
  defaultUrl = 'http://localhost:8888'
} else {
  console.log('heroku!');
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPosts: []
    }
  }
  //to grab the blog posts made
  fetchPosts = () => {
    fetch(`${defaultUrl}/posts`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          blogPosts: jData
        })
      }).catch(err => console.log(err))
  }

  createHandler = (createdData) => {
    fetch(`${defaultUrl}/posts`, {
      body: JSON.stringify(createdData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.props.viewHandler('home')
      this.setState(prevState => {
        prevState.blogPosts = jsonedPost
        return {
          blogPosts: prevState.blogPosts
        }
      })
    }).catch(err => console.log(err))
  }

  updateHandler = (updatedData) => {
    fetch(`${defaultUrl}/posts/${updatedData.id}`, {
      body: JSON.stringify(updatedData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedPost => {
      this.props.viewHandler('home')
      this.fetchPost()
    }).catch(err => console.log(err))
  }

  deleteHandler = (id) => {
    fetch(`${defaultUrl}/posts/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type:' 'application/json'
      }
    }).then(json => {
      this.setState(prevState => {
        const posts = prevState.blogPosts.filter(post => post.id !== id)
        return { posts }
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchPost()
  }

  render() {
    return (
      <div>
        <h1>this is the main.js file!</h1>
      </div>
    )
  }
}

export default Post
