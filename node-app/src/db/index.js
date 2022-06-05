import mongoose from "mongoose";
import Todo from './todo.model.js';

const db = async() => {
    try {

        console.log("Connecting to DB ...");

        const connectionString = process.env.HOME.includes('root') ? "mongodb://mongo-db:27017" : "mongodb://localhost/todo-app";
        await mongoose.connect(connectionString);

        console.log("Connection to DB successful!");

        if ((await Todo.find()).length == 0) {
            console.log('Creating test data ...');
            createTestData(5);
        }

    } catch (error) {
        console.log("Connection unsuccessful: ", error);
    }
};

const createTestData = (limit) => {
    for (let i = 1; i < limit; i++) {
        new Todo({
            text: `My ${i} todo.`
        }).save();
    }
};

export default db;