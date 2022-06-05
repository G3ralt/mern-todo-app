import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/actions/todo.action';

const TodoForm = () => {

    const loading = useSelector(state => state.todo.loading);
    const editingTodo = useSelector(state => state.todo.editingItem);
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const textInputRef = useRef(null);

    useEffect(() => {
        if (editingTodo) {
            setTodoText(editingTodo.text);
            textInputRef.current.focus();
        } else {
            setTodoText('');
        }
    }, [editingTodo]);


    const handleTextInputChange = (e) => {
        setTodoText(e.target.value)
    };

    const onTodoFormSubmit = (e) => {
        e.preventDefault();
        if (editingTodo) {
            dispatch(todoActions.updateTodo(editingTodo, { text: todoText }));
        } else {
            dispatch(todoActions.createTodo(todoText));
        }

    };

    return (
        <form className='todo-form' onSubmit={onTodoFormSubmit}>
            <input
                type='text'
                className='todo-text-input'
                placeholder='What do you have to do?'
                value={todoText}
                name='Todo input text'
                onChange={handleTextInputChange}
                required
                autoFocus
                maxLength="256"
                ref={textInputRef}
            />
            <input type='submit' className='submit' value={`${editingTodo ? 'Edit' : 'Create'}`} disabled={loading} />
        </form>
    );
}

export default TodoForm;