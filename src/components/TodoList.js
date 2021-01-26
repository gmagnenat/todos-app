import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState from '../Atoms/todoListState';
import TodoItem from './TodoItem';
import './TodoList.css';
import FlipMove from 'react-flip-move';

function TodoList() {
	const todoList = useRecoilValue(todoListState);
	return (
		<div className='todoList'>
			<FlipMove>
				{todoList.map((todoItem, index) => (
					<TodoItem
						className='todoList__item'
						key={index}
						item={todoItem}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default TodoList;
