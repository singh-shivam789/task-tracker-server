import homeRouter from './public/config/router/home.js';
import taskRouter from './public/config/router/task.js';
import logger from './public/logger/Logger.js';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url'
import cors from 'cors';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.raw());
dotenv.config()
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});

app.use('/task', logger, taskRouter);
app.use('/', logger, homeRouter);
