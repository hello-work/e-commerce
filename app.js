const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "config", ".env") });
const express = require('express')
const app = express()

app.use(express.json());

const connectDB = require("./configs/db");

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const sectionsRoutes = require('./routes/sections')
// here is the routes for the application
app.use('/app', userRoutes)
app.use('/app', productRoutes)
app.use('/app', sectionsRoutes)

const port = 4500

app.listen(port, ()=>{
    console.log(`App stared successfully on ${port}`);
    connectDB()
})
