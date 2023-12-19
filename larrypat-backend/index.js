require('dotenv')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const port = process.env.port
const mongo_uri = process.env.mongo_uri

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// connect to the db
mongoose.connect(mongo_uri)
    .then(() => {
        // listen
        app.listen(port, () => {
            console.log(`Connected to db and listening on port ${port}!!!`);
        })
    })
    .catch((error) => {
        console.log(error);
    })