//dependencies
import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      title: '',
      post: '',
      avatar: '',
      id: null
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
      name: this.props.formInputs.name,
      title: this.props.formInputs.title,
      post: this.props.formInputs.post,
      avatar: this.props.formInputs.avatar,
      id: this.props.formInputs.id
    })
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label>
          <input className="form-input" type="text" placeholder="nickname" id="name" value={this.state.name} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <input className="form-input" type="text" placeholder="post title" id="title" value={this.state.title} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <textarea className="story-form-input" placeholder="write your blog post" id="post" value={this.state.post} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <input className="form-input" type="text" placeholder="your avatar image URL" id="avatar" value={this.state.avatar} onChange={this.changeHandler}/><br/>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }
}

//exporting

export default Form
