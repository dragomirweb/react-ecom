import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Header = () => (
	<div className="container mb-5 py-3">
		<div className="grid grid-cols-12 gap-4">
			<Link className="col-span-2" to="/">
				<Logo />
			</Link>
			<div className="col-span-10 flex justify-end items-center ">
				<Link className="px-4 py-3 hover:text-gray-600" to="/">HOME</Link>
				<Link className="px-4 py-3 hover:text-gray-600" to="/shop">SHOP</Link>
				<Link className="px-4 py-3 hover:text-gray-600" to="/contact">CONTACT</Link>
			</div>
		</div>
	</div>
);

export default Header;
