import React, { useEffect } from 'react';
import './index.css'; // Ensure you import your CSS file
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ErrorBoundary from './ErrorBoundary';
import Readingbar from './components/Readingbar';

function App() {
  useEffect(() => {
    document.body.classList.add('no-vertical-scroll');

    // Cleanup the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('no-vertical-scroll');
    };
  }, []);

  return (
    <>
    <ErrorBoundary>
      {/* <div className="scrollbar-thin scrollbar-webkit"> */}
      <header className="sticky top-0 bg-white shadow-md" style={{ zIndex: 100 }}>
        <Navbar/>   </header>

        <Readingbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        {/* </div> */}
        </ErrorBoundary>
    </>
  );
}

export default App;
