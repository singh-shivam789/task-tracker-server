import express from 'express';
import db from '../db/db_config.js';
import { ObjectId } from 'mongodb';
const taskRouter = express.Router();

taskRouter.post('/', async (req, res) => {
    try {
        let reqData = req.body.data;
        let dbRes = await db.insertOne(reqData);
        return res.send({
            code: 200,
            message: "successfully added!",
            data: {
                id: dbRes.insertedId.toString()
            }
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Something went wrong!",
            error: err
        })
    }

});

taskRouter.delete('/:id', async (req, res) => {
    try {
        await db.deleteOne({ _id: new ObjectId(req.params.id) });
        return res.json({
            code: 200,
            message: "successfully deleted!",
        })
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Something went wrong!",
            error: err
        })
    }

});

taskRouter.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body.data;
        await db.updateOne({ _id: new ObjectId(id) }, {
            $set: {
                task: newData
            }
        }, { upsert: false });
        return res.json({
            code: 200,
            message: "Successfully edited!"
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Something went wrong!",
            error: err
        })
    }

});
export default taskRouter;