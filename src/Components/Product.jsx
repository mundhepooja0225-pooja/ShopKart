import React from 'react'
import { useCart } from '../Components/CartContext'

const Product = ({ id, title, image, price, category,rating }) => {

  const { addToCart } = useCart();
  const product = {
    id,
    title,
    image,
    price,
    category,
    rating
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={title} loading="lazy" />
        <span className="product-rating"><span aria-hidden="true">&#9733;</span> {rating}</span>
      </div>
      <div className="product-details">
        <p className="product-category">{category}</p>
        <h2 className="product-title">{title}</h2>
        <div className="product-purchase">
          <p className="product-price">${price.toFixed(2)}</p>
          <button type="button" onClick={() => addToCart(product)}>
            Add to cart <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
