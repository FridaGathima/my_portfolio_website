import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myProfile from './assets/myprofile.jpeg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Header />
      <img src={myProfile} className='myprofilepic' alt="profile_picture" />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;