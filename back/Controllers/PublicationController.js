const PublicationModel =require('../Models/PublicationModel')
const UserModel =require ('../Models/UserModel')
const GroupeModel =require ('../Models/GroupeModel')
const MatiereModel =require ('../Models/MatiereModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')
module.exports = {


   CreatePublication: function (req, res) {
        console.log("zzzzzzzz",req.params.id)
        UserModel.findById({_id:req.params.id},function(err, User){
           console.log("aaaa",User)      
           if (err) {
               res.json({ msg: 'errormmmmmmmmmmmm', statut: 500, data: null })
           } else {
            console.log(User.__t);
            if (User.__t == "Enseignant") {
               GroupeModel.findById({_id:req.params.idGroupe},                               
                function (err, Groupe){
                    if(err){
                        res.json({ msg: 'erroraaaaaaaaaaa', statut: 500, data: null }) 
                    }
                    else {
                        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                        console.log(Groupe);
                        MatiereModel.findById({ _id:req.params.idMatiere }, function (err, Matiere) {
                            if (err) {
                                res.json({ msg: 'errorssssss', statut: 500, data: null })
                            } else {
                                PublicationModel.create({
                                DateDeCreation:req.body.DateDeCreation,
                                Contenu:req.body.Contenu,
                                idGroupe:req.params.idGroupe,
                                idMatiere:req.params.idMatiere,
                                Groupe:Groupe,
                                Enseignant: User
                                },
                                    function (err, Publication) {
                                        if (err) {
                                            console.log(err)
                                            res.json({ msg: 'errorzzzzzzzzzzzzzzz', statut: 500, data: null })
                                        }
                                        else {
                                            console.log(req.params.id)
                                            console.log(Publication)
                                            Matiere.idPublication.push(Publication);
    
                                               Matiere.save();
                              
                                                   
                                            res.json({ msg: 'Enseignant', statut: 200, data:Publication })
                                        }
                                    })
                            }
                        }
                        )
       
                    }
                }
               )
            }
                                                             
               else {
                res.json({ msg: 'pas accessssssss', statut: 500, data: null })
           }
           }
        }
           )
       },
      getAllPublication : function (req, res) {
     
        PublicationModel.find({}).populate('order').exec(function (err, Publication) {
                    if(err){
                        res.json({ msg: 'error1111', statut: 500, data: null })
  }
                    else{
                        let resultat=Publication.filter((x => x.idGroupe===req.params.idGroupe)&&(
                        y => y.idMatiere===req.params.idMatiere));
                        console.log(resultat);
                        res.json({ msg: 'Liste des Publication ', statut: 500, data:resultat  })
        
                    }
                })
        },

    getOnePublication: function (req, res) {
        PublicationModel.findById({ _id: req.params.id }, function (err, Publication) {
            console.log("aaaa", Publication)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Publication', statut: 200, data: Publication })
            }
        })
    },
    deletePublicationById: function (req, res) {
        console.log(req.body)
        PublicationModel.deleteOne({ _id: req.params.id }, req.body, function (err, Publication) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'deleted', statut: 200, data: Publication })
            }
        })
    },
    updatePublicationById: function (req, res) {
        PublicationModel.updateOne({ _id: req.params.id }, req.body, function (err, Publication) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: ' Publication', statut: 200, data: Publication })
            }
        })
    }
}