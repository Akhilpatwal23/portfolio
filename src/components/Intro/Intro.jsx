import { Link } from 'react-router-dom'
import './intro.css'
import { IoDownloadOutline } from "react-icons/io5";
const Intro = () => {
  return (
    <>
    <div className="w-3/4 mx-auto mt-10" >
      <div 
         className="bg-white card bg-opacity-50 border 
                    rounded-lg shadow dark:bg-gray-800 
                    dark:border-gray-700 mx-auto mb-1z` ease-in-out delay-200 hover:scale-105 duration-300">

        <nav className='flex px-4 text-gray-700 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
          <ul className="flex flex-row justify-start ">
            <li className="p-1">
              <Link to="/" className="text-slate-300 hover:text-blue-700"> 🏠 Home</Link>
            </li>
            <li>{'>'}</li>
            <li className="p-1">
              <Link to="/about" className="text-slate-300 hover:text-blue-700 ">Akhil</Link>
            </li>
            <li>{'>'}</li>
            <li className="p-1">
              <Link to="/work" className="text-slate-300 hover:text-blue-700">AboutMe</Link>
            </li>
            <li>{'>'}</li>
            <li className="p-1">
              <Link to="/contact" className="text-slate-300 hover:text-blue-700">Intro.md</Link>
            </li>
          </ul>
        </nav>

        <div className='flex  p-4'>
        <div className="flex flex-col items-center">
        <div className="m-1">
          <img className='rounded-full m-2' src="https://i.ibb.co/dKLbxGC/Untitled42.png" width="300" height="300" alt="Profile" />
        </div>
  
        <h1 className='text-white text-center mt-3 text-xl'>Akhil Patwal</h1>
        <div className='text-slate-400 text-center mb-10'>@Zenkai</div>
  
  
      <button className='cursor-pointer mr-1 ebutton inline-flex justify-center items-center py-2.5 px-5 
      text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 
       focus:ring-blue-300 dark:focus:ring-blue-900'>
        <Link to={"https://drive.google.com/file/d/1ZI9kYiJSS_pkCC0oJImimIEmV654cw76/view?usp=sharing"} className='inline-flex  gap-2 '>Resume<IoDownloadOutline className='mt-1'/></Link>
      </button>
</div>         

          <div className="basis-3/5 ml-10 "> 
            <div className='grid grid-cols-2 gap-6 p-4 h-full text-center text-white'>
              <div className="border car2 dark:border-gray-700 rounded-lg p-6 flex flex-col ">
                <h1 className="text-xl font-bold mb-2 ">👋 About Me</h1>
                <p className="flex-grow text-slate-400">Hello! I'm <b>Akhil Patwal </b> Welcome to my portfolio, I'm excited to share my journey with you! 
                Feel free to explore, ask questions, and connect with me. I'm always open to new ideas, exciting projects, and meaningful conversations. Together, we might just create something extraordinary!
</p>
              </div>
              <div className="border car2 dark:border-gray-700 rounded-lg p-6 flex flex-col">
                <h1 className="text-xl font-bold mb-2">💻 Skills</h1>
                <p className="flex-grow text-slate-400">
                I have learned and practised the basics and concepts of programming and web-development with languages like 
                 C,C++,JS, HTML and CSS and have an avg exp through various projects  that 
                 I've done and with tools as Git and Github.
                </p>
              </div>
              <div className="border car2 dark:border-gray-700 rounded-lg p-6 flex flex-col">
                <h1 className="text-xl font-bold mb-2">🎨 Creativity</h1>
                <p className="flex-grow text-slate-400">
                As a final year Engineering Student, I see programming as a mix of art and gaming. It's like painting with code
                 or solving complex problems like puzzles in a video game. I have learned to design websites that look
                  good and work well,Fix tricky problems like beating a tough game boss.
                </p>
              </div>
              <div className="border car2 dark:border-gray-700 rounded-lg p-6 flex flex-col">
                <h1 className="text-xl font-bold mb-2">📜Background</h1>
                <p className="flex-grow text-slate-400">
                I'm 22 years old, born in Uttarakhand, India, and now living in New Delhi. I just finished my B.Tech degree from Dronacharya Group of Institutions.
                I love learning about new tech and solving problems with code.
                </p>  
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
    </>  
  )
}

export default Intro