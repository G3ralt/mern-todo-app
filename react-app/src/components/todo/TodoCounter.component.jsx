import React from 'react';
import { useSelector } from 'react-redux';

const TodoCounter = () => {
    const todoObjects = useSelector(state => state.todo.items);
    const completedTodosCount = Object.values(todoObjects).filter(({ completed }) => completed).length;

    return (
        <h1>Done: {completedTodosCount}</h1>
    );
};

export default TodoCounter;