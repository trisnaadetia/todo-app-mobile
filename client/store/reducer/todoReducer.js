import { 
  SET_LIST_TODO,
  SET_TODO_WORK,
  SET_TODO_SHOPPING,
  SET_TODO_SPORT,
  SET_TODO_HOME,
  SET_TODO_STUDY,
  SET_TODO_MUSIC,
  SET_TODO_TRAVEL
} from '../constanta'
import {listTodo} from '../initialStateTodo'

const initialState = {
  allTodo: listTodo,
  todoWork: [],
  todoMusic: [],
  todoTravel: [],
  todoStudy: [],
  todoHome: [],
  todoShopping: [],
  todoSport: []
}

function todoReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_TODO:
      return {...state, allTodo: payload }
    case SET_TODO_WORK:
      return {...state, todoWork: payload }
    case SET_TODO_TRAVEL:
      return {...state, todoTravel: payload }
    case SET_TODO_MUSIC:
      return {...state, todoMusic: payload }
    case SET_TODO_HOME:
      return {...state, todoHome: payload }
    case SET_TODO_STUDY:
      return {...state, todoStudy: payload }
    case SET_TODO_SHOPPING:
      return {...state, todoShopping: payload }
    case SET_TODO_SPORT:
      return {...state, todoSport: payload }
    default:
      return state
  }
}

export default todoReducer