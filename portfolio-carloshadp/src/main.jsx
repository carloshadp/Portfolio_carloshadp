import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/Projects",
        element: <Projects/>,
      },

      
    ]
  }
])







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>,
)
