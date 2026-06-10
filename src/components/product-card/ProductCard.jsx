import React from 'react'
import './product-card.css'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <div className='image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='text'>
        <div className="title">
          <h3>{product.name}</h3>
          <p className="description" >{product.description[0]}</p>
        </div>
        <p><span className='currency'>KES </span>{product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
