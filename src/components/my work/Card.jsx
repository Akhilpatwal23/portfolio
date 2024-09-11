import React, { useState } from 'react';
import spaceInvaderImage from '../../assets/spaceinvader.png';
import spotify from '../../assets/spotify.png';
import Eaternity from '../../assets/Eaternity.png';
const Card = () => {
  const projects = [
    {
      title: "📊 Spotify Clone",
      description: "A Spotify-inspired music player built with React and Tailwind CSS. featuring Functional music player with playback controls,Album and song listings,Song selection and playback functionality,Real-time display of current time and song duration,Interactive seekbar for track navigation",
      image: `${spotify}`
    },
    {
      title: "🎨 Eaternity",
      description: "A captivating restaurant website UI built with ReactJS and Tailwind CSS, featuring smooth AOS animations and full responsiveness across all devices. This static design showcases the menu, ambiance, and key information with elegant layouts that adapt seamlessly to desktop, tablet, and mobile screens.",
      image: `${Eaternity}` 
    },
    {
      title: "📝 Blog App",
      description: "A modern blogging WebApp built with React, Tailwind CSS, and Material-UI, featuring user authentication and full CRUD functionality for blog posts. Powered by a MongoDB and Express backend with JWT for secure user sessions, this application offers a streamlined blogging experience",
      image: "" 
    },
    {
      title: "🎨 Space Invader",
      description: "A simple Arcade Game using Python with basic functionalities like moving the spaceship, shooting bullets, and destroying aliens.",
      image: `${spaceInvaderImage}` 
    },
    {
      title: "📚 Placement cell Management System",
      description: "Placement cell Management System is a web-based application developed using Mern Stack (react,node express mongodb ). This project is an online platform for students to register for placements, view job listings, and apply for jobs. Admins can manage student and company data, post job listings, and track student applications.",
      image: "" 
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-8 mb-2" id='mywork'>
      <h1 className='text-white text-center mt-6 mb-3 text-5xl  font-bold'> Previous Projects </h1>
      <div className='flex flex-col sm:flex-row items-center justify-between h-full text-white'>
        <button onClick={prevProject} className="text-3xl px-4 py-2 sm:py-0">&lt;</button>
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 border car2 dark:border-gray-700 rounded-lg m-2 p-4 flex flex-col items-center">
          <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 mb-4 overflow-hidden rounded-lg">
            <img 
              src={projects[currentIndex].image || 'https://via.placeholder.com/400x300?text=No+Image'} 
              alt={projects[currentIndex].title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">{projects[currentIndex].title}</h2>
          <p className="text-sm sm:text-base text-slate-400 text-center">{projects[currentIndex].description}</p>
        </div>
        <button onClick={nextProject} className="text-3xl px-4 py-2 sm:py-0">&gt;</button>
      </div>
    </div>
  );
};

export default Card;