import { useState } from "react"
import User from "./User"
import './users.css'

function Users(props) {

  const [user, setUser] = useState()
  const [count, setCount] = useState(0)

  return(
    <>
      <button onClick={() => setUser('user1')}>User 1</button>
      <button onClick={() => setUser('user2')}>User 2</button>
      <button onClick={() => setUser('user3')}>User 3</button>
      <br/>
      <button onClick={() => setCount(count+1)}>+</button>{count}
      <User user={user} />
    </>
  )
}

export default Users
