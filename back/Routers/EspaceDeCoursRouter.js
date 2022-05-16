const EspaceDeCoursController = require('../Controllers/EspaceDeCoursController')
const route = require('express').Router()

const upload = require('../middeleware/uploadFiles')


route.post('/addEspaceDeCours/:idGroupe/:idMatiere/:id',upload.single('Files'), EspaceDeCoursController.CreateespaceDeCours)
route.get('/getAll/:idGroupe/:idMatiere', EspaceDeCoursController.getAllespaceDeCours)
route.get('/getOne/:id', EspaceDeCoursController.getOneEspaceDeCours)
route.delete('/deleteOne/:id', EspaceDeCoursController.deleteEspaceDeCoursById)
route.put('/updateByID/:id',  EspaceDeCoursController.updateEspaceDeCoursById)

module.exports = route