import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Exam from './Exam'
import Exercises from './Exercises'
import ErrorPage from './ErrorPage'
import Exercise from './Exercise'

const routes = [
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "exam",
        element: <Exam />,
      },
      {
        path: "exercises",
        element: <Exercises />,
      },
      {
        path: "exercise/:id",
        element: <Exercise />,
      }
    ]
  }
]
const router = createBrowserRouter(routes)

export  {
  router
}
