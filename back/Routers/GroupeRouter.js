const GroupeController = require('../Controllers/GroupeController')
const route = require('express').Router()



route.put('/addGroupe/:idAD', GroupeController.CreateGroupe)
// route.get('/getAll/:idUser', GroupeController.getAllGroupe)
route.get('/getAll/:idUser', GroupeController.getAllGroupe2)
// route.get('/getAll', GroupeController.getAllGroupe100000)
route.get('/getOne/:id', GroupeController.getOneGroupe)
route.delete('/deleteOne/:id', GroupeController.deleteGroupeById)
route.put('/updateByID/:id', GroupeController.updateGroupeById)


module.exports = route