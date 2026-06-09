import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import data from './data/data'
import HomePage from './components/home-page/HomePage'
import AdminPortal from './components/admin-portal/AdminPortal'
import ShopPage from './components/shop-page/ShopPage'
import ProductDetails from './components/product-details/ProductDetails'


function App() {
const [products, setProducts] = useState(data)
const [activeProduct, setActiveProduct] = useState({})

useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products))
}, [products])


  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/admin-portal' element = {<AdminPortal products={products} setProducts={setProducts} setActiveProduct = {setActiveProduct} />} />
        <Route path='/shop' element={<ShopPage products={products} setActiveProduct = {setActiveProduct} />} />
        <Route path='/product-details/:id' element={<ProductDetails product = {activeProduct} />} />
        
      </Routes>
    </HashRouter>
  )
}

export default App
