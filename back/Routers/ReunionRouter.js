const ReunionController = require('../Controllers/ReunionController')
const route = require('express').Router()


route.post('/addReunion/:idGroupe/:idMatiere/:idUser', ReunionController.CreateReunion)
route.get('/getOne/:idGroupe/:idMatiere/:idReunion', ReunionController.getOneReunion)
route.get('/getAll/:idGroupe/:idMatiere', ReunionController.getAllReunion)
route.post('/addEcran/:idUser/:idReunion', ReunionController.EcranPartagee)
route.post('/addPresence/:idUser/:idReunion', ReunionController.Presence)
route.post('/addEnregistrement/:idUser/:idReunion', ReunionController.CreateEnregistrement)
route.get('/getAllListes/:idReunion',ReunionController.getAllListes)
route.put('/updateOne/:idUser/:idReunion',ReunionController.updateReunionById)
route.put('/updateReponse/:idUser/:idReunion',ReunionController.updateReponse)
route.put('/updateQusetion/:idUser/:idReunion',ReunionController.updateQusetion)
route.put('/updateEntree/:idUser/:idReunion',ReunionController.UpdateEntree)
route.put('/updateSortie/:idUser/:idReunion',ReunionController.updateSortie)
route.put('/updateListe/:idUser/:idReunion',ReunionController.updateListe)
route.put('/updateQuestionEns/:idUser/:idReunion',ReunionController.updateQuestionEns)
// route.delete('/deleteEtuFromListe/:idReunion', ReunionController.deleteEtuFromListe)

module.exports = route;
