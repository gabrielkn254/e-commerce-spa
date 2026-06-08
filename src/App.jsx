import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import data from './data/data'
import HomePage from './components/home-page/HomePage'
import AdminPortal from './components/admin-portal/AdminPortal'
import ShopPage from './components/shop-page/ShopPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/admin-portal' element = {<AdminPortal />} />
        <Route path='/shop' element={<ShopPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
