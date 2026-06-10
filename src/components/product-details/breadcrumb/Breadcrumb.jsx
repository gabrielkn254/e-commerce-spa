import React from 'react'
import { Link } from 'react-router'
import './breadcrumb.css'

const Breadcrumb = ({name}) => {
  return (
    <div className='breadcrumb'>
      <Link className='link' to="/">Home</Link> <p>&gt;&gt;</p> <Link className='link' to="/shop">Shop</Link> <p>&gt;&gt;</p> <p>{name}</p>
    </div>
  )
}

export default Breadcrumb
