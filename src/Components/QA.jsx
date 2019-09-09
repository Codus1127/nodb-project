import React, { Component } from 'react'

class QA extends Component {

  state = {
    edit: false,
    input: this.props.question
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleEdit = () => {
    this.setState({
      edit: false
    })
    this.props.handleEdit(this.props.id, this.state.input)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div className="qa">
        {!this.state.edit ? <><span className='question'>Q.  {this.props.question}</span> <br/><span className="answer">A.  {this.props.answer}</span> </> :
          <div className="historyBox">
            <input className="editInput" onChange={(e) => this.handleChange(e)} value={this.state.input} type="text" />
            <button className="button" onClick={this.handleEdit}>Submit</button>
            <br/><span className="answer">     A.  {this.props.answer}</span>
          </div>}
        <button className="button" onClick={this.toggleEdit}>  Edit</button>
        <button className="button" onClick={() => this.props.handleDelete(this.props.id)}>  Delete</button>
      </div>
    )
  }
}

export default QA