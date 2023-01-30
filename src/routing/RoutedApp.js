import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Layout'

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/exam",
        element: <div>Exam</div>,
      },
      {
        path: "/exercises",
        element: <div>Exercises</div>,
        children: [
          {
            path: "info",
            element: <div>Exercise</div>,
          },
          {
            path: ":id",
            element: <div>Exercise</div>,
          },
        ]
      },

    ],
  }
]

const router = createBrowserRouter(routes)

function RoutedApp(){
  return (
    <RouterProvider router={router} />
  )
}

export default RoutedApp
