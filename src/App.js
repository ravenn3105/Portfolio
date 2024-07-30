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
      <div className="scrollbar-thin scrollbar-webkit">
        <Navbar></Navbar>
        <Readingbar></Readingbar>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        </div>
        </ErrorBoundary>
    </>
  );
}

export default App;
