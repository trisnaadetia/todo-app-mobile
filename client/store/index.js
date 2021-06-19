import { createStore , applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import category from './reducer/categoryReducer'
import todo from './reducer/todoReducer'

const reducer = combineReducers({
  category,
  todo
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