import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Nav from './Nav'

function RoutedApp(){
  return (
    <div className='layout'>
      <Nav />
      <RouterProvider router={router} />
    </div>
  )
}

export default RoutedApp
