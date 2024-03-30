import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import BioPage from './pages/BioPage'
import SkillPage from './pages/SkiillPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
   <BioPage/>
   <SkillPage/>
   <ProjectPage/>
   <ContactPage/>
    
    
  </React.StrictMode>,
)
