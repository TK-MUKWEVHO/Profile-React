import React from 'react'
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='App'>
       <NavBar/>
      <AboutMe/>
      <Skills/>
      <Footer/>
    </div> 
  )
}

export default App
