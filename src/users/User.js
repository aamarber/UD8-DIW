
function User(props){
  const { user } = props

  return(
    <div>
      { user ? <h1>{user}</h1> : <h1>No user selected</h1> }
    </div>
  )
}

export default User
