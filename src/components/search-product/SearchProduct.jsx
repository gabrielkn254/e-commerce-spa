import React from 'react'
import './search-product.css'

const SearchProduct = ({onSearch}) => {
  return (
    <div className='search-product'>
      <form >
        <input 
          type="text"
          name="searchTerm"
          placeholder='Search a product...'
          onChange={(e) => onSearch(e.target.value.trim())}
          />
      </form>
    </div>
  )
}

export default SearchProduct
