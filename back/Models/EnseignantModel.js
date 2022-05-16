const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken');
const EnseignantSchema = new Schema ({
statut:{
        type:String,
        required:true
},
prenom:{
    type:String,
    required:true
},

Reunions:[{
        date:{
            type:String,
            required:false
        },
        duree:{
            type:String,
            required:false
        },
        liste_des_participants:{
            type:String,
            required:false
}}],
Enregistrements:[{
        date_début:{
            type:String,
            required:false
        },
        date_fin:{
            type:String,
            required:false
        },
        echéance:{
            type:String,
            required:false
        },
}],
EspaceDeCours:[{
    Titre: {
        type: String,
        required: false
    },
  TypeDeCours: {
        type: String,
        required: false
    },
    Contenu: {
        type: String,
        required: false
    },
    DateDeDepotDeCours: {
        type: String,
        required: false
    },
}],
Publication:[{
    DateDeCreation: {
        type: String,
        required: false
    },
    Contenu: {
        type: String,
        required: false 
    },
  
}],
Activites:
[{
DateDeCreation:{
    type: String,
    required: false
},

URLActivite: {
    type: String,
    required: false 
},
nom: {
    type: String,
    required: true 
},   
 Files: [{
        type:String,
        required:false
    }],
 GroupeEns: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Groupe'
    }],
}],
Test:[{
    nomtest:{
        type:String,
        required:false
    },
  dureetest:{
        type:String,
        required:false
    },
  contenutest:{
        type:String,
        required:false
    } ,
    datededepotdetest:{
        type:String,
        required:false
    } ,
}],
GroupeMatiere:[{
    idGroupe: {
        type: String,
        required: false
    },
  idMatiere: {
        type: String,
        required: false
    },
 
}],
photo:{
    type:String,
    required:false
},
idGroupe:{
    type:String,
    required:false
},
idAdministration: {
    type: String,
    required: true
},
})


module.exports=User.discriminator('Enseignant',EnseignantSchema)