export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTodo = ({todo, id}) => {
  return {
    type: ADD_TODO,
    todo,
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