import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, EDIT_TODO_TOGGLE, EDIT_TODO_SUBMIT } from '../actions'

const initialState = [{id: 0, todo: 'finish this fkn app', completed: false, edit: false}]

const todos = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return ([...state, {id: action.id, todo: action.todo, completed: false, edit: false}])

    case DELETE_TODO:
      return state.filter(item => item.id != action.id)

    case TOGGLE_COMPLETED:
      return state.map(todo => {
        if(todo.id == action.id) {
          todo.completed ? todo.completed = false : todo.completed = true
        }
        return todo
      })

    case EDIT_TODO_TOGGLE:
      return state.map(todo => {
        if(todo.id == action.id) {
          todo.edit ? todo.edit = false : todo.edit = true
        }
        return todo
      })

    case EDIT_TODO_SUBMIT:
      return state.map(todo => {
        if(todo.id == action.id) {
          todo.todo = action.newTodo
        }
        return todo
      })

    default: return state
  }
}

export default todos 