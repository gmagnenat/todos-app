import React from 'react';
import { useRecoilValue } from 'recoil';
import charCountState from '../Atoms/charCountState';

function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return (
		<div>
			<h2>Character count: {count} </h2>
		</div>
	);
}

export default CharacterCount;
