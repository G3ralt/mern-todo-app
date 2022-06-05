import express from 'express';
import cors from 'cors';
import db from './src/db/index.js';
import TodoApi from './src/api/todo.api.js';

db();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", TodoApi);

const port = 8080;
app.listen(port, () => console.log(`Listening for requests on port ${port}`));