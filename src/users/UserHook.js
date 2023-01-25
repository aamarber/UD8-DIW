import useGetUser from "./use_getUser"

import Loading from "./Loading"

function User(props){
  const { user, color } = props
  const { data, loading } = useGetUser(user);

  console.log('Rendering user '+user)

  return(
    <div style={{backgroundColor: color}}>
      { !user && <h1>No user selected</h1> }
      { loading && <Loading/>}
      { !loading && data &&
          <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
          </div>
      }
    </div>
  )
}

export default User
