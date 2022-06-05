import axios from "axios";

const apiUrl = 'http://localhost:8080/api/todo';

const getTodosFromStorage = () => {
    return axios.get(apiUrl);
};

const updateTodoInStorage = (id, change) => {
    return axios.patch(`${apiUrl}/${id}`, change);
};

const deleteTodoInStorage = (todo) => {
    return axios.delete(`${apiUrl}/${todo.id}`);
};

const createTodoInStorage = (text) => {
    return axios.post(apiUrl, { text });
};

export const todoService = {
    getTodosFromStorage,
    updateTodoInStorage,
    deleteTodoInStorage,
    createTodoInStorage,
};