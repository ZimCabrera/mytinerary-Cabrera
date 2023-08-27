import Layout from './layouts/Layout'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/',element: <Layout />,

  },
]);

function App() {

  return (
    
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
