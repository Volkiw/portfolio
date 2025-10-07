// import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './styles/app.scss';
import Home from './components/home/Home.jsx';
import Nav from './components/navigation/Navigation.jsx';
import Projects from './components/projects/Projects.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ProjectOne from './pages/projects/ProjectOne.jsx';



function App() {
  return (
    <>
        <Routes>
        <Route path="/" index element={ 
          <>
            <main className="main">
              <Nav />
              <Home />
              <Projects /> 
              <About />  
              <Contact /> 
              <Footer /> 
            </main>
          </>
      }/>

        <Route path="/projectOne" element={ 
          <ProjectOne /> 
      }/>

      </Routes>
    </>
  )
}

export default App
