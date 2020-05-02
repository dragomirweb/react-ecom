import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, dispatch }) => {
	const { imageUrl, name, quantity, price } = item;

	return (
		<div className="col-start-2 col-span-10 grid grid-cols-12 gap-2 py-3">
			<div className="col-span-2 pb-4/6 relative mr-2">
				<img className="absolute w-full h-full object-cover" src={imageUrl} alt={name} />
			</div>
			<div className="col-span-5 flex items-center">
				<h2>{name}</h2>
			</div>
			<div className="col-span-2 flex items-center">
				<div className="flex items-center">
					<div
						onClick={() => dispatch(removeItem(item))}
						className="text-xl w-8 cursor-pointer flex justify-center"
					>
						&#10094;
					</div>
					<div className="text-xl mw-4 mx-1 flex justify-center">{quantity}</div>
					<div
						onClick={() => dispatch(addItem(item))}
						className="text-xl w-8 flex justify-center cursor-pointer"
					>
						&#10095;
					</div>
				</div>
			</div>
			<div className="col-span-2 flex items-center">
				<span className="text-lg">${price}</span>
			</div>
			<div
				onClick={() => dispatch(removeItemFromCart(item))}
				className="col-span-1 flex items-center justify-center text-3xl cursor-pointer text-red-600"
			>
				&#10005;
			</div>
		</div>
	);
};

export default connect(null)(CheckoutItem);
