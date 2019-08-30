import React from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, toggleCompleted } from '../actions' 

let count = 0

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todoInput: '',
    }
  }

  handleChange = e => {
    e.preventDefault()

    this.setState({todoInput: e.target.value})
  }

  handleAddTodo = e => {
    count++
    this.props.addTodo({todo: e.target.dataset.todo, id: count})
    this.setState({todoInput: ''})
  }

  handleDeleteTodo = e => {
    this.props.deleteTodo(e.target.dataset.id)
  }

  render() {
    return (
      <div>
        <h1>To-do</h1>

          <input type="text" placeholder="Add your to-do!" onChange={this.handleChange} value={this.state.todoInput}/>
          <button onClick={this.handleAddTodo} data-todo={this.state.todoInput}>Add</button>

        <ul>
          {this.props.todos.map((item, id) => {
            return (
              <div key={id}>
                <li id={item.id}>{item.todo}</li><button onClick={this.handleDeleteTodo} data-id={item.id}>delete</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}
 
function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleCompleted: (id) => dispatch(toggleCompleted(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)