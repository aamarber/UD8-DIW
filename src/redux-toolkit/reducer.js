/*

THIS FILE IS NOT USED IN THIS EXAMPLE.
IT'S HERE IN CASE YOU WANT TO COMPARE THE REDUX TOOLKIT VERSION
WITH THE USEREDUCER VERSION.

*/


const initialState = {
  items: ['banana', 'apple', 'orange'],
  error: null
}

function error(state, error) {
  return {
    ...state,
    error
  }
}

function addItem(state, payload) {
  if(!payload) return error(state, 'Item cannot be empty')
  if(state.items.includes(payload)) return error(state, 'Item already exists')

  return {
    ...state,
    items: [...state.items, payload],
    error: null
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.payload)
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      }
    default:
      throw "Invalid action"
  }
}

export {
  initialState,
  reducer
}
export default reducer
