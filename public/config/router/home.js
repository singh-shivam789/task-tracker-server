import express from 'express';
import file from '../data/file.js';
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    return res.json({
        code: 200,
        message: "successful",
        data: file.data
    });
});

export default homeRouter;