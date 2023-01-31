import { useState } from "react"
import NewItem from "./NewItem"
import Items from "./Items"

const initialItems = ['banana', 'apple', 'orange']

function List() {

  const [items, setItems] = useState(initialItems)

  return(
    <>
      <h1>My list</h1>
      <NewItem />
      <Items items={items}/>
    </>
  )

}

export default List
