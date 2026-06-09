import React from 'react'
import './products-archive-list.css'
import ArchiveCard from '../archive-card/ArchiveCard'

const ProductsArchiveList = ({products, onDeleteProduct, setActiveProduct}) => {

  return (
    <div className='products-archive-list-box'>
      <h2>All Products</h2>

      <div className="products-archive-list">
        {
          products.length < 1
          ? <p>No Products Available</p>
          : products.map(((product, index) => {
              return <>
                <hr className='archive-card-hr' />
                <ArchiveCard index={index +1} product={product}  key={product.id} onDelete={onDeleteProduct} setActiveProduct = {setActiveProduct} />
              </>
            }))
        }
      </div>


    </div>
  )
}

export default ProductsArchiveList
