const express = require('express')
const dotenv = require("dotenv").config()
const colors =require('colors')
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errormiddleware')
const {connectDb} = require('./config/db')
const app = express()

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port} 🚀 🚀 `)
})

