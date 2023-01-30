import { useState, useEffect } from "react"
import { getUserData } from "./user_data"

function useGetUser(user) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user) return

    console.log("Getting user data for " + user)

    const getData = async () => {
      try {
        setError(null)
        setLoading(true)
        const data = await getUserData(user)
        setLoading(false)
        setData(data)
      } catch(error) {
        setLoading(false)
        setError(error.message)
      }
    }
    getData()
  }, [user])

  return { data, loading, error }
}

export default useGetUser
