import React from 'react';

const CollectionItem = ({ id, price, imageUrl, name }) => (
  <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-xl flex flex-col">
    <div
      className="bg-cover bg-center bg-no-repeat min-h-xl w-full"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="flex justify-between text-xl mt-3">
      <span className="font-medium">{name}</span>
      <span className="font-light">${price}</span>
    </div>
  </div>
);

export default CollectionItem;
