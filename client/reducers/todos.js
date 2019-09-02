import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, EDIT_TODO } from '../actions'

const initialState = []

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

    case EDIT_TODO:
      state.map(todo => {
        if(todo.id == action.id) {
          todo.edit ? todo.edit = false : todo.edit = true
        }
        return todo
      })

    default: return state
  }
}

export default todos 