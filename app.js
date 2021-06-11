const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

app
    .route("/")
    .get((req,res) => res.status(200).json({status: "success"}))

app
    .route("/:id")
    .get((req,res) => res.status(200).send(`${req.params.id}`))

app.listen(3000, () => {console.log("started on port 3000")})