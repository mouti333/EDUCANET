const EnregistrementController = require('../Controllers/EnregistrementController')
const route = require('express').Router()



route.put('/addEnregistrement/:id',EnregistrementController.CreateEnregistrement)
route.delete('/deleteOne/:id',EnregistrementController.deleteEnregistrementById)
module.exports=route;