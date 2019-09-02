import React from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, toggleCompleted, editTodo } from '../actions' 

let count = 0

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todoInput: '',
      toggle: true,
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

  handleMarkCompleted = e => {
    this.props.toggleCompleted(e.target.dataset.id)

    this.setState({toggle: true ? false : true})
  }

  handleEditTodo = e => {
    this.props.editTodo(e.target.dataset.id)

    this.setState({toggle: true ? false : true})
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
              <li key={id}>
                {!item.edit && <p id={item.id}>{item.todo}</p>}
                <div>
                  <i className="far fa-edit" onClick={this.handleEditTodo} data-id={item.id}></i>
                </div>
                <button onClick={this.handleDeleteTodo} data-id={item.id}>delete</button>
                <div className="check-mark-container" onClick={this.handleMarkCompleted} data-id={item.id}>
                  {item.completed && <i className="fas fa-check" onClick={this.handleMarkerCompleted} data-id={item.id}></i>}
                </div>
              </li>
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
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
    editTodo: (id) => dispatch(editTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)