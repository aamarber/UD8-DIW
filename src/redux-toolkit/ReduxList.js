import { useReducer } from "react"
import NewItem from "./NewItem"
import Items from "./Items"

import store from "./store"
import { Provider } from "react-redux"

import { initialState,reducer } from "./reducer"

function ReduxList() {

  const [state, dispatch] = useReducer(reducer, initialState)

  function addItem(item) {
    dispatch({type: 'ADD_ITEM', payload: item})
  }

  function deleteItem(item) {
    dispatch({type: 'REMOVE_ITEM', payload: item})
  }

  return(
    <Provider store={store}>
      <h1>My list</h1>
      <NewItem onNewItem={addItem}/>
      <Items items={state.items} onDelete={deleteItem}/>
      {state.error && <p>{state.error}</p>}
    </Provider>
  )

}

export default ReduxList
