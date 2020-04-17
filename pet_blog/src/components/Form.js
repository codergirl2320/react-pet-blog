//dependencies
import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id: null,
      name: '',
      avatar: '',
      body: '',
      title: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.props.view.pageName === 'addPost') {
      this.props.createHandler(this.state);
    } else if (this.props.view.pageName === 'editPost') {
      this.props.updateHandler(this.state);
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.formInputs.id,
      name: this.props.formInputs.name,
      title: this.props.formInputs.title,
      avatar: this.props.formInputs.avatar,
      body: this.props.formInputs.body
    })
  }

  render() {
    return(
      <form className="create-form" onSubmit={this.submitHandler}>
        <label>
          <input className="form-input" type="text" placeholder="nickname" id="name" value={this.state.name} onChange={this.changeHandler}/><br/>
        </label>

        <label>
          <input className="form-input" type="text" placeholder="body title" id="title" value={this.state.title} onChange={this.changeHandler}/><br/>
        </label>

        <label>
          <textarea className="story-form-input" placeholder="write your blog post" id="body" value={this.state.body} onChange={this.changeHandler}/><br/>
        </label>

        <label>
          <input className="form-input" type="text" placeholder="your avatar image URL" id="avatar" value={this.state.avatar} onChange={this.changeHandler}/><br/>
        </label>

        <input type="submit" value="share"/><br/>
        <img className="Ozone" src="./images/Ozone.png" alt=""/>
        <img className="Sweetpea" src="./images/Sweetpea.png" alt=""/>
      </form>
    )
  }
}

//exporting

export default Form
