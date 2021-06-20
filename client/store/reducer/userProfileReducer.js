import {
  SET_USER_PROFILE
} from '../constanta'

const initialState = {
  userProfile: []
}


function userProfileReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_USER_PROFILE:
      return {...state, userProfile: payload }
    default:
      return state
  }
}

export default userProfileReducer
