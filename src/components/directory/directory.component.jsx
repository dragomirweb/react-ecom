import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => {
	return (
		<div className="container">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-3">
				{sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
