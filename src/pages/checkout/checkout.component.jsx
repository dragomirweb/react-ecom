import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
	return (
		<div className="container">
			<div className="grid grid-cols-12 gap-4 mt-20">
				<div className="col-start-2 col-span-10 grid grid-cols-12 gap-2 py-3 border-b-2">
					<div className="col-span-2 text-lg">
						<span>Product</span>
					</div>
					<div className="col-span-5 text-lg">
						<span>Description</span>
					</div>
					<div className="col-span-2 text-lg">
						<span>Quantity</span>
					</div>
					<div className="col-span-2 text-lg">
						<span>Price</span>
					</div>
					<div className="col-span-1 text-center text-lg">
						<span>Remove</span>
					</div>
				</div>

				{cartItems.map((cartItem) => {
					return (
            <CheckoutItem item={cartItem} key={cartItem.id} />
					);
				})}

				<div className="col-start-2 col-span-10 grid grid-cols-12 gap-2 py-3 border-t-2">
					<div className="col-start-10 col-span-3 text-right mt-10 text-4xl">Total: ${totalPrice}</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
