import React from 'react';
import './App.css';

//the components go here


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

  render(){
    return(
      <div>
        <h1>Welcome to the Secret Lives of Pets, a blog for pets by pets!</h1>
      </div>
    )
  }
}



export default App;
