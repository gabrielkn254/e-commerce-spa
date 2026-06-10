import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import HeroSection from './hero-section/HeroSection'

const HomePage = () => {
  return (
    <div>
      <Navbar  buttonText="Login to Admin Portal" btnClass="primary-btn" link={'/admin-portal'} />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default HomePage
