import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'


const BigNavbar = () => {
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <>
    <motion.nav className='bigNavContainer'
        {...easeScaleUp}
    >
        <ul className='bigHeaderNavContainer'>
            <NavLink to="/" className='navLinks'>Home</NavLink>
            <NavLink to="/home" className='navLinks'>Tours</NavLink>
            <NavLink to="/home" className='navLinks'>Destination</NavLink>
            <NavLink to="/about" className='navLinks'>About</NavLink>
            <NavLink to="/home" className='navLinks'>Contact</NavLink>
        </ul>
    </motion.nav>
    </>
  )
}

export default BigNavbar