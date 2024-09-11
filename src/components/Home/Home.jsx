import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import Intro from '../Intro/Intro';
import Card from '../my work/Card';
import Skills from '../Skills/Skills';
import Contactus from '../Contactus/Contactus';

const Home = () => {
  return (
    <div id="home">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-5 text-center text-white">
        <Typewriter
          options={{
            strings: ["Hello World! Welcome to my Portfolio"],
            autoStart: true,
            loop: true,
            delay: 50,
            cursor: '|',
          }}
        />
      </h1>
      <Intro />
      <Card className="my-8" />
      <Skills className="my-8" />
      <Contactus className="my-8" />
    </div>
  );
};

export default Home;