import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link className='link' to='/home'>Home</Link>
            <Link className='link' to='/login'>Login</Link>
            <Link className='link' to='/skills'>Skills</Link>
            <Link className='link' to='/contact'>Contact</Link>
            <Link className='link' to='/hooks'>Hooks</Link>
        </nav>
    </div>
  )
}

export default Navbar