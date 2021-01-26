import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItemCreator from './components/TodoItemCreator';
import { useSetRecoilState } from 'recoil';
import todoListState from './Atoms/todoListState';

function App() {
	const setTodoList = useSetRecoilState(todoListState);
	// grab data from local storage
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('storedTodos'));
		console.log(storedTodos);
		// storedTodos && setTodoList([...storedTodos]);
		if (storedTodos) {
			setTodoList([...storedTodos]);
		}
	});

	return (
		<div className='app'>
			<div className='app__container'>
				<h1 className='app__title'>Todos App</h1>
				<Header />
				<TodoItemCreator />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
