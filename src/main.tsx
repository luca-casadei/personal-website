import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import GenericErrorPage from './errors/GenericErrorPage'

const router = createBrowserRouter([{
  path:"/",
  element: <Root/>,
  errorElement: <GenericErrorPage/>,
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
