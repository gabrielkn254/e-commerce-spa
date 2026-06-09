import React from 'react'
import './add-product-form.css'

const AddProductForm = ({name, price, image, description, onSubmit}) => {
  return (
    <form className='add-product-form' onSubmit={onSubmit}>
      <h2>Add a New product</h2>
      <div className='form-inputs'>
          <input
          required
          type="text"
          name='name'
          placeholder='Product Name'
          onChange={(e) => name(e.target.value)}
          autoComplete='off' />

          <input
          required
          type="number"
          name='price'
          placeholder='Product Price'
          onChange={(e) => price(e.target.value)}
          autoComplete='off' />

          <textarea
          required
          type="text"
          name='image'
          rows={2}
          placeholder='Paste image url'
          onChange={(e) => image(e.target.value)}
          autoComplete='off' />

          <textarea
          required
          type="text"
          name='description'
          placeholder='Paste product description, Use "." to separate points'
          onChange={(e) => description(e.target.value)}
          rows={9}
          autoComplete='off' />
      </div>

      <button type='submit'>Add Product</button>
    </form>
  )
}

export default AddProductForm
