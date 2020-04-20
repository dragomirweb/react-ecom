import React from 'react';
import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
	<div
		className={`${size === 'large'
			? 'md:col-span-6 min-h-xl'
			: 'md:col-span-4 min-h-lg'} menu-item relative overflow-hidden cursor-pointer flex justify-center items-center `}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className="menu-item-bg absolute w-full h-full bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="menu-item-content flex flex-col items-center hover:bg-gray-400 opacity-75 bg-gray-200 px-12 py-5 z-10">
			<h1 className="text-4xl">{title.toUpperCase()}</h1>
			<span className="text-sm">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
