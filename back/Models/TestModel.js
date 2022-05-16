const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const TestSchema = new Schema ({
    nomtest:{
        type:String,
        required:true
    },
  dureetest:{
        type:String,
        required:true
    },
  contenutest:{
        type:String,
        required:true
    } ,
    datededepotdetest:{
        type:String,
        required:true
    } ,
    Enseignant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Enseignant'
      
    
    }

})


module.exports=mongoose.model('Test',TestSchema)