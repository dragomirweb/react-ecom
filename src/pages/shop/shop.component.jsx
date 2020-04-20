import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from '../../mock-data/shop.data';

export default class Shop extends Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA
		};
	}
	render() {
		const { collections } = this.state;
		return <div>{collections.map((collection, i) => <CollectionPreview key={i} {...collection} />)}</div>;
	}
}
