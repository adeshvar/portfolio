import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFreebsdDevil } from "react-icons/io";
const NavBar = () => {
  return( 
  <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      
      <span className="text-2xl font-bold">Adeshvar Mullath{IoLogoFreebsdDevil}</span>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/adeshvar-mullath-44326b219/" target='_blank' rel='noopener noreferrer'>
      <FaLinkedin/>
      </a>
      <a href="https://github.com/adeshvar" target='_blank' rel='nopener noreferrer'>
      <FaGithub/>
      </a>
      <a href="https://www.instagram.com/adeshvar__mullath/" target='_blank' rel='noopener noreferrer'>
      <FaInstagram/>
      </a>
    </div>
  </nav>
  )
}

export default NavBar
