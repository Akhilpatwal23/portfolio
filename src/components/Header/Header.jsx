import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='topnav border-b-4 border-gray-700'>
      <div className='inner'>
        <RouterLink to='/'>
          <h1 className='font-bold text-slate-100 text-3xl'>@Akhil_Patwal</h1>
        </RouterLink>
        
        <ul className='f'>
          <ScrollLink to='home' smooth={true} duration={500}><li>🏠 Home</li></ScrollLink>    
          <ScrollLink to='skills' smooth={true} duration={500}><li>🧑 Skills</li></ScrollLink>
          <ScrollLink to='mywork' smooth={true} duration={500}><li>⚒ My Work</li></ScrollLink>
          <ScrollLink to='contact' smooth={true} duration={500}><li>📖 Contact</li></ScrollLink>
        </ul>
      </div>
    </div>
  )
}