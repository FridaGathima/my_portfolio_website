import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myProfile from './assets/myprofile.jpeg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'
import NavBar from './components/NavBar'
import Education from './components/Education'


function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Header />;
    }
  };
  return (
    <div>
      {/* <NavBar onSectionChange={handleSectionChange} />
      {renderSection()} */}
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;