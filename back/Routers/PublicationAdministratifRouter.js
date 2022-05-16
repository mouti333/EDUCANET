const PublicationAdministratifController = require('../Controllers/PublicationAdministratifController')
const route = require('express').Router()

const upload = require('../middeleware/uploadFiles')
const uploade= require('../middeleware/upload')

route.put('/addPublicationAdministratif/:idAD',uploade.single('photo'),PublicationAdministratifController.CreatePublicationAdministratif)
route.get('/getAll/:idAD', PublicationAdministratifController.getAllPublicationAdministratif)
route.get('/getOne/:id', PublicationAdministratifController.getOnePublicationAdministratif)
route.delete('/deleteOne/:id', PublicationAdministratifController.deletePublicationAdministratifById)
route.put('/updateByID/:id', PublicationAdministratifController.updatePublicationAdministratifById)


module.exports = route