import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css'
import Home from './components/Home/Home';
import Header from './components/Header/Header';


import ParticlesComponent from './components/particle/particlebackground';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <div id='particles-js'>
      
      <BrowserRouter>
      <ParticlesComponent />
      <Header/>
      
       
      <Routes> 
      <Route path="/" element={<Home/>} />
       
      </Routes>
       <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
