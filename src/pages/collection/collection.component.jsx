import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <div className="container">
      <h2 className="text-4xl mb-12 mt-24">{title}</h2>
      <div className="grid grid-cols-12 gap-6 row-gap-12">
        {items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  //passing state is necessary because unlike other selectors, this selector
  //needs a part of the state depending on the url parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
