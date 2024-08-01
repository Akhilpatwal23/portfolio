import React, { useState } from 'react';
import spaceInvaderImage from '../../assets/spaceinvader.png';
const Card = () => {
  const projects = [
  
    {
      title: "📊 Ecommerce WebApp",
      description: " A full-stack E-commerce WebApp built with React, Redux, and Firebase, featuring user authentication, product search, and cart functionality. The backend is powered by Firebase Firestore and Firebase Authentication, with Stripe integration for secure payments. The application offers a seamless shopping experience for users, with real-time updates and responsiveness.",
      image: ""
    },
    {
      title: "📝 Blog App",
      description: "A modern blogging WebApp built with React, Tailwind CSS, and Material-UI, featuring user authentication and full CRUD functionality for blog posts. Powered by a MongoDB and Express backend with JWT for secure user sessions, this application offers a streamlined blogging experience",
      image: "" 
    },
    {
      title: "🎨 Space Invader",
      description: "A simple Arcade Game using Python with basic functionalities like moving the spaceship, shooting bullets, and destroying aliens.  ",
      image: `${spaceInvaderImage}` 
    },
    {
      title: " 📚  Placement cell Managment System",
      description: "A simple Placement cell Management System using C++ with basic functionalities like adding, deleting, and searching students.",
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
    <div className="w-3/6  mx-auto p-10   mt-16 mb-2" id='mywork'>
      <h1 className='text-5xl text-center text-white mb-4'>👷‍♂️ Previous Projects 👷‍♂️</h1>
      <div className='flex items-center justify-between h-full text-white'>
        <button onClick={prevProject} className="text-3xl px-4">&lt;</button>
        <div className=" w-auto h-auto  border car2 dark:border-gray-700 rounded-lg m-2 p-3 flex flex-col items-center ">
          <div className="w-100 h-90 m-3 overflow-hidden rounded-lg">
            <img 
              src={projects[currentIndex].image} 
              alt={projects[currentIndex].title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center">{projects[currentIndex].title}</h1>
          <p className="text-slate-400 text-center">{projects[currentIndex].description}</p>
        </div>
        <button onClick={nextProject} className="text-3xl px-4">&gt;</button>
      </div>
    </div>
  );
};

export default Card;