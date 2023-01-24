import { getUserData } from "./user_data"

function User(props){
  const { user } = props

  console.log('Rendering user '+user)
  
  return(
    <div>
      { user ? <h1>{user}</h1> : <h1>No user selected</h1> }
    </div>
  )
}

export default User
