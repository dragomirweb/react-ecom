import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="relative w-1/3 pb-1/3">
      <img className="absolute w-full h-full object-cover" src={imageUrl} alt="item" />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
