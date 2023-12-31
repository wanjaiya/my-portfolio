import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../../assets/logo_2.png'
import './Navbar.css'
import {Link} from 'react-scroll'


const Navbar = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#05113f] text-gray-3">
        <div>
          <img src={Logo} alt="logo" className="main-logo z-10"/>
        </div>

        {/*Menu */}
      
          <ul className=' hidden md:flex'>
            <li>
            <Link  to="home"  smooth={true}  duration={500} >
              Home
            </Link>
            </li>
            <li><Link  to="about"  smooth={true}  duration={500} >
              About
            </Link>
            </li>
            <li>
            <Link  to="experience"  smooth={true}  duration={500} >
              Skills
            </Link>
            </li>
            <li>
            <Link  to="work"  smooth={true}  duration={500} >
              Work
            </Link>
            </li>
            <li>
            <Link  to="contact"  smooth={true}  duration={500} >
              Contact
            </Link>
            </li>
          </ul>
       

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 text-white' >
           {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#05113f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
              Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
              About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="experience"  smooth={true}  duration={500} >
              Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
              Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
              Contact
            </Link>
            </li>

          </ul>

        {/* Social Menu */}
        <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
           <ul>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/paul-kangethe-wanjaiya-72503435/' target='blank'>Linkedin <FaLinkedin size={20}/> </a>
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/wanjaiya' target='blank'>Github <FaGithub size={20}/> </a>
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f3a755]'>
            <Link onClick={(e) =>{e.preventDefault(); window.location = 'mailto:kangethewanjaiya@gmail.com'}} to="#"  className='flex justify-between items-center w-full text-gray-300'>
                Email <HiOutlineMail size={20}/>
            </Link>
              
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='/'>Resume <BsFillPersonLinesFill size={20}/> </a>
            </li>
           </ul>

        </div>
      
    </div>
  )
}

export default Navbar
