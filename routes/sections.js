const express = require('express')
const routes = express.Router()
const {getSections, getSection, addSections, updateSection, deleteSection} = require("../controllers/sections");

routes.get('/sections', getSections)
routes.post('/sections', addSections)
routes.get('/sections/:id', getSection)
routes.put('/sections/:id', updateSection)
routes.delete('/sections/:id', deleteSection)

module.exports = routes
