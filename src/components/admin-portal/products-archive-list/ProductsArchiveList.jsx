import React from 'react'
import './products-archive-list.css'

const ProductsArchiveList = ({products}) => {

  const product = products[0]
  return (
    <div className='products-archive-list-box'>
      <h2>All Products</h2>

      <div className="products-archive-list">

      <div className='archive-card'>
        <p className="name">{product.id}</p>
        <div className="image"><img src={product.image} alt="" /></div>
        <p className="name">{product.name}</p>
        <p className="name">{product.price}</p>
        <button>Delete</button>
      </div>

      </div>


    </div>
  )
}

export default ProductsArchiveList
