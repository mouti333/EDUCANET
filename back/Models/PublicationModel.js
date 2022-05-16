const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PublicationSchema = new Schema({
 
    DateDeCreation: {
        type: String,
        required: true
    },
    Contenu: {
        type: String,
        required: true 
    },
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
        }},
        Files: [{
            type:String,
            required:false
        }],

})


module.exports = mongoose.model('Publication', PublicationSchema)