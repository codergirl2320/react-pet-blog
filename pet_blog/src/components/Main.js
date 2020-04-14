//the dependencies will be here
import React from 'react'

//heroku stuff goes here I think?

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
  }

  postHandler = (createdData) => {
    //hander for creating posts will go here
  }

  updateHandler = (updatedData) => {
    //this will handle the updates
  }

  deleteHandler = (id) => {
    //stuff will be deleted here
  }

  componentDidMount() {
    this.fetchPosts();
  }

  //the render will be here
  render() {
    return (
      //this doesn't render anything yet
    )
  }
}
