import React, { useRef } from 'react';
import AllRoutes from './components/AllRoutes';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  const myref = useRef<HTMLInputElement>(null);

  const handleArrowClick = () => {
    myref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Landing handleArrowClick={handleArrowClick} />
      <AllRoutes handleArrowClick={handleArrowClick} />
      <AboutMe myref={myref} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
