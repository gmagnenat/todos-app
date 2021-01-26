import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItemCreator from './components/TodoItemCreator';

function App() {
	// grab data from local storage

	// update todo in local storage

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
