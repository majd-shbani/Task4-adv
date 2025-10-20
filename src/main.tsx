import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MenuMain from './pages/MenuMain'


const routes = createBrowserRouter([
  {
    path :"/",
    element : <Home /> , 
  },
  {
    path:'/MenuMain' ,
    element : <MenuMain/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
