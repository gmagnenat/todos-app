import { atom, selector } from 'recoil';
import textState from './textState';

const charCountState = selector({
	key: 'charCountState',
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	},
});

export default charCountState;
