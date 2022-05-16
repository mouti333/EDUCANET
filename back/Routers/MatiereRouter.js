const MatiereController = require('../Controllers/MatiereController')
const route = require('express').Router()



route.put('/addMatiere/:idAD/:idGroupe',MatiereController.CreateMatiere)
route.delete('/deleteOne/:id',MatiereController.deleteMatiereById)
route.get('/getAllgetAllMatieres/:idUser/:idGroupe',MatiereController.getAllMatieres)
route.get('/getOneMatiere/:idMatiere/:idUser',MatiereController.getOneMatiere)
route.put('/updateOne/:id',MatiereController.updateMatiereById)




module.exports=route;
      
