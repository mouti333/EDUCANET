const ReponseActivitesController =require('../Controllers/ReponseActivitesController')
const route = require('express').Router()
const upload = require('../middeleware/uploadFiles')

route.put('/addReponseActivites/:idUser/:idGroupe/:idMatiere/:idActivites', upload.single('Files'), ReponseActivitesController.CreateReponseActivites)
route.get('/getAll/:idGroupe/:idMatiere/:idActivites', ReponseActivitesController.getAllReponseActivites)
// route.get('/getOne/:id', ReponseActivitesController.getOneActivites)
// route.delete('/deleteOne/:id', ReponseActivitesController.deleteActivitesById)
// route.put('/updateByID/:id', ReponseActivitesController.updateActivitesById)


module.exports = route