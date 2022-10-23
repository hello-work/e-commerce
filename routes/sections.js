const express = require('express')
const routes = express.Router()

routes.post('/sections', ()=>{})
routes.get('/sections', ()=>{})
routes.get('/sections/:id', ()=>{})
routes.put('/sections/:id', ()=>{})
routes.delete('/sections/:id', ()=>{})

module.exports = routes
