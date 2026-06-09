import React from 'react'
import { Link } from 'react-router'
import './navbar.css'

const Navbar = ({buttonText, btnClass, link}) => {
  const buttonClasses = `login-btn ${btnClass}`
  return (
    <div className="navbar">
      <div className='navbar-content'>
        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/shop'>SHOP</Link>
        </nav>
        <Link to={link}>
          <button className={buttonClasses} >{buttonText}</button>
        </Link>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
