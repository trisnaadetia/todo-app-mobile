import { 
  SET_CATEGORY
} from '../constanta'

const initialState = {
  category: [{
    id: 1,
    code: 'briefcase-outline',
    fill: '#cccc00',
    name: 'Work'
  },{
    id: 2,
    code: 'headphones-outline',
    fill: 'orange',
    name: 'Music'
  },{
    id: 3,
    code: 'navigation-2-outline',
    fill: 'green',
    name: 'Travel'
  },{
    id: 4,
    code: 'book-open-outline',
    fill: 'purple',
    name: 'Study'
  },{
    id: 5,
    code: 'home-outline',
    fill: 'navy',
    name: 'Home'
  },{
    id: 6,
    code: 'shopping-cart-outline',
    fill: 'black',
    name: 'Shopping'
  },{
    id: 7,
    code: 'activity-outline',
    fill: 'red',
    name: 'Sport'
  }],
}

function categoryReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_CATEGORY:
      return {...state, category: payload }
    default:
      return state
  }
}

export default categoryReducer