const SuperAdminController = require('../Controllers/SuperAdminController')
const route = require('express').Router()

const upload= require('../middeleware/upload')


route.post('/addSuperAdmin',upload.single('photo'),SuperAdminController.CreateSuperAdmin)
route.post('/authSuperAdmin',SuperAdminController.authenticate)   
route.post('/refreshToken',SuperAdminController.refreshtokenn)
route.post('/logout',SuperAdminController.logout)
module.exports=route;