const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActivitesSchema = new Schema({
    DateDeCreation: {
        type: Date,
        required: true
    },
    
    URLActivite: {
        type: String,
        required: true 
    },
    nom: {
        type: String,
        required: true 
    },
    Files: [{
        type:String,
        required:false
    }],
    idGroupe:{
        type:String,
        required:true
    },
    idMatiere:{
        type:String,
        required:true
    },
    Enseignant: {
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        statut: {
            type: String,
            required: true
        },

    },
    Groupe:{
        NomDeGroupe: {
            type: String,
            required: false
        },
        Abbreviation: {
            type: String,
            required: false
        },
      
  
},
ReponseActivite:[{
    type:String,
    required:false
}],
    })


module.exports = mongoose.model('Activites', ActivitesSchema)