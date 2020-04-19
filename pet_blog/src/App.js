import React from 'react';

//the components will go here
import Main from './components/Main.js'
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'

//the app class
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        view: {
          pageName: 'home',
          pageTitle: "Here's my current sitch..."
        },
        formInputs: {
          id: null,
          name: null,
          avatar: null, //the little pictures one sees on blog or forum posts for a user's picture
          body: null,
          title: null
        }
     }
  }
  //for managing the blog view data
  viewHandler = (view, postData) => {
    let pageTitle = '';
    let formInputs = {
      id: null,
      name: '',
      avatar: '',
      body: '',
      title: '',
    }
    switch(view) {
      case 'home':
        pageTitle = "Here's my current sitch..."
        break
      case 'addPost':
        pageTitle = "Share your wins and struggles..."
        break
      case 'editPost':
        pageTitle = "Oops...what did you really mean to say?"
        formInputs = {
          id: postData.id,
          name: postData.name,
          avatar: postData.avatar,
          body: postData.body,
          title: postData.title
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
        <div className="lower-container">
          <div className="main-container">
            <Main
              view={this.state.view}
              viewHandler={this.viewHandler}
              formInputs={this.state.formInputs}
            />
          </div>
          <div className="aside-container">
            <Aside viewHandler={this.viewHandler}/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

//exporting
export default App;
