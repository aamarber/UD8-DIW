const initialState = {
  items: ['banana', 'apple', 'orange']
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
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
