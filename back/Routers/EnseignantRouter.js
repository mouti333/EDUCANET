const EnseignantController =require('../Controllers/EnseignantController')

const ReponseController = require('../Controllers/ReponseController')

const MatiereController = require('../Controllers/MatiereController')

const route = require('express').Router()
const upload= require('../middeleware/upload')


route.put('/addEnseignant/:idAD',upload.single("photo"),EnseignantController.CreateEnseignant)
route.put('/affecterEnseignantMatiere/:idMatiere/:idEnseignant/:idGroupe',EnseignantController.affecterEnseignantMatiere)

route.delete('/deleteOne/:id',EnseignantController.deleteEnseignantById)
route.get('/getAll/:idAD',EnseignantController.getAllEnseignants)
route.get('/getOne/:id',EnseignantController.getOneEnseignant)
route.put('/updateOne/:id',EnseignantController.updateEnseignantById)
route.post('/authEnseignant',EnseignantController.authenticate)
route.post('/refreshToken',EnseignantController.refreshtokenn)
route.post('/logout',EnseignantController.logout)

route.get('/getAllMatieres',MatiereController.getAllMatieres)
route.get('/getOneMatiere/:id',MatiereController.getOneMatiere)

route.get('/getAllReponse',ReponseController.getAllReponse)
route.get('/getOneReponse/:id', ReponseController.getOneReponse)

route.get('/getAllEnseignantsParGroupe/:idGroupe',EnseignantController.getAllEnseignantsParGroupe)

module.exports=route;
