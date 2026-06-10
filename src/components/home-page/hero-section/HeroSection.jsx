import React from 'react'
import './hero-section.css'
import { Link } from 'react-router'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <p>SMARTWATCH <sup>TM</sup></p>
        <h1>Africa's Number 1 <br/> Smartwatch Brand!</h1>

        <p>Panda glass offers exceptional impact resistance, withstands daily wear
          <br/> and accidental drops, and protects your device's screen from scratches.
        </p>

        <Link to="/shop">
          <button>View Our Products</button>
        </Link>
        <img src="https://cdn-img.oraimo.com/2026/05/25/OTW-631-home1.jpg" alt="hero image" />
    </div>
  )
}

export default HeroSection
