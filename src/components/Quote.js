import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import './Quote.css';
import { currentQuoteQuery } from '../Atoms/quoteState';

// type.fit/api/quotes

function Quote() {
	// const quote = useRecoilValue(currentQuoteQuery);
	return (
		<div className='quote'>
			<h3 className='quote__text'>This is the quote</h3>
		</div>
	);
}

export default Quote;
