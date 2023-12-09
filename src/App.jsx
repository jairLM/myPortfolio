import React from 'react'
import  Footer  from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Main from './components/main-info.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Main/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
