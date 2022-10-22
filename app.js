const express = require('express')
const app = express()

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const sectionsRoutes = require('./routes/sections')
// here is the routes for the application
app.use('/app', userRoutes)
app.use('/app', productRoutes)
app.use('/app', sectionsRoutes)

const port = 4500

app.listen(4500, ()=>{
    console.log(`App stared successfully on ${port}`);
})
