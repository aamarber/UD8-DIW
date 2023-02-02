import { useReducer } from "react"
import NewItem from "./NewItem"
import Items from "./Items"

import { addItem, removeItem } from "./listSlice"
import { useDispatch, useSelector } from "react-redux"

function ReduxList() {

  const items = useSelector(state => state.list.items)
  const error = useSelector(state => state.list.error)

  const dispatch = useDispatch()

  function add(item) {
    dispatch(addItem(item))
  }

  function remove(item) {
    dispatch(removeItem(item))
  }

  return(
    <>
      <h1>My list</h1>
      <NewItem onNewItem={add}/>
      <Items items={items} onDelete={remove}/>
      {error && <p>{error}</p>}
    </>
  )

}

export default ReduxList
