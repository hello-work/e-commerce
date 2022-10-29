const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "config", ".env") });
const express = require('express')
const app = express()

app.use(express.json());

const connectDB = require("./configs/db");

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const sectionsRoutes = require('./routes/sections')
const cartRoutes = require('./routes/cart')

// here is the routes for the application
app.use('/app', userRoutes)
app.use('/app', productRoutes)
app.use('/app', sectionsRoutes)

const port = 4500

// add the error handling middleware
app.use((err,req,res,next)=>{
    return res.status(500).send({ errors: [{ message: err.message }] });
})

app.listen(port, ()=>{
    console.log(`App stared successfully on ${port}`);
    connectDB()
})
