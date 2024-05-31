import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import myImage from '../images/mouna.png';  
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get    <b>to</b> know me ! </h1>
          <p>
          Hello, I am <b>Belbard Mouna</b> and I come from Casablanca, Morocco. 
          I am a <b>web developer </b> and a second-year computer development student at  <b>Eurelec Centre </b>. <br/><br/>
          I completed an internship as a<b> web developer at <b>I-Gouvernancia.</b></b><br></br>
          I love creating original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
          I am<b>  open </b>to new collaborations or projects where I can contribute and grow. Feel free to contact me; the links can be found in the footer. <br/>
             
          </p>
        </div>

        <div>
          <Tilt>
            <img src={myImage} alt="Description of image" className='myImageClass' />  {/* Replace Lottie with your image */}
          </Tilt>
        </div>


      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About