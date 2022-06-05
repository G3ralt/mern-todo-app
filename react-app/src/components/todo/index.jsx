import React from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/actions';
import TodoCounter from './TodoCounter.component';
import TodoForm from './TodoForm.component';
import TodoList from './TodoList.component';

const TodoContainer = () => {
    const dispatch = useDispatch();
    dispatch(todoActions.getTodos());

    return (
        <section>
            <h1>Things to do:</h1>
            <TodoList />
            <TodoCounter />
            <TodoForm />
        </section>
    )
}

export default TodoContainer;