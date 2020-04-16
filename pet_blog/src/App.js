import React from 'react';

//the components will go here
import Main from './components/Main.js'
import Header from './components/Header.js'
import Aside from './components/Aside.js'


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
          body: null,
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
      body: '',
      avatar: '',
      id: null
    }
    switch(view) {
      case 'home':
        pageTitle = "What we're howling about!"
        break
      case 'addPost':
        pageTitle = "What's on your mind?"
        break
      case 'editPost':
        pageTitle = 'Editing your post!'
        formInputs = {
          name: postData.name,
          title: postData.title,
          body: postData.body,
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
      <div className="large-container">
        <Header/>
        <div className="main-container">
          <Main
            view={this.state.view}
            viewHandler={this.viewHandler}
            formInputs={this.state.formInputs}
          />
          <div className="aside-container">
            <Aside viewHandler={this.viewHandler}/>
          </div>
        </div>
      </div>
    )
  }
}

//exporting
export default App;
