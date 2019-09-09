import React, { Component } from 'react'
import axios from 'axios'
import QA from './QA'

class History extends Component {
  state = {
    todos: [ ],
    currentQA: { },
  }

  
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = () => {
    axios.post('/api/todo', { text: this.state.input }).then(res => {
      console.log(res);
      this.setState({
        todos: res.data.history,
        currentQA: res.data.currentQA
      })
    })
  }

  handleEdit = (id, text) => {
    axios.put(`/api/todo/${id}`, { text }).then(res => {
      console.log(text)
      this.setState({
        todos: res.data
      })
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/todo/${id}`).then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  render() {

    let list = this.state.todos.map(element => {
      return <QA
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        key={element.id}
        id={element.id}
        question={ element.question }
        answer={element.answer } />
    })

    return (
      <div className="historyBox">
        <input className= "qInput" placeholder="Type question here..." value={this.state.text} onChange={(e) => this.handleChange(e)} type="text" />
        <button className= "myButton1" onClick={this.handleSubmit}>  Ask</button>
       <div className= "list" > {list} </div>
      </div>
    )
  }
}

export default History