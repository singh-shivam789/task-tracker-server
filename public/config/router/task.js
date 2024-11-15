import express from 'express';
import file from '../../data/file.js';
const taskRouter = express.Router();

taskRouter.post('/', (req, res) => {
    try {
        let reqData = req.body.data;
        reqData.id = file.globalId;
        file.globalId++;
        file.data.push(reqData);
        return res.send({
            code: 200,
            message: "successfully added!",
            data: {
                id: reqData.id
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

taskRouter.delete('/:id', (req, res) => {
    try {
        const id = req.params.id;
        file.data = file.data.filter((item) => item.id != id);
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

taskRouter.put('/:id', (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body.data;
        file.data.forEach((task) => {
            if (task.id == id) {
                task.task = newData
            }
        })
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