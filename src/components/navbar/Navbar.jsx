import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/shop'>SHOP</Link>
      </nav>
      <Link to='/admin-portal'>
        <button>Login to Admin Portal</button>
      </Link>
      <hr />
    </div>
  )
}

export default Navbar
