import React from 'react';

const CheckoutItem = ({item}) => {
  const { imageUrl, name, quantity, price } = item
	return (
		<div className="col-start-2 col-span-10 grid grid-cols-12 gap-2 py-3">
			<div className="col-span-3 pb-2/3 relative mx-5 ml-7">
				<img className="absolute w-full h-full object-cover" src={imageUrl} alt={name} />
			</div>
			<div className="col-span-4 flex items-center">
				<h2>{name}</h2>
			</div>
			<div className="col-span-2 flex items-center">{quantity}</div>
			<div className="col-span-2 flex items-center">{price}</div>
			<div className="col-span-1 flex items-center justify-center text-3xl cursor-pointer text-red-600">&#10005;</div>
		</div>
	);
};

export default CheckoutItem;
