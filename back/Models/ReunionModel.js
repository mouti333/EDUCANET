const mongoose = require('mongoose')
const { array } = require('../middeleware/upload')
const Schema = mongoose.Schema


const ReunionSchema = new Schema({
    enCours : {
        type : Boolean,
        required : false
    },
    dateDebutReunion: {
        type: Date,
        required: false
    },
    dateFinReunion : {
        type : Date,
        required : false
    },
    dureeReunion: {
        type: Number ,
        required: false
    },
    nomReunion : {
        type : String , 
        required : true
    },
    url : {
        type : String,
        required : false
    },
    liste_des_participants: [{
        Etudiant: {
                    nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        idEtudiant:{
        type:String,
        required:false
        },

        },
        NombreDeReponse: {
            type: Number,
            required: false
        },
        NombreDeQuestion: {
            type: Number,
            required: false
        },
        DateEntree: {
            type: Date,
            required: false
        },
        DureeEtudiant : {
            type : String,
            required : false
        },
        Concentration : {
            type : String,
            required : false  
        },
        Connecter : {
        type : Boolean,
        required : false
    }
    }],
    // EcranPartagee: [{
    //     NomDePersonnePartagee: {
    //         type: String,
    //         required: false
    //     },
    //     PrenomDePersonnePartagee: {
    //         type: String,
    //         required: false
    //     },
    //     Date: {
    //         type: Date,
    //         required: false
    //     }
    // }],
    idMatiere: {
         type: String,
            required: true
    },
    idGroupe: {
         type: String,
        required: true
    },
    idEnseignant: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('Reunion', ReunionSchema)