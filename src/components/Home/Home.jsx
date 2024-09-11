
import './Home.css'

import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Card from '../my work/Card'
import Skills from '../Skills/Skills'
import Contactus from '../Contactus/Contactus'
const Home = () => {
  return (
    <div id='home'>

  
      <Intro />
       <Card/> 
       <Skills/>
       <Contactus/>
    </div>
  )
}

export default Home