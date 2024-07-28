import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <>
    <ErrorBoundary>
        <Navbar></Navbar>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        </ErrorBoundary>
    </>
  );
}

export default App;
