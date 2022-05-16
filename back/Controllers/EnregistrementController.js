const EnregistrementModel = require('../Models/EnregistrementModel')

const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')

module.exports = {

    CreateEnregistrement: function (req, res) {
        console.log("zzzzzzzz",req.params.id)
        UserModel.findById({_id:req.params.id},function(err, User){
           console.log("aaaa",User)
       
           if (err) {
               res.json({ msg: 'error', statut: 500, data: null })
           } else {
            EnregistrementModel.create({echéance:req.body.echéance,
                date_début:req.body.date_début,date_fin:req.body.date_fin,Enseignant:User
                       }, 
                           function (err,Enregistrement) {
                           if (err) {
                               console.log(err)
                               res.json({msg : 'error', statut: 500, data: null})
                           }
                           else{
                               console.log(req.params.id)
                               console.log(Enregistrement)
                               User.Enregistrements.push(Enregistrement);
       
                               User.save();
                               console.log(User.Enregistrements[0].date)
                               res.json({ msg: 'Enseignant', statut: 200, data:User.Enregistrements[0]})
       
                       
           }
       })
        
           }
           }
           
           )
       },
deleteEnregistrementById: function (req, res) {
    console.log(req.body)
    EnregistrementModel.deleteOne({ _id: req.params.id }, req.body, function (err, Enregistrement) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: Enregistrement })
        }
    })
},


}