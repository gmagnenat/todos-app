import { atom, selector } from 'recoil';

const currentQuoteQuery = selector({
	key: 'currentQuote',
	get: async ({ get }) => {
		const response = await fetch('https://type.fit/api/quotes');
		const data = await response.json();

		const quote = data[Math.floor(Math.random() * Math.floor(data.length))];

		return quote;
	},
});
