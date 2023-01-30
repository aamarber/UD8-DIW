import { useParams } from "react-router-dom"

function Exercise() {

  let { id } = useParams();

  return (
    <div>
      <h1>Exercise {id}</h1>
      <p>Exercise description here</p>
    </div>
  )
}

export default Exercise
