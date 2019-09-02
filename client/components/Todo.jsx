import React from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, toggleCompleted, editTodoToggle, editTodoSubmit } from '../actions' 

let count = 0

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todoInput: '',
      todoEdit: '',
      toggle: true,
    }
  }


  //Add Todos
  handleChange = e => {
    e.preventDefault()

    this.setState({todoInput: e.target.value})
  }
  handleAddTodo = e => {
    if(e.key === 'Enter') {
      count++
      this.props.addTodo({todo: e.target.value, id: count})
      this.setState({todoInput: ''})
    } else {
      return
    }
  }


  //Delete Todos
  handleDeleteTodo = e => {
    this.props.deleteTodo(e.target.dataset.id)
  }


  //Toggle Completed Todos
  handleMarkCompleted = e => {
    this.props.toggleCompleted(e.target.dataset.id)

    this.setState({toggle: true ? false : true})
  }


  //Edit Todos
  handleEditButton = e => {
     console.log(e.target.dataset.todo)
    this.setState({toggle: true ? false : true, todoEdit: e.target.dataset.todo})
    this.props.editTodoToggle(e.target.dataset.id)
  }

  handleEditTodo = e => {
    this.setState({todoEdit: e.target.value})
  }

  handleEditSubmit = e => {
    if (e.key === 'Enter') {
      this.props.editTodoSubmit(e.target.dataset.id, this.state.todoEdit)
      this.props.editTodoToggle(e.target.dataset.id)
      this.setState({todoEdit: ''})
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <h1>To-do</h1>

          <input type="text" placeholder="Add your to-do!" onKeyPress={this.handleAddTodo} onChange={this.handleChange} value={this.state.todoInput}/>

        <ul>
          {this.props.todos.map((item, id) => {
            return (
              <li key={id}>
                {
                  !item.edit ? 
                  <p id={item.id}>{item.todo}</p> : 
                  <input autoFocus={true} data-id={item.id} value={this.state.todoEdit} onChange={this.handleEditTodo} onKeyPress={this.handleEditSubmit} type="text" />
                }
                <div>
                  <i className="far fa-edit" onClick={this.handleEditButton} data-todo={item.todo} data-id={item.id}></i>
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
    editTodoToggle: (id) => dispatch(editTodoToggle(id)),
    editTodoSubmit: (id, todo) => dispatch(editTodoSubmit(id, todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)