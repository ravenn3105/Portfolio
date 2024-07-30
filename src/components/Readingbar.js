// ProgressBar.js
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Readingbar.css'; // Create a CSS file for custom styles if needed

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercentage);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', updateScrollProgress);
      return () => {
        window.removeEventListener('scroll', updateScrollProgress);
      };
    }, []);
  
    // Detect if the screen width is less than 640px (tailwind's sm breakpoint)
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  
    if (isMobile) {
      return null; // Do not render the progress bar on mobile devices
    }
  
    return (
      <div className="progress-bar-container fixed top-[50px] md:top-[60px] lg:top-[70px] w-full h-[5px] bg-gray-200 z-50">
        <div className="progress-bar bg-blue-500 h-full" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    );
  };

export default ProgressBar;
