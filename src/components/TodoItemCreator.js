import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../Atoms/todoListState';
import { v4 as uuidv4 } from 'uuid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import './TodoItemCreator.css';

function TodoItemCreator() {
	const [inputValue, setInputValue] = useState('');
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = e => {
		e.preventDefault();
		if (inputValue) {
			setTodoList(oldTodoList => [
				{
					id: uuidv4(),
					text: inputValue,
					isComplete: false,
				},
				...oldTodoList,
			]);
			setInputValue('');
		}
	};

	const onChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	return (
		<div className='form'>
			<form className='form__form'>
				<input
					type='text'
					className='form__input'
					placeholder='What is there to do?'
					value={inputValue}
					onChange={onChange}
				/>
				<IconButton
					type='submit'
					className='form__button'
					onClick={addItem}
				>
					<AddCircleIcon
						size='large'
						style={{ fontSize: 40, color: 'white' }}
					/>
				</IconButton>
			</form>
		</div>
	);
}

export default TodoItemCreator;
