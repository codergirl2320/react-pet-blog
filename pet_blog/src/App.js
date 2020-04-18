import React from 'react';

//the components will go here
import Main from './components/Main.js'
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import About from './components/About.js'

//the app class
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        view: {
          pageName: 'home',
          pageTitle: "What we're really thinking..."
        },
        formInputs: {
          id: null,
          name: null,
          avatar: null, //the little pictures one sees on blog or forum posts for a user's picture
          body: null,
          title: null
        },
        about: {
          id: null,
          name: 'human',
          avatar:'picture',
          about: 'about human'
        }
     };

  }


  //for managing the blog view data
  viewHandler = (view, postData, humanStuff) => {
    let pageTitle = '';
    let formInputs = {
      id: null,
      name: '',
      avatar: '',
      body: '',
      title: '',
    };
    let aboutHumans = {
      id: null,
      name: '',
      avatar: '',
      about: ''
    }
    switch(view) {
      case 'home':
        pageTitle = "What we're really thinking..."
        break
      case 'addPost':
        pageTitle = "What's on your mind?"
        break
      case 'editPost':
        pageTitle = 'Editing your post!'
        formInputs = {
          id: postData.id,
          name: postData.name,
          avatar: postData.avatar,
          body: postData.body,
          title: postData.title
        }
        break
      case 'about':
        pageTitle = 'About the Team!'
  
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
    },
  )
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
