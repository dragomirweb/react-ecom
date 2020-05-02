import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Shop = ({ collections }) => {
	return <div>{collections.map((collection, i) => <CollectionPreview key={i} {...collection} />)}</div>;
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
