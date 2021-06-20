import {
  SET_USER_PROFILE
} from '../constanta'
import axios from 'axios'

export function setUserProfile(payload) {
  return { type: SET_USER_PROFILE, payload}
}

export function fetchUserProfile() {
  return function(dispatch) {
    axios.get('https://randomuser.me/api/')
      .then(({data}) => dispatch(setUserProfile(data.results[0])))
      .catch(err => console.log(err))
  }
}

