const RoleController = require('../Controllers/RoleController') //appel du Controller dans le router (ce qui est entre parenthese est le chemin )
const route = require('express').Router() //does the routage (router fonction does the routage cal+led it route as const)

route.post('/addrole',RoleController.CreateRole)
module.exports=route