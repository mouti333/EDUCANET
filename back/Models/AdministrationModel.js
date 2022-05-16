const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken')
const AdministrationSchema = new Schema ({
  
    // Matiere:[{    
    //     nomMatiere:{
    //         type:String,
    //         required:true
    //     },
    //     nombre_d_heure:{
    //         type:String,
    //         required:true
    //     },
    //     nombre_d_heure_enseignée:{
    //         type:String,
    //         required:true
    //     },
    // }],
    // PublicationAdministratif: [{
    //     DateDeCreation: {
    //         type: String,
    //         required: false
    //     },
    //     Contenu: {
    //         type: String,
    //         required: false
    //     }
    // }],
    // Groupe: [{
    //     NomDeGroupe: {
    //         type: String,
    //         required: false
    //     },
    //     Abbreviation: {
    //         type: String,
    //         required: false
    //     },
  
    // }],
    role:{
        type:Schema.Types.String,
        ref:'role',
        required:false
    }

})

module.exports=User.discriminator('Administration',AdministrationSchema)
