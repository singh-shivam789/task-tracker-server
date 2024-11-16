import express from 'express';
import db from '../db/db_config.js';
const homeRouter = express.Router();

homeRouter.get('/', async (req, res) => {
    let data = await db.find({}).toArray();
    data.forEach(obj => {
        obj.id = obj._id.toString()
        delete obj._id
    });
    return res.json({
        code: 200,
        message: "successful",
        data: data
    });
});

export default homeRouter;