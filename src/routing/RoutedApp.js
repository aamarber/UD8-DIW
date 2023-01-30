import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function RoutedApp(){
  return (
    <RouterProvider router={router} />
  )
}

export default RoutedApp
