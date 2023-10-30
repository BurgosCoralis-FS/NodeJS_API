const express = require("express");
const todosRouter = require("../router/todosRouter");

const app = express();

// http://localhost:3000
app.get("/", (req, res, next) => {
    res.status(200).json({message: "Service is up"});
});

//router middleware
app.use("/todos", todosRouter);

//to handle erros and bad url paths
// add middleware
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
})

module.exports = app;