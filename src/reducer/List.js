import { useReducer } from "react"
import NewItem from "./NewItem"
import Items from "./Items"

import { initialState,reducer } from "./reducer"

function List() {

  const [state, dispatch] = useReducer(reducer, initialState)

  function addItem(item) {
    dispatch({type: 'ADD_ITEM', payload: item})
  }

  function deleteItem(item) {
    dispatch({type: 'REMOVE_ITEM', payload: item})
  }

  return(
    <>
      <h1>My list</h1>
      <NewItem onNewItem={addItem}/>
      <Items items={state.items} onDelete={deleteItem}/>
      {state.error && <p>{state.error}</p>}
    </>
  )

}

export default List
