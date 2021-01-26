import React, { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import './Header.css';
import Quote from './Quote';

function Header() {
	return (
		<div className='header'>
			<Suspense fallback={<BeatLoader size={10} margin={5} />}>
				<div>
					{/* Quote */}
					<Quote />
				</div>
			</Suspense>
		</div>
	);
}

export default Header;
