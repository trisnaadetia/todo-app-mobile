import { createStore , applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import category from './reducer/categoryReducer'
import todo from './reducer/todoReducer'
import user from './reducer/userProfileReducer'

const reducer = combineReducers({
  category,
  todo,
  user
})

function logger(store) {
  return function(next) {
    return function(action) {
      next(action)
    }
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store