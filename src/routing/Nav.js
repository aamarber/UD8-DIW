import { Link } from "react-router-dom"

function Nav() {
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
            <ul>
              <li>
                <Link to="/exercises/1">Exercise1</Link>
              </li>
              <li>
                <Link to="/exercises/2">Exercise2</Link>
              </li>
              <li>
                <Link to="/exercises/3">Exercise3</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
