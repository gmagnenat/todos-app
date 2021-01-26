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
			<FlipMove
				staggerDelayBy={150}
				enterAnimation={{
					from: {
						transform: 'rotateX(180deg)',
						opacity: 0.1,
					},
					to: {
						transform: '',
					},
				}}
				leaveAnimation={{
					from: {
						transform: '',
					},
					to: {
						transform: 'rotateX(-120deg)',
						opacity: 0.1,
					},
				}}
			>
				{todoList.map(todoItem => (
					<TodoItem
						className='todoList__item'
						key={todoItem.id}
						item={todoItem}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default TodoList;
