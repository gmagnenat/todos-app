import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './TodosList.css';

function TodoList({ todos, setTodos, setEditTodo }) {
	const handleComplete = todo => {
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleEdit = ({ id }) => {
		const findTodo = todos.find(todo => todo.id === id);
		setEditTodo(findTodo);
	};

	const handleDelete = ({ id }) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div className='todoList'>
			{todos.map(todo => (
				<li className='todoList__item' key={todo.id}>
					<input
						readonly
						type='text'
						value={todo.title}
						className={`todo__listInput ${
							todo.completed ? 'complete' : ''
						}`}
						onChange={e => e.preventDefault()}
					/>
					<div className='todoList__icons'>
						<CheckCircleIcon
							className='todoList__icon todoList__check'
							onClick={() => handleComplete(todo)}
						/>
						<EditIcon
							className='todoList__icon todoList__edit'
							onClick={() => handleEdit(todo)}
						/>
						<DeleteForeverIcon
							className='todoList__icon todoList__delete'
							onClick={() => handleDelete(todo)}
						/>
					</div>
				</li>
			))}
		</div>
	);
}

export default TodoList;
