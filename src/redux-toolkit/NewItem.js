import { useState } from "react"

function NewItem(props) {

  const [item, setItem] = useState('')
  const { onNewItem } = props

  function handleSubmit(event) {
    event.preventDefault()
    onNewItem(item)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={item}
             onChange={e => setItem(e.target.value)}
             placeholder="New item" />
      <input type="submit" value="Add" />
    </form>
  )

}

export default NewItem
