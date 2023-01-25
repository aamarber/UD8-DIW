import useGetUser from "./use_getUser"
import WrapLoading from "./WrapLoading";

function UserHoC(props){
  const { user, color } = props
  const { data, loading } = useGetUser(user)

  console.log('Rendering user '+user)

  return(
    <WrapLoading loading={loading}>
      <div style={{backgroundColor: color}}>
        { !user && <h1>No user selected</h1> }
        { data &&
            <div>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
              <p>Email: {data.email}</p>
            </div>
        }
      </div>
    </WrapLoading>
  )
}

export default UserHoC
