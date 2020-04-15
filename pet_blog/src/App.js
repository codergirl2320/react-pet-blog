import React from 'react';
import './App.css';

//the components will go here
import Main from './components/Main.js'


//the app class
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        view: {
          pageName: 'home',
          pageTitle: "What we're howling, meowing and chirping about..."
        },
        formInputs: {
          name: null,
          title: null,
          post: null,
          avatar: null, //the little pictures one sees on blog or forum posts for a user's picture
          id: null
        }
     }
  }
  //for managing the blog view data
  viewHandler = (view, postData) => {
    let pageTitle = '';
    let formInputs = {
      name: '',
      title: '',
      post: '',
      avatar: '',
      id: null
    }
    switch(view) {
      case 'home':
        pageTitle = "What we're howling about!"
        break
      case 'addPost':
        pageTitle = "Making a post!"
        break
      case 'editPost':
        pageTitle = 'Editing your post!'
        formInputs = {
          name: postData.name,
          title: postData.title,
          post: postData.post,
          avatar: postData.avatar,
          id: postData.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        pageName: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
  //the render!
  render() {
    return (
      <div>
        <header className="header">
          <img src="./images/city_header.jpg"/>
          <img className="logo" src="./images/logo.png"/>
        </header>
        <Main view={this.state.view} viewHandler={this.viewHandler} formInputs={this.state.formInputs} />
      </div>
    )
  }
}

//exporting
export default App;
