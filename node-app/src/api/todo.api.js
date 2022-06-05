import express from 'express';
import Todo from '../db/todo.model.js';

const TodoApi = express.Router();

TodoApi.get('/', async(req, res) => {
    try {

        const todos = await Todo.find();
        res.send(todos);

    } catch (error) {
        res.send(error);
    }
});

TodoApi.post('/', async(req, res) => {
    try {

        const todo = new Todo(req.body);
        const createdTodo = await todo.save();
        res.send(createdTodo);

    } catch (error) {

        res.send(error);

    }
});

TodoApi.delete('/:id', async(req, res) => {
    try {

        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.send(deletedTodo);

    } catch (error) {
        res.send(error);
    }
});

TodoApi.patch('/:id', async(req, res) => {
    try {

        const patchedTodo = await Todo.findOneAndUpdate({ _id: req.params.id },
            req.body, { new: true }
        );
        res.send(patchedTodo);

    } catch (error) {
        res.send(error);
    }
});

export default TodoApi;