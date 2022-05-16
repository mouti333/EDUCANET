const ReponseController = require('../Controllers/ReponseController')
const route = require('express').Router()



route.put('/addReponse/:id', ReponseController.CreateReponse)
route.get('/getAllReponse',ReponseController.getAllReponse)
route.get('/getOneReponse/:id', ReponseController.getOneReponse)


module.exports = route