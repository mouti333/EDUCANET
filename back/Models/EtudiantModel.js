const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken');
const EtudiantSchema = new Schema ({
matricule:{
    type:String,
    required:true,
    unique:true,

},
specialité:{
    type:String,
    required:true
},
prenom:{
    type:String,
    required:true
},

Reponse:[{ 
    DateDeReponse: {
    type: String,
    required: true
},
Contenu: {
    type: String,
    required: true
},
}],
Publication:[{
    DateDeCreation: {
        type: String,
        required: true
    },
    Contenu: {
        type: String,
        required: true 
    },
  
}],
idGroupe:{
    type:String,
    required:true
},
idAdministration: {
    type: String,
    required: false
},
photo: {
    type: String,
    required: true
},
idAdministration : {
    type:String,
    required:true
}
})

module.exports=User.discriminator('Etudiant',EtudiantSchema)