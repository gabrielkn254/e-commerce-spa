import React from 'react'
import './add-product-form.css'

const AddProductForm = ({name, setName, price, setPrice, image, setImage, description, setDescription, onSubmit}) => {
  return (
    <form className='add-product-form' onSubmit={onSubmit}>
      <h2>Add a New product</h2>
      <div className='form-inputs'>
          <input
          type="text"
          value={name}
          placeholder='Product Name'
          onChange={(e) => setName(e.target.value)}
          autoComplete='off' />

          <input
          type="number"
          value={price}
          placeholder='Product Price'
          onChange={(e) => setPrice(e.target.value)}
          autoComplete='off' />

          <textarea
          type="text"
          value={image}
          rows={2}
          placeholder='Paste image url'
          onChange={(e) => setImage(e.target.value)}
          autoComplete='off' />

          <textarea
          type="text"
          value={description}
          placeholder='Paste product description, Use "." to separate points'
          onChange={(e) => setDescription(e.target.value)}
          rows={9}
          autoComplete='off' />
      </div>

      <button type='submit'>Add Product</button>
    </form>
  )
}

export default AddProductForm
