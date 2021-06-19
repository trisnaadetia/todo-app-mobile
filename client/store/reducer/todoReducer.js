import { 
  SET_LIST_TODO
} from '../constanta'
import {listTodo} from '../initialStateTodo'

const initialState = {
  allTodo: listTodo,
}

function todoReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_TODO:
      return {...state, allTodo: payload }
    default:
      return state
  }
}

export default todoReducer