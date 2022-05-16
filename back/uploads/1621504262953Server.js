const express = require('express') // initializing express as express const

const RouterUsers= require('./Routers/RouterUsers')
const RouterEvent= require('./Routers/RouterEvent')
const RouterFeedback= require('./Routers/RouterFeedback')
const RouterStudent= require('./Routers/StudentRouter')
const ClubRouter= require('./Routers/ClubRouter')
const AdministrationRouter= require('./Routers/AdministrationRouter')
const AdminRouter= require('./Routers/AdminRouter')
const RoleRouter = require('./Routers/RoleRouter')

const db= require('./config/database')
var app = express()
var cors = require('cors')
app.set('secretKey','formation')
var bodyParser = require('body-parser')

var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./config/swagger.json')
// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ limit:'50mb',extended: true }))
app.use(bodyParser.json({ limit:'50mb',extended: true }))

app.use('/users',RouterUsers)
app.use('/events',RouterEvent)
app.use('/feedback',RouterFeedback)
app.use('/Student',RouterStudent)
app.use('/Club',ClubRouter)
app.use('/administr',AdministrationRouter)
app.use('/Admin',AdminRouter)
app.use('/role',RoleRouter)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.get("/",function(req,res){
    res.send('done !')
})
app.get('/sendFile/:photo', function(req,res){
    console.log("photo",req.params.photo)
    res.sendFile(__dirname+'/upload/'+req.params.photo)
})
app.listen(5000,function(){
    console.log('running with 5000')
})