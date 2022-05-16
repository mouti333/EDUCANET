const TestController =require('../Controllers/TestController')

const route = require('express').Router()



route.put('/addTest/:id',TestController.CreateTest)
route.get('/getAll', TestController.getAllTest)
route.get('/getOne/:id', TestController.getOneTest)
route.delete('/deleteOne/:id', TestController.deleteTestById)
route.put('/updateByID/:id', TestController.updateTestById)
module.exports=route;