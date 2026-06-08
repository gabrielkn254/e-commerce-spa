import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <nav className='footer-nav-links'>
        <Link to='/' >HOME</Link>
        <Link to='/shop'>SHOP</Link>
        <Link to='/admin-portal'>ADMIN PORTAL</Link>
      </nav>
      <p>E-commerce App. Reference: <Link to='ke.oraimo.com'>Oraimo Ke</Link></p>
    </div>
  )
}

export default Footer
