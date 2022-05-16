const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const EnregistrementSchema = new Schema ({
    date_début:{
        type:String,
        required:true
    },
    date_fin:{
        type:String,
        required:true
    },
    echéance:{
        type:String,
        required:true
    },
    Enseignant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Enseignant'
  
  }



})


module.exports=mongoose.model('Enregistrement',EnregistrementSchema)