const ActivitesController = require('../Controllers/ActivitesController')
const route = require('express').Router()
const upload = require('../middeleware/uploadFiles')

route.post('/addActivites/:id/:idGroupe/:idMatiere', upload.single('Files'), ActivitesController.CreateActivites)
route.get('/getAll/:idGroupe/:idMatiere', ActivitesController.getAllActivites)
route.get('/getOne/:id', ActivitesController.getOneActivites)
route.delete('/deleteOne/:id', ActivitesController.deleteActivitesById)
route.put('/updateByID/:id',upload.single('Files'), ActivitesController.updateActivitesById)


module.exports = route