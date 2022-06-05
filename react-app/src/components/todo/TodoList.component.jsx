import React from 'react';
import { useSelector } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';
import TodoItem from './TodoItem.component';


const TodoList = () => {
    const loading = useSelector(state => state.todo.loading);
    const todoObjects = useSelector(state => state.todo.items);
    const todoComponents = Object.values(todoObjects).map((todo, i)=> <TodoItem key={i} todo={todo}/>);

    return (
        <ul>
            <SpinnerDotted enabled={loading} size={50} thickness={100} speed={100} color="#3a454b" />
            {todoComponents}
        </ul>
    );
}

export default TodoList;