import {
  SET_USER_PROFILE,
  SET_LOADING_USER,
  SET_ERROR_USER
} from '../constanta'

const initialState = {
  userProfile: [],
  loadingUser: true,
  errorUser: ''
}


function userProfileReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_USER_PROFILE:
      return {...state, userProfile: payload }
    case SET_LOADING_USER:
      return {...state, loadingUser: payload }
    case SET_ERROR_USER:
        return {...state, errorUser: payload }
    default:
      return state
  }
}

export default userProfileReducer
