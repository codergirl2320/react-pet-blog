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
          pageTitle: ''
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
  viewHandler = (view, blogData) => {
    let pageTitle = '';
    let formInputs = {
      name: '',
      title: '',
      post: '',
      avatar: '',
      id: null
    }
  }
  //the render!
  render() {
    return (
      <div>
        <h1>Welcome to the Secret Lives of Pets, a blog for pets by pets!</h1>
      </div>
    )
  }
}

//exporting
export default App;
