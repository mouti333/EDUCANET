const Joi = require('joi');
const express = require ('express');

var app = express ();
var cors = require('cors')
const  bodyParser = require('body-parser');
const Database = require ('./ConfigDataBase/Database');

const ActivitesRouter =require('./routers/ActivitesRouter');

const GroupeRouter = require('./routers/GroupeRouter');
const PublicationAdministratifRouter = require('./routers/PublicationAdministratifRouter');
const ReponseRouter = require('./routers/ReponseRouter');

const PublicationRouter = require('./routers/PublicationRouter');
const EspaceDeCoursRouter = require('./routers/EspaceDeCoursRouter');

const TestRouter = require('./routers/TestRouter');
const UserRouter = require('./routers/UserRouter');
const EtudiantRouter = require('./routers/EtudiantRouter')
const EnseignantRouter = require('./routers/EnseignantRouter')
const AdministrationRouter = require('./routers/AdministrationRouter')
const ReunionRouter = require('./routers/ReunionRouter');
const EnregistrementRouter = require('./routers/EnregistrementRouter');
const MatiereRouter = require('./routers/MatiereRouter');
const RoleRouter = require('./Routers/RoleRouter')
const ReponseActivitesRouter = require('./Routers/ReponseActivitesRouter')


const path = require('path');
const multer = require('multer');
const upload = multer({dest:'images/'});
app.set(cors()) 

app.set('secretKey','formation')

app.set(cors())
app.set('secretKey', 'formation')
var app = express()
app.set(cors())

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
 

let stream = require( './ws/stream' );

app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );
app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: false 
}));
// parse application/jso

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.set('secretKey','ahmed_zwawi')


app.use('/Activites', ActivitesRouter)

app.use('/Groupe', GroupeRouter)
app.use('/PublicationAdministratif', PublicationAdministratifRouter)
app.use('/Reponse', ReponseRouter)

app.use('/Publication', PublicationRouter)
app.use('/EspaceDeCours', EspaceDeCoursRouter)

app.use('/User',UserRouter)
app.use('/Etudiant',EtudiantRouter)
app.use('/Enseignant',EnseignantRouter)
app.use('/Administration',AdministrationRouter)
app.use('/Reunion',ReunionRouter)
app.use('/Enregistrement',EnregistrementRouter)
app.use('/Matiere',MatiereRouter)
app.use('/Test',TestRouter)
app.use('/role',RoleRouter)
app.use('/ReponseActivites',ReponseActivitesRouter)


app.get('/getfile/:Files', function(req,res){
  res.sendFile(__dirname + '/uploads/' + req.params.Files)
})

server.listen(8000)


