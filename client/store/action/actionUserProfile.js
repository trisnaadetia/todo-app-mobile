import {
  SET_USER_PROFILE,
  SET_LOADING_USER,
  SET_ERROR_USER
} from '../constanta'
import axios from 'axios'

export function setUserProfile(payload) {
  return { type: SET_USER_PROFILE, payload}
}

export function setLoadingUser(payload) {
  return { type: SET_LOADING_USER, payload}
}

export function setErrorUser(payload) {
  return { type: SET_ERROR_USER, payload}
}

export function fetchUserProfile() {
  return function(dispatch) {
    axios.get('https://randomuser.me/api/')
      .then(({data}) => dispatch(setUserProfile(data.results[0])))
      .catch(err => dispatch(setErrorUser(err)))
      .finally(() => dispatch(setLoadingUser(false)))
  }
}

