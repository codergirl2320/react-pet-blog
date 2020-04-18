
//all of the imports we need
import React from 'react'

import Post from './Post.js'
import Form from './Form.js'

//I think this is for the heroku stuff if we do it from here
let defaultUrl = '';

if(process.env.NODE_ENV === 'development') {
  defaultUrl = 'http://localhost:8888'
} else {
  defaultUrl = 'http://gentle-river-70476.herokuapp.com/api/posts'
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //to grab the blog posts made
  fetchPosts = () => {
    fetch(`${defaultUrl}/posts`)
      .then(data => data.json())
      .then(jData => {
        this.setState({posts:jData})
      }).catch(err=>console.log(err))
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
        prevState.posts = jsonedPost
        return {posts: prevState.posts
        }
      })
    }).catch(err=>console.log(err))
  }
  componentDidMount() {
    this.fetchPosts()
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
      this.fetchPosts()
    }).catch(err => console.log(err))
  }

  deleteHandler = (id) => {
    fetch(`${defaultUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
      this.setState(prevState => {
        const posts = prevState.posts.filter(post => post.id !== id)
        return { posts }
      })
    }).catch(err => console.log(err))
  }



  render() {
    return (
      <div>
      <h1 className="main-title">{this.props.view.pageTitle}</h1>
      { this.props.view.pageName === 'home' ?
        this.state.posts.map((postData) => (
          <Post
            key={postData.id}
            postData={postData}
            viewHandler={this.props.viewHandler}
            deleteHandler={this.deleteHandler}
          />
        ))
        : <Form
            createHandler={this.createHandler}
            formInputs={this.props.formInputs}
            updateHandler={this.updateHandler}
            view={this.props.view}
          />
    }
<<<<<<< HEAD
    <img className="Tattoo" src="./images/Tattoo.png"/>
    <img className="Mel" src="./images/Mel.png"/>
=======

    <About
    view={this.state.view}
    />


    <div className="base-images">
      <img className="Tattoo" src="./images/Tattoo.png" alt=""/>
      <img className="Duke_two" src="./images/Duke.png" alt=""/>
      <img className="Snowball" src="./images/Snowball.png" alt=""/>
      <img className="Norman" src="./images/Norman.png" alt=""/>
      <img className="Max_Gidget" src="./images/Max_Gidget.png" alt=""/>
      <img className="Chloe" src="./images/Chloe.png" alt=""/>
      <img className="poodle" src="./images/poodle.png" alt=""/>
    </div>

>>>>>>> 1da4af8cc36b70345ae4715e729646f8ddc9ba33
    </div>
    )
  }
}

export default Main;
