"use client"
// Import necessary modules
import { fetchRecipes } from "../../../utils/apiUtils";
import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";
import { FaPlay, FaPlus } from "react-icons/fa6";
import Video from "@/components/video";
import { useParams } from 'next/navigation';

function Watch() {

  const params = useParams();
  // Get id from param query
  let id = Number(params['id']);
  
  // Initialize id state
  const [iframeDimensions, setIframeDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setIframeDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Listen for window resize events
    window.addEventListener('resize', updateDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);


  // Dynamically set the iframe source URL
  const iframeSrc = id ? `https://vidsrc.to/embed/movie/${id}` : null;

  return (
    <div>
      <a target="_blank" rel="noopener noreferrer">
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            width={iframeDimensions.width}
            height={iframeDimensions.height}
            allowFullScreen
          ></iframe>
        )}

        
    
      </a>
    </div>
  );
}

export default Watch;
