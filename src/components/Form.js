import React, { useEffect } from 'react';

import { v4 as uuidV4 } from 'uuid';
import './Form.css';

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
	// Update a todo
	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map(todo =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo('');
	};

	const onInputChange = e => {
		setInput(e.target.value);
	};

	// Update the todos list when the form is submited
	const onFormSubmit = e => {
		e.preventDefault();
		if (!editTodo) {
			setTodos([
				{
					id: uuidV4(),
					title: input,
					completed: false,
				},
				...todos,
			]);
			// Reset the input once submitted
			setInput('');
		} else {
			updateTodo(input, editTodo.id, editTodo.completed);
		}
	};

	// update the input field when an edit button is clicked
	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput('');
		}
	}, [setInput, editTodo]);

	return (
		<div className='form'>
			<form onSubmit={onFormSubmit}>
				<input
					type='text'
					placeholder='Add a todo'
					className='form__userInput'
					value={input}
					required
					onChange={onInputChange}
				/>
				<button type='submit' className='form__button'>
					{editTodo ? 'Edit the task' : 'Add a task'}
				</button>
			</form>
		</div>
	);
}

export default Form;
