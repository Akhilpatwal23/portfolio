import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full text-white bg-gray-800'>
      <div className="border-t-2 dark:border-gray-600 mt-3 mb-3"></div>
      <div className='w-11/12 md:w-3/5 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between'>
          <h1 className='text-xl mb-2 md:mb-0'>@Zenkai</h1>
          <div>
            <h1 className='text-xl mb-2 md:mb-0'>Follow Me</h1>
            <div className='flex flex-col gap-1 m-1'>
              <Link to="https://www.linkedin.com/in/akhil-patwal-2a52a9213/" className='mr-2'>LinkedIn</Link>
              <Link to="https://github.com/Akhilpatwal23">Github</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-700 mt-3 mb-3"></div>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className="text-slate-400 mb-2 md:mb-0">&copy; 2024 Akhil Patwal. All rights reserved.</div>
          <div className='flex gap-1 mb-1 text-slate-300'>
            <Link to="https://www.linkedin.com/in/akhil-patwal-2a52a9213/" className='mr-2'><FaLinkedin className="text-2xl mr-2" /></Link>
            <Link to="https://github.com/Akhilpatwal23"><FaGithub className="text-2xl mr-2" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer