import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className="container py-5">
    <h1 className="text-4xl mb-5 mt-10">{title.toUpperCase()}</h1>

    <div className="grid grid-cols-12 gap-6">
      {items
        .filter((item, i) => i < 4)
        .map((item, index) => <CollectionItem key={index} item={item} />)}
    </div>
  </div>
)

export default CollectionPreview
