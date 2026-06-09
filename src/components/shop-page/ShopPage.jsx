import React, { useState } from 'react'
import ProductList from '../product-list/ProductList'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './shop-page.css'
import SearchProduct from '../search-product/SearchProduct'
import data from '../../data/data'

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState(data)

  const filteredProducts = products.filter((product) => ( product.name.toLowerCase().includes( searchTerm.toLowerCase() ) ))


  return (
    <div className='shop-page'>
      <Navbar buttonText="Login to Admin Portal" btnClass="primary-btn" link={'/admin-portal'} />
        <div className='shop-main-content'>
          <SearchProduct onSearch={setSearchTerm} />
          <ProductList products={filteredProducts}/>
        </div>
      <Footer />
    </div>
  )
}

export default ShopPage
