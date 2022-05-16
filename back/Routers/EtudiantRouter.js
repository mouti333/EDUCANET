const EtudiantController = require('../Controllers/EtudiantController')
const route = require('express').Router()
const upload= require('../middeleware/upload')
const ReunionController = require('../Controllers/ReunionController')

route.post('/addEtudiant/:idUser/:idGroupe',upload.single('photo'),EtudiantController.CreateEtudiant)
route.delete('/deleteOne/:id',EtudiantController.deleteEtudiantById)
route.get('/getAll/:idUser',EtudiantController.getAllEtudiants)
route.get('/getOne/:id',EtudiantController.getOneEtudiant)
route.put('/updateOne/:id',EtudiantController.updateEtudiantById)
route.post('/authEtudiant',EtudiantController.authenticate)
route.post('/refreshToken',EtudiantController.refreshtokenn)
route.post('/logout',EtudiantController.logout)
route.post('/AddEtuToList/:idUser/:idReunion', ReunionController.AddEtuToList)
route.get('/getAllMatieresEtudiant/:idEtudiant',EtudiantController.getMatieresEtudiant)
route.get('/getAllETD/:idUser/:idGroupe',EtudiantController.getAllEtudiants1000)

module.exports=route;         