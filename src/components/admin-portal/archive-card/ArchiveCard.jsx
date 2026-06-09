import React from 'react'
import './archive-card.css'
import { Link } from 'react-router'

const ArchiveCard = ({index, product, onDelete, setActiveProduct}) => {
  return (
    <div className='archive-card'>
      <p className="id">{index < 10 ? `0${index}` : index}</p>
      <div className="image"><img src={product.image} alt="" /></div>
      <Link to={`/product-details/${product.id}`} onClick={() => setActiveProduct(product)}>
        <p className="name">{product.name}</p>
      </Link>
  
      <p className="price"> <strong>KES {product.price}</strong></p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  )
}

export default ArchiveCard
