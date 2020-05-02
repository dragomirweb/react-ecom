import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'

import './collection-item.styles.scss'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item col-span-12 md:col-span-6 lg:col-span-3">

      <div className="w-full relative" style={{ paddingBottom: '160%' }}>

        <img
          className="bg-cover absolute w-full h-full object-cover"
          src={imageUrl}
          alt={name}
        />

        <div
          className="flex justify-center w-full absolute"
          style={{ bottom: '20px' }}
        >
          <CustomButton inverted onClick={() => addItem(item)}>
            Add to cart
          </CustomButton>
        </div>

      </div>

      <div className="flex justify-between text-xl mt-3">
        <span className="font-medium">{name}</span>
        <span className="font-light">${price}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
