import React, { forwardRef } from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '../Atoms/todoListState';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import './TodoItem.css';

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&checked': {
			color: green[600],
		},
		transform: 'scale(2)',
	},
	checked: {},
})(props => <Checkbox color='default' {...props} />);

const TodoItem = forwardRef((props, ref) => {
	const { item } = props;
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex(listItem => listItem === item);

	const editItemText = ({ target: { value } }) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	const replaceItemAtIndex = (arr, index, newValue) => {
		return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
	};

	const removeItemAtIndex = (arr, index) => {
		return [...arr.slice(0, index), ...arr.slice(index + 1)];
	};

	return (
		<div className='todoItem' ref={ref}>
			<div className='todoItem__task'>
				<input
					className={item.isComplete ? 'todoItem__completed' : ''}
					type='text'
					value={item.text}
					onChange={editItemText}
					disabled={item.isComplete ? true : false}
				/>
			</div>
			<div className='todoItem__controls'>
				<GreenCheckbox
					checked={item.isComplete}
					onChange={toggleItemCompletion}
					inputProps={{}}
				/>
				<IconButton
					color='secondary'
					size='medium'
					variant='contained'
					onClick={deleteItem}
				>
					<CancelIcon size='large' style={{ fontSize: 30 }} />
				</IconButton>
			</div>
		</div>
	);
});

export default TodoItem;
