import React from 'react';
import Lottie from 'lottie-react';
import SpaceBoy from '../LottieFiles/SpaceBoy.json';
import Typed from './Typed.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/nycto.png';
import { CiCoffeeCup } from 'react-icons/ci';

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hello!</h1>
          <h1>I'm <b>Belbard Mouna</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of transforming a raw idea into a website or a product that impacts lives.
            I want to do work that challenges me as a developer and that I can be proud of.
            <br /><br />
            I am proficient in <b>WordPress and Elementor Pro.</b> I also know <b>PHP and MySQL.</b> I am working on some projects in <b>React.</b>
            <br />
            I intend to learn several <b>new languages</b> in the near <b>future.</b>
            <br /><br></br>
            Also, I Love <b>Coffee</b> <CiCoffeeCup style={{ scale: '1.5', rotate: '15deg' }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
}

export default Home;
