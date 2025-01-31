import React from "react";
import coderImage from './coder.jpg';
import Typewriter from 'typewriter-effect';
import { StyledSpan,StyledTextLoop } from './HeroStyle.js';
import { Bio } from './data';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Riya Singh.
            <StyledTextLoop>
                I am a
                <StyledSpan>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
      </StyledSpan>
    </StyledTextLoop>
          </h1>
          <p className="mb-8 leading-relaxed">
            Currently in my junior year, pursuing a B.Tech in Computer Science at VIT Bhopal University. I like to explore new and upcoming technologies and build amazing
            projects related to Machine learning. In my free time I like to solve Sudoku or do Leetcode.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:riya.singhh3105@gmail.com"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a href="https://github.com/ravenn3105?tab=repositories" target="_blank" rel="noreferrer"
              className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="foto"
            src={coderImage} 
          />
        </div>
      </div>
    </section>
  );
}