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
          <h4 className="input-names">name</h4>
          <input className="form-input" type="text" placeholder="nickname" value={this.state.name} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <h4 className="input-names">title</h4>
          <input className="form-input" type="text" placeholder="post title" value={this.state.title} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <h4 className="input-names">entry</h4>
          <textarea className="form-input" placeholder="write your blog post" id="body" value={this.state.post} onChange={this.changeHandler}/><br/>
        </label>
        <label>
          <h4 className="input-names">avatar (url)</h4>
          <input className="form-input" type="text" placeholder="your avatar image URL" id="image" value={this.state.avatar} onChange={this.changeHandler}/>
        </label>
      </form>
    )
  }
}

//exporting

export default Form
