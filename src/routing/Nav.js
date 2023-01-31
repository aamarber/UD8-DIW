import { Link, useNavigate } from "react-router-dom"

function Nav() {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div className="menu">
      <h3>Menu</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exam">Exam</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
          <li>
            <button onClick={handleClick}>Home</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
