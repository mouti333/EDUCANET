const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const MatiereSchema = new Schema ({
nomMatiere:{
        type:String,
        required:true
},
nombre_d_heure:{
        type:String,
        required:true
},
// nombre_d_heure_enseignée:{
//         type:String,
//         required:true
// },
idGroupe:{
    type:String,
    required:true
},
idEnseignant:{
    type:String,
    required:false  
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


idespaceDeCours: [{
     
Titre: {
        type: String,
        required: true
    },
  TypeDeCours: {
        type: String,
        required: true
    },
    Contenu: {
        type: String,
        required: true
    },
    DateDeDepotDeCours: {
        type: String,
        required: true
    },
}],
idActivites: [{
    DateDeCreation: {
        type: String,
        required: true
    },
  
    nom: {
        type: String,
        required: true 
    }, 
    URLActivite: {
        type: String,
        required: true 
    },
        // type: Schema.Types.ObjectId,
        // ref: "Activites",
        // required: false
}],

idAdministration: {
        type: String,
        required: false
},
    

})


module.exports=mongoose.model('Matiere',MatiereSchema)