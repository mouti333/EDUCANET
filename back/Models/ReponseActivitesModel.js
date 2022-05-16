const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const ReponseActivitesSchema = new Schema ({
nom:{
        type:String,
        required:true
},

idGroupe:{
    type:String,
    required:true
},
idMatiere:{
    type:String,
    required:false  
},
idActivites:{
    type:String,
    required:false
},
Files: [{
    type:String,
    required:false
}],
idEtudiant: {
    type: String,
    required: false
},
Etudiant:
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
DateDeCreation: {
    type: Date,
    required: true
},

// idespaceDeCours: [{
     
// Titre: {
//         type: String,
//         required: true
//     },
//   TypeDeCours: {
//         type: String,
//         required: true
//     },
//     Contenu: {
//         type: String,
//         required: true
//     },
//     DateDeDepotDeCours: {
//         type: String,
//         required: true
//     },
// }],

idAdministration: {
        type: String,
        required: false
},
    

})


module.exports=mongoose.model('ReponseActivites',ReponseActivitesSchema)