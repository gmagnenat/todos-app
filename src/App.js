import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import TextInput from './components/TexInput';
import CharacterCount from './components/CharacterCount';

function App() {
	// grab data from local storage
	const initialState = JSON.parse(localStorage.getItem('todos')) || [];
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState(initialState);
	const [editTodo, setEditTodo] = useState(null);

	// update todo in local storage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className='app'>
			{/* Display the title and the quote */}
			<Header />

			{/* Display the input form */}
			<Form
				input={input}
				setInput={setInput}
				todos={todos}
				setTodos={setTodos}
				editTodo={editTodo}
				setEditTodo={setEditTodo}
			/>

			{/* Display the todos list */}
			<TodosList
				todos={todos}
				setTodos={setTodos}
				setEditTodo={setEditTodo}
			/>
		</div>
	);
}

export default App;
