const ReponseModel = require('../models/ReponseModel')
const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')

module.exports = {
    CreateReponse: function (req, res) {
        console.log("zzzzzzzz",req.params.id)
        UserModel.findById({_id:req.params.id},function(err, User){
           console.log("aaaa",User)
       
           if (err) {
               res.json({ msg: 'error', statut: 500, data: null })
           } else {
               
                   
            ReponseModel.create({DateDeReponse: req.body.DateDeReponse, Contenu: req.body.Contenu,Etudiant:User
                       }, 
                           function (err, Reponse) {
                           if (err) {
                               console.log(err)
                               res.json({msg : 'error', statut: 500, data: null})
                           }
                           else{
                               console.log(req.params.id)
                               console.log(Reponse)
                               User.Reponse.push(Reponse);
       
                               User.save();
                               console.log(User.Reponse[0].date)
                               res.json({ msg: 'Reponse', statut: 200, data:User.Reponse[0]})
       
                       
           }
       })
        
           }
           }
           
           )
       },

     getAllReponse: function (req, res) {
        ReponseModel.find({}).populate('Etudiant').exec(function (err, Reponse) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'liste des Reponse', statut: 200, data: Reponse })
            }
        })
    },

    getOneReponse: function (req, res) {
        ReponseModel.findById({ _id: req.params.id }, function (err, Reponse) {
            console.log("aaaa", Reponse)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Reponse', statut: 200, data: Reponse })
            }
        })
    },

}