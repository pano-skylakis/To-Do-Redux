export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const EDIT_TODO = 'EDIT_TODO'

export const addTodo = ({todo, id}) => {
  return {
    type: ADD_TODO,
    todo,
    id
  }
}

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const toggleCompleted = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    id
  }
}

