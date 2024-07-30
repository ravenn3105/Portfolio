import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar() {
  
  return (
    <>
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Riya Singh
          </a>
        </nav>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-300 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="https://drive.google.com/file/d/1BWCZ-wnRjJZPFyyJU7lWpOLop_tumR4w/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mr-5 text-gray-300 hover:text-white">
            Resume
          </a>
          
        </nav>
        {/* Github icon */}
        <a href="https://github.com/ravenn3105" target="_blank" rel="noopener noreferrer" className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.65.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.217.694.825.577C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/>
          </svg>
        </a>

        {/* linkedin icon */}
        <a href="https://www.linkedin.com/in/riyasingh3105/" target="_blank" rel="noopener noreferrer" className="mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-blue-600"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.288c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.288h-3v-5.604c0-1.338-.027-3.062-1.865-3.062-1.867 0-2.154 1.459-2.154 2.962v5.704h-3v-10h2.877v1.364h.041c.401-.762 1.381-1.562 2.841-1.562 3.04 0 3.604 2.001 3.604 4.604v5.594z"/>
      </svg>
    </a>
    {/* contact section */}
        <a
          href="#contact"
          className="text-gray-300 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
    </>
  );
}