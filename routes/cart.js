const express = require('express')
const routes = express.Router()

routes.get('/cart', ()=>{})
routes.post('/cart', ()=>{})
routes.get('/cart/:id', ()=>{})
routes.put('/cart/:id', ()=>{})
routes.delete('/cart/:id', ()=>{})

module.exports = routes
