import React, { useEffect } from 'react';

import './Header.css';
import Quote from './Quote';

function Header() {
	return (
		<div className='header'>
			<h1 className='header__title'>Todos App</h1>
			<div>
				{/* Quote */}
				<Quote />
			</div>
		</div>
	);
}

export default Header;
