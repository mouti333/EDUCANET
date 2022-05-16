const PublicationController = require('../Controllers/PublicationController')
const route = require('express').Router()

const upload = require('../middeleware/uploadFiles')


route.post('/addPublication/:idGroupe/:idMatiere/:id',upload.single('Files'),  PublicationController.CreatePublication)
route.get('/getAll/:idGroupe/:idMatiere', PublicationController.getAllPublication)
route.get('/getOne/:id', PublicationController.getOnePublication)
route.delete('/deleteOne/:id', PublicationController.deletePublicationById)
route.put('/updateByID/:id', PublicationController.updatePublicationById)


module.exports = route