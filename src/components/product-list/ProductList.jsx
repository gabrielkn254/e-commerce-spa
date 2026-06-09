import React from 'react'
import ProductCard from '../product-card/ProductCard'
import './product-list.css'
import { Link } from 'react-router'

const ProductList = ({products, setActiveProduct}) => {
  return (
    <div className='product-list'>
      {products.map((product) => {
        return <Link key={product.id} to={`/product-details/${product.id}`} onClick = {() => setActiveProduct(product)} >
                <ProductCard product={product} />
              </Link>
      })}
    </div>
  )
}

export default ProductList
