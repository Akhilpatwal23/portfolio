import React from 'react';
import { Link } from 'react-router-dom';
import { IoDownloadOutline } from "react-icons/io5";

const Intro = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 md:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden">
        <nav className='flex px-4 py-3 bg-gray-800 border-b border-gray-700'>
          <ul className="flex flex-row items-center space-x-2 text-sm text-gray-400">
            <li><span className="hover:text-blue-400 cursor-pointer">🏠 Home</span></li>
            <li>/</li>
            <li><span className="hover:text-blue-400 cursor-pointer">Akhil</span></li>
            <li>/</li>
            <li><span className="hover:text-blue-400 cursor-pointer">About me</span></li>
            <li>/</li>
            <li><span className="text-blue-400">Intro.md</span></li>
          </ul>
        </nav>

        <div className='flex flex-col md:flex-row p-6 lg:p-10 space-y-8 md:space-y-0 md:space-x-8'>
          <div className="flex flex-col items-center md:w-1/3">
            <img className='rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover shadow-lg' src="https://i.ibb.co/dKLbxGC/Untitled42.png" alt="Akhil Patwal" />
            <h1 className='text-white text-center mt-6 text-3xl font-bold'>Akhil Patwal</h1>
            <div className='text-blue-400 text-center mb-6'>@Zenkai</div>
            <Link to="https://drive.google.com/file/d/1CXwTCwSA5pZ-IrvSgtksUtwUc-9BekDJ/view?usp=sharing" 
                  className='inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
              Resume <IoDownloadOutline className='ml-2'/>
            </Link>
          </div>         

          <div className="md:w-2/3 flex flex-col justify-center space-y-6">
            {[
              {
                title: "👋 About Me",
                content: "Hello! I'm Akhil Patwal. Welcome to my portfolio, I'm excited to share my journey with you! Feel free to explore, ask questions, and connect with me. I'm always open to new ideas, exciting projects, and meaningful conversations. Together, we might just create something extraordinary!"
              },
              {
                title: "💻 Skills",
                content: "Proficient in C, C++, JavaScript, HTML, and CSS. Experienced in version control with Git and GitHub. Developed multiple projects showcasing web development and programming skills."
              },
              {
                title: "🎨 Creativity",
                content: "As a final year Engineering Student, I see programming as a blend of art and gaming. I approach coding challenges like solving intricate puzzles, creating visually appealing and functional websites, and tackling complex problems with the determination of conquering a tough game level."
              },
              {
                title: "📜 Background",
                content: "22 years old, originally from Uttarakhand, India, now based in New Delhi. Recently graduated with a B.Tech degree from Dronacharya Group of Institutions. Passionate about emerging technologies and solving real-world problems through innovative coding solutions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-2xl font-bold mb-3 text-white">{item.title}</h2>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;