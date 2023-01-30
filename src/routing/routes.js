import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Exam from './Exam'
import Exercises from './Exercises'
import ErrorPage from './ErrorPage'

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
    ]
  }
]
const router = createBrowserRouter(routes)

export  {
  router
}
