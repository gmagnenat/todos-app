import { useRecoilValue } from 'recoil';
import './Quote.css';
import currentQuoteQuery from '../Atoms/quoteState';

function Quote() {
	const quote = useRecoilValue(currentQuoteQuery);
	return (
		<div className='quote'>
			<p className='quote__body'>
				{quote.text}
				<span>{quote.author ? quote.author : 'Unknown'} </span>
			</p>
		</div>
	);
}

export default Quote;
