//the dependencies will be here
import React from 'react'

import Post from './Post.js'
import Form from './Form.js'

//heroku stuff goes here I think?
let defaultUrl = '';
if (process.env.NODE_ENV === 'development') {
  defaultUrl = 'http://localhost:8888'
} else {
  console.log('heroku stuff?');
}

//component class starts here
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPosts: []
    }
  }

  fetchPosts = () => {
    //the blog posts will be retrieved here at a later date
    fetch(`${defaultUrl}/posts`)
      .then(data => data.json())
      .then(jData => {
        this.state({
          blogPosts: jData
        })
      }).catch(err => console.log(err))
  }

  createHandler = (createdData) => {
    //hander for creating posts will go here
    fetch(`${defaultUrl}/posts`, {
      body: JSON.stringify(createdData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonPost => {
      this.props.viewHandler('home')
      this.setState(prevState => {
        prevState.blogPosts = jsonPost
        return {
          blogPosts: prevState.blogPosts
        }
      })
    }).catch(err => console.log(err))
  }

  updateHandler = (updatedData) => {
    //this will handle the updates
  }

  deleteHandler = (id) => {
    //stuff will be deleted here
  }

  componentDidMount() {
    this.fetchPosts()
  }

  //the render will be here
  render () {
    return (
      <div>
        <h1>potato</h1>
      </div>
    )
  }
}
