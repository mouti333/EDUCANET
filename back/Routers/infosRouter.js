const Controllerinfos = require('../Controllers/Controllerinfos')
const route = require('express').Router()




route.post('/crateinfo/:idGRP/:idUser/:idmat',Controllerinfos.Createinfos)
route.get('/getOneinfo/:idUser',Controllerinfos.getOneInfo)

module.exports=route;