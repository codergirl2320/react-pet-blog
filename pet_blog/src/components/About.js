import React, { Component } from "react";
let defaultUrl = '';

if(process.env.NODE_ENV === 'development') {
  defaultUrl = 'http://localhost:8888'
} else {
  defaultUrl = 'https://cors-anywhere.herokuapp.com/http://gentle-river-70476.herokuapp.com/api'
}

class About extends Component {
  constructor(){
    super()
    this.state = {
      about: {
        id: null,
        name: null,
        avatar:null,
        about: null
      }

    }
  }
  fetchPosts = () => {
    fetch(`${defaultUrl}/posts`)
      .then(data => data.json())
      .then(jData => {
        this.setState({posts:jData})
      }).catch(err=>console.log(err))
  }


  render() {
    return (
      <div>
      <h1>START OF ABOUT</h1>
      {this.about}
      </div>
    )

  }
}
export default About
