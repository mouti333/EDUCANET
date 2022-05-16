const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PublicationAdministratifSchema = new Schema({
    DateDeCreation: {
        type: Date,
    },
    Contenu: {
        type: String,
        required: true
    },
    // Files: [{
    //     type:String,
    //     required:false
    // }],
    photo: {
        type: String,
        required: false
    },
    idAdministration: {
        type: String,
        required: true
    },
    // Administration: {
    //     nom: {
    //         type: String,
    //         required: true
    //     },
    //     prenom: {
    //         type: String,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         required: true
    //     }
    // }
})

module.exports = mongoose.model('PublicationAdministratif', PublicationAdministratifSchema)
