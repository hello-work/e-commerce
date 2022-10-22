const express = require('express')
const routes = express.Router()

routes.post('/product', ()=>{})
routes.get('/products', ()=>{})
routes.get('/product/:id', ()=>{})
routes.put('/product/:id', ()=>{})
routes.delete('/product/:id', ()=>{})

module.exports = routes