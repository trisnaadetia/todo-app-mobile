import {
  SET_LIST_TODO,
  SET_TODO_WORK,
  SET_TODO_HOME,
  SET_TODO_MUSIC,
  SET_TODO_SHOPPING,
  SET_TODO_SPORT,
  SET_TODO_STUDY,
  SET_TODO_TRAVEL,
  SET_POST_TODO,SET_UPDATE_TODO
} from '../constanta'

export function setListTodo(payload) {
  return { type: SET_LIST_TODO, payload}
}

export function setFilterTodoWork(payload) {
  return { type: SET_TODO_WORK, payload}
}

export function setFilterTodoTravel(payload) {
  return { type: SET_TODO_TRAVEL, payload}
}

export function setFilterTodoMusic(payload) {
  return { type: SET_TODO_MUSIC, payload}
}

export function setFilterTodoStudy(payload) {
  return { type: SET_TODO_STUDY, payload}
}

export function setFilterTodoHome(payload) {
  return { type: SET_TODO_HOME, payload}
}

export function setFilterTodoSport(payload) {
  return { type: SET_TODO_SPORT, payload}
}

export function setFilterTodoShopping(payload) {
  return { type: SET_TODO_SHOPPING, payload}
}

export function setPostTodo(payload) {
  return { type: SET_POST_TODO, payload }
}

export function setUpdateTodo(payload) {
  return { type: SET_UPDATE_TODO, payload }
}





