const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const InfosSchema = new Schema ({
idGRP:{
    type:String,
     required:false
},
idUser:{
    type:String,
    required:false
},
idmat :{
    type:String,
    required:false
}
})


module.exports=mongoose.model('Infos',InfosSchema)