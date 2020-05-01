import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="cart-item col-span-12 md:col-span-6 lg:col-span-3 min-h-xl flex flex-col relative">
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
			<div className="flex justify-center absolute inset-0" style={{ top: '20rem' }}>
				<CustomButton inverted onClick={() => addItem(item)}>
					Add to cart
				</CustomButton>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
