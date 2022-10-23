const express = require('express')
const routes = express.Router()

const {getProducts, updateProducts, deleteProducts, addProducts} = require("../controllers/products");


routes.post('/products', addProducts)
routes.get('/product/:id', getProducts)
routes.put('/product/:id', updateProducts)
routes.delete('/product/:id', deleteProducts)

module.exports = routes