import './Navbar.css'
import React,{useState}  from 'react';
import  {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
  const [icon,setIcons]=useState(false)
  const handleClick=() =>{
setIcons(!icon)
  }
  const closeSideDrawer =() =>{
    setIcons(false)
  }
  return (
    <>
       <nav className='navbar'>
         <Link to='/' className='nav-logo'>Logo</Link>
         <div className='menu-icon' onClick={handleClick}>
         {
           icon ? <FaTimes className='fa-times'>
           </FaTimes>:
           <FaBars className='fa-bars'></FaBars>
}
</div>
         <ul className = {
icon? 'nav-menu-active':'nav-menu' 
         }>
           <Link to='/' className='links' onClick={closeSideDrawer}>Home</Link>
         <li>
           <Link to='/about' className='links'  onClick={closeSideDrawer}>About</Link>
         </li>
         <li>
           <Link to='/products' className='links'  onClick={closeSideDrawer}>Product</Link> 
         </li>
         <li>
           <Link to='/contact' className='links'  onClick={closeSideDrawer}>Contact</Link>
         </li>
         <li>
           <Link to='/services' className='links'  onClick={closeSideDrawer}>Services</Link>
         </li>
         </ul>
       </nav>
       </>
  );
}

export default Navbar;
