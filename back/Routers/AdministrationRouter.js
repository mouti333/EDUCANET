const AdministrationController = require('../Controllers/AdministrationController')
const route = require('express').Router()
const upload= require('../middeleware/upload')


route.put('/addAdministration',upload.single('photo'),AdministrationController.CreateAdministration)
route.delete('/DelAdministration/:id',AdministrationController.deleteOneAdministration)
route.post('/authAdministration',AdministrationController.authenticate)   
route.post('/refreshToken',AdministrationController.refreshtokenn)
route.post('/logout',AdministrationController.logout)

route.get('/getAll',AdministrationController.getAllAdministration)
route.put('/updateOne/:id',AdministrationController.updateAdministrationById)
module.exports=route;