import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
	<div className="container py-5">
		<h1 className="text-4xl mb-3">{title.toUpperCase()}</h1>

		<div className="grid grid-cols-12 gap-6">
			{items.filter((item, i) => i < 4).map((item, index) => (
				// <div key={index} className="col-span-3 min-h-lg flex flex-col">
				// 	<img className="object-cover" src={item.imageUrl} alt={item.name} />
				// 	<h2>{item.name}</h2>
        // </div>
        <CollectionItem key={index} {...item} />
			))}
		</div>
	</div>
);

export default CollectionPreview;
