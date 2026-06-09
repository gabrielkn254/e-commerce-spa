import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const AdminPortal = () => {
  return (
    <div>
      <Navbar  buttonText="Log Out" btnClass="danger-btn" link={'/'}/>
        this is an AdminPortal.
      <Footer />
    </div>
  )
}

export default AdminPortal
