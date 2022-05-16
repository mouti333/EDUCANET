const UserController = require('../Controllers/UserController')
const route = require('express').Router()

const upload= require('../middeleware/upload')


route.post('/addUser',upload.single('photo'),UserController.CreateUser)
route.delete('/deleteOne/:id',UserController.deleteUserById)
route.get('/getAll',UserController.getAllUsers)
route.get('/getOne/:id',UserController.getOneUser)
route.put('/updateOne/:id',UserController.updateUserById)
route.post('/authuser',UserController.authenticate)   
route.post('/refreshToken',UserController.refreshtokenn)
route.post('/logout',UserController.logout)
route.post('/ForgetPassword',UserController.forgetpassword)
route.post('/ResetPassword',UserController.resetpassword)
// route.get('/pass',UserController.getPassword)
module.exports=route;