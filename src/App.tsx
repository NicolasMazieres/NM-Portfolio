import React from 'react';
import AllRoutes from './components/AllRoutes';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Landing />
      <AllRoutes />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
