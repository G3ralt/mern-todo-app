import React from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/actions/todo.action';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const updateTodoStatus = () => {
        dispatch(todoActions.updateTodo(todo, { completed: !todo.completed }));
    };

    const deleteTodo = () => {
        if (!todo.loading) {
            dispatch(todoActions.deleteTodo(todo));
        }
    };

    const editTodo = () => {
        if (!todo.loading) {
            dispatch(todoActions.editTodo(todo));
        }
    };

    return (
        <li className='todo-item'>

            <div className='checkbox'>
                <input type='checkbox' disabled={todo.loading} onChange={updateTodoStatus} checked={todo.completed} />
            </div>

            <p className={`text ${todo.completed && 'completed'}`}>{todo.text}</p>

            <div className='icons'>
                <TiEdit className='edit' onClick={editTodo} />
                <TiDelete className='delete' onClick={deleteTodo} />
            </div>

        </li>
    );
};

export default TodoItem;