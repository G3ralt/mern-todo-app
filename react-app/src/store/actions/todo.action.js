import { arrayToObject } from "../../itilities";
import { todoService } from "../../services";
import { todoConstants as C } from "../constants/";

const getTodos = () => {

    return async dispatch => {

        dispatch(request());

        try {
            const { data: todosArray } = await todoService.getTodosFromStorage();
            const todos = arrayToObject(todosArray, 'id');
            dispatch(success(todos))
        } catch (error) {
            dispatch(failure());
        }

    };

    function request() { return { type: C.GET_TODOS_REQUEST } };

    function success(todos) { return { type: C.GET_TODOS_SUCCESS, payload: todos } };

    function failure() { return { type: C.GET_TODOS_FAIL } };
};

const updateTodo = (todo, change) => {

    return async dispatch => {

        dispatch(request(todo));

        try {

            const { data: updatedTodo } = await todoService.updateTodoInStorage(todo.id, change);
            dispatch(success(updatedTodo));
            dispatch(clearEditingTodo());

        } catch (error) {
            dispatch(failure(todo));
        }

    };

    function request(todo) { return { type: C.UPDATE_TODO_REQUEST, payload: todo } };

    function success(todo) { return { type: C.UPDATE_TODO_SUCCESS, payload: todo } };

    function failure(todo) { return { type: C.UPDATE_TODO_FAIL, payload: todo } };

};

const deleteTodo = (todo) => {

    return async dispatch => {

        dispatch(request(todo));

        try {

            const { data: deletedTodo } = await todoService.deleteTodoInStorage(todo);
            dispatch(success(deletedTodo));
            dispatch(clearEditingTodo());

        } catch (error) {
            dispatch(failure(todo));
        }
    };


    function request(todo) { return { type: C.DELETE_TODO_REQUEST, payload: todo } };

    function success(todo) { return { type: C.DELETE_TODO_SUCCESS, payload: todo } };

    function failure(todo) { return { type: C.DELETE_TODO_FAIL, payload: todo } };
};

const createTodo = (text) => {

    return async dispatch => {

        dispatch(request());

        try {

            const { data: createdTodo } = await todoService.createTodoInStorage(text);
            dispatch(success(createdTodo));

        } catch (error) {
            dispatch(failure());
        }
    };


    function request() { return { type: C.CREATE_TODO_REQUEST } };

    function success(todo) { return { type: C.CREATE_TODO_SUCCESS, payload: todo } };

    function failure() { return { type: C.CREATE_TODO_FAIL } };
};

const editTodo = todo => {
    return {
        type: C.EDIT_TODO,
        payload: todo
    };
};

const clearEditingTodo = todo => {
    return {
        type: C.EDIT_TODO_CLEAR,
        payload: todo
    };
};

export const todoActions = {
    getTodos,
    updateTodo,
    deleteTodo,
    createTodo,
    editTodo,
    clearEditingTodo,
};