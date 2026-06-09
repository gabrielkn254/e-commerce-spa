import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar  buttonText="Login to Admin Portal" btnClass="primary-btn" link={'/admin-portal'} />
      this is a homepage.
      <Footer />
    </div>
  )
}

export default HomePage
