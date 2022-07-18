const express = require('express')
const path = require('path')
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
app.use('/api/users', require('./routes/userRoutes'))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
    })
}else{
    app.get('/', (req, res) => {
        res.send('Please Set to production')
    })
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port} 🚀 🚀 `)
})

