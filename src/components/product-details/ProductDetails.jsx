import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './product-details.css'
import Breadcrumb from './breadcrumb/Breadcrumb'

const ProductDetails = ({product}) => {
  return (
    <div className="product-details-page">
      <Navbar buttonText="Login to Admin Portal" btnClass="primary-btn" link={'/admin-portal'} />

      <Breadcrumb name={product.name} />
      <hr/>

      <div className='product-details'>
        <div className='image'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details">
          <h1>{product.name}</h1>
          <p>KES {product.price}</p>
          <ul>
            {product.description.map((item, index) => {
              return <li key={index}><hr/>{item}</li>
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetails
