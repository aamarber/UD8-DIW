import { useState, useEffect } from "react"
import { getUserData } from "./user_data"

import Loading from "./Loading"

function User(props){
  const { user, color } = props
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!user) return

    console.log('Getting user data for '+user)

    setLoading(true)
    const getData = async () => {
      const data = await getUserData(user)
      setUserData(data)
      setLoading(false)
      console.log('Data loaded')
    }
    getData()

    return () => {
      console.log('Unmounting user '+user)
    }

  }, [user])

  console.log('Rendering user '+user)

  return(
    <div style={{backgroundColor: color}}>
      { !user && <h1>No user selected</h1> }
      { loading && <Loading/>}
      { !loading && userData &&
          <div>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email}</p>
          </div>
      }
    </div>
  )
}

export default User
