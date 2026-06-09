import React from 'react'
import ProductCard from '../product-card/ProductCard'
import './product-list.css'
import { Link } from 'react-router'

const ProductList = ({products}) => {
  return (
    <div className='product-list'>
      {products.map((product) => {
        return <Link to={`/product-details/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
      })}
    </div>
  )
}

export default ProductList
