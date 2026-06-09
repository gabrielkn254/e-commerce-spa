import React, { useState } from 'react'
import ProductList from '../product-list/ProductList'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './shop-page.css'
import SearchProduct from '../search-product/SearchProduct'

const ShopPage = ({products, setActiveProduct}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => ( 
    product.name.toLowerCase().includes( searchTerm.toLowerCase() ) 
  ))


  return (
    <div className='shop-page'>
      <Navbar buttonText="Login to Admin Portal" btnClass="primary-btn" link={'/admin-portal'} />
        <div className='shop-main-content'>
          <SearchProduct onSearch={setSearchTerm} />
          {
            filteredProducts.length < 1
              ? <p>No products found for {searchTerm}</p>
              : <ProductList products={ filteredProducts } setActiveProduct = {setActiveProduct} />
          }
          
        </div>
      <Footer />
    </div>
  )
}

export default ShopPage
