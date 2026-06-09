import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import AddProductForm from './add-product-form/AddProductForm'
import ProductsArchiveList from './products-archive-list/ProductsArchiveList'
import './admin-portal.css'

const AdminPortal = ({products, setProducts, setActiveProduct}) => {
  const [name, setName] =useState("")
  const [price, setPrice] =useState(0)
  const [image, setImage] =useState("")
  const [description, setDescription] =useState("")

  const handleAddProduct = (event) => {
    event.preventDefault()

    // Format description into an array of sentences 
    const genDescription = description.split(/\.\s*/).filter(Boolean)

    // create new product
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price,
      image: image,
      description: genDescription
    }

    // reset states
    setName("")
    setImage("")
    setPrice("")
    setDescription("")

    //update products state and localStorage
    setProducts((prev) => [...prev, newProduct])

  }


  const handleOnDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }


  return (
    <div>
      <Navbar  buttonText="Log Out" btnClass="danger-btn" link={'/'}/>
        <div className="admin-portal-main">

          <div className="admin-header">
            <h1>Admin Portal</h1>
            <hr className='h1-hr' />
          </div>

          <div className='box'>
            <div className="left">
              <AddProductForm
                name={name}
                setName = {setName}
                price={price}
                setPrice = {setPrice}
                image={image}
                setImage = {setImage}
                description={description}
                setDescription = {setDescription}
                onSubmit={handleAddProduct}
              />
            </div>
            <hr className='box-middle-hr' />
            <div className="right">
            <ProductsArchiveList products={products} onDeleteProduct={handleOnDeleteProduct} setActiveProduct = {setActiveProduct} />
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default AdminPortal
