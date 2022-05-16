const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupeSchema = new Schema({
    NomDeGroupe: {
        type: String,
        required: true
    },
    Abbreviation: {
        type: String,
        required: true
    },
    Administration: {
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
        }
    },
    Matiere:[{
        nomMatiere:{
            type:String,
            required:false
    },
    nombre_d_heure:{
            type:String,
            required:false
    },
    nombre_d_heure_enseignée:{
            type:String,
            required:false
    },
    idEnseignant:{
        type:String,
        required:false
    }
    }],
    idAdministration: {
        type: String,
        required: false
},
Administration:
        {
        nom:{
                type:String,
                required:false
            },
        prenom:{
                type:String,
                required:false
            },
},
    idEnseignant:{
    type:String,
    required:false  
},
})

mongoose.models={}
module.exports = mongoose.model('Groupe', GroupeSchema)