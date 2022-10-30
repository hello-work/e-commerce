const express = require('express')
const routes = express.Router()

const {getCarts, getCart, addCart, updateCart, deleteCart} = require("../controllers/cart");


routes.get('/cart', getCarts)
routes.post('/cart', addCart)
routes.get('/cart/:id', getCart)
routes.put('/cart/:id', updateCart)
routes.delete('/cart/:id', deleteCart)

module.exports = routes
