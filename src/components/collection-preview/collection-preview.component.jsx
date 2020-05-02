import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className="container ">
    <h1 className="text-4xl mb-12 mt-24">{title.toUpperCase()}</h1>

    <div className="grid grid-cols-12 gap-6">
      {items
        .filter((item, i) => i < 4)
        .map((item, index) => <CollectionItem key={index} item={item} />)}
    </div>
  </div>
)

export default CollectionPreview
