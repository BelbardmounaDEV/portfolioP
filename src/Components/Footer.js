import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Belbard Mouna</h4>
      <h4>Copyright &copy; 2024 MB</h4>
      <div className='footerLinks'>
        <a href="https://github.com/BelbardmounaDEV" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mouna-belbard-5b301b270/" target='_blank'><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer