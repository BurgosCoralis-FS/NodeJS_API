const express = require("express");
const todosRouter = express.Router();
const { todoService, todoServiceById } = require("../services/todoService")

todosRouter.get("/", (req, res, next) => {
    todoService().then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error: {
                message: error.message,
            }
        })
    })
});

todosRouter.get('/:id' , (req, res, next) => {
    todoServiceById(req.params.id).then(result => {
        res.status(200).json(result.data)
    }).catch(error => {
        res.status(500).json({
            error:{
            message: error.message
        }})
    })
})

module.exports = todosRouter;