import { Link } from "react-router-dom"

function Exercises() {

  const exercises = [1,2,3]

  return (
    <div>
      <h1>Exercises</h1>
      General information about exercises here
      <ul>
        {
          exercises.map((id) =>
            <li key={id}>
              <Link to={`/exercise/${id}`}>Exercise {id}</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Exercises
