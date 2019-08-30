import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions'

const initialState = []

const todos = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return ([...state, {id: action.id, todo: action.todo, completed: false}])

    case DELETE_TODO:
      return state.filter(item => item.id == action.id)

    case TOGGLE_COMPLETED:
      return state.find(item => action.id === item.id)

    default: return state
  }
}

export default todos