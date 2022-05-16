const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ReponseSchema = new Schema({
    DateDeReponse: {
        type: String,
        required: true
    },
 Contenu: {
        type: String,
        required: true
    },
    Etudiant: {
        matricule: {
            type: String,
            required: true,
            unique: false,

        },
        specialité: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false,
            unique: false,
            validate:
                function ValidateEmail(mail) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                        return (true)
                        console.log('You have entered a valid email address!!')
                    }
                    console.log("You have entered an invalid email address!")
                    return (false)
                }
        },
 
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },

        }
 
})


module.exports = mongoose.model('Reponse', ReponseSchema)