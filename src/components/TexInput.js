import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import textState from '../Atoms/textState';
import charCountState from '../Atoms/charCountState';

function TexInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = e => {
		setText(e.target.value);
	};

	return (
		<div>
			<h2>{text}</h2>
			<input
				type='text'
				value={text}
				onChange={onChange}
				placeholder='testing states'
			/>
			<br />
		</div>
	);
}

export default TexInput;
