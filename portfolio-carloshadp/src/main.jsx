import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./StyleSheets/font.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import About from './pages/About.jsx'
import ProjectsDetailPage from './pages/ProjectsDetailPage.jsx'
import data from "/src/data/datas.json"

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
      {
        path: "/Skills",
        element: <Skills/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Projects/:id",
        element: <ProjectsDetailPage dados={data}/>
      }

      
    ]
  }
])







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>,
)
