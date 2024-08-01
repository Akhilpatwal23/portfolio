
import './Home.css'

import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Card from '../my work/Card'
import Skills from '../Skills/Skills'
import Contactus from '../Contactus/Contactus'
const Home = () => {
  return (
    <div id='home'>

  <div>
    <h1 className="Title mb-3 " id="home1"> 
    "I'm gonna be the<span style={{color:'#FFA500'  }  }> King of Coders!" </span> 
    </h1>
  </div>
      <Intro />
       <Card/> 
       <Skills/>
       <Contactus/>
    </div>
  )
}

export default Home