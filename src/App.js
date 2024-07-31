import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ErrorBoundary from './ErrorBoundary';
import Readingbar from './components/Readingbar';

function App() {
  return (
    <>
    <ErrorBoundary>
      <div className="overflow-y-hidden">
        <Navbar/>
        <Readingbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        </div>
        </ErrorBoundary>
    </>
  );
}

export default App;
