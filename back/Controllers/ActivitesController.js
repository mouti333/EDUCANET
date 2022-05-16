const ActivitesModel = require('../models/ActivitesModel')
const UserModel = require('../Models/UserModel')
const MatiereModel = require('../Models/MatiereModel')

const GroupeModel= require('../Models/GroupeModel')
                                                                    
const Database = require('../ConfigDataBase/Database')

const mongoose = require('mongoose')
module.exports = {

    CreateActivites: function (req, res) {
        console.log("zzzzzzzz",req.params.id)
        UserModel.findById({_id:req.params.id},function(err, User){
           console.log("aaaa",User)
       
           if (err) {
               res.json({ msg: 'errormmmmmmmmmmmm', statut: 500, data: null })
           } else {
            console.log(User.__t);
            if (User.__t == "Enseignant" ) {
               GroupeModel.findById({_id:req.params.idGroupe},                               
                function (err, Groupe){
                    if(err){
                        res.json({ msg: 'erroraaaaaaaaaaa', statut: 500, data: null }) 
                    }
                    else {
                        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                        console.log(Groupe);
                        MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
                            if (err) {
                                res.json({ msg: 'errorssssss', statut: 500, data: null })
                            } else {
                                ActivitesModel.create({nom:req.body.nom,
                                    DateDeCreation: Date.now(),
                                         URLActivite: req.body.URLActivite,
                                    Files:req.file.filename,idGroupe:req.params.idGroupe,idMatiere:req.params.idMatiere,Groupe:Groupe,
                                    Enseignant: User,ReponseActivite: req.body.ReponseActivite,
                                },
                                    function (err, Activites) {
                                        if (err) {
                                            console.log(err)
                                            res.json({ msg: 'errorzzzzzzzzzzzzzzz', statut: 500, data: null })
                                        }
                                        else {
                                            console.log(req.params.idUser)
                                            console.log(Activites)
                                            // Matiere.idActivites.push(Activites);
    
                                            //    Matiere.save();
                              
                                                   
                                            res.json({ msg: 'Enseignant', statut: 200, data:Activites })
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
       
    // CreateActivites: function (req, res) {
    //     console.log("zzzzzzzz", req.params.id)
    //     UserModel.findById({ _id: req.params.id }, function (err, User) {
    //         console.log("aaaa", User)

    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
                
    //             ActivitesModel.create({
    //                 DateDeCreation: req.body.DateDeCreation,
    //                 Contenu: req.body.Contenu, URLActivite: req.body.URLActivite,
    //                 Files:req.file.filename,idGroupe:req.params.idGroupe,
    //                 Enseignant: User
    //             },
    //                 function (err, Activites) {
    //                     if (err) {
    //                         console.log(err)
    //                         res.json({ msg: 'error', statut: 500, data: null })
    //                     }
    //                     else {
    //                         console.log(req.params.id)
    //                         console.log(Activites)
    //                         User.Activites.push(Activites);

    //                         User.save();
    //                         console.log(User.Activites[0].date)
    //                         res.json({ msg: 'Enseignant', statut: 200, data: User.Activites[0] })


    //                     }
    //                 })

    //         }
    //     }

    //     )
    // },
    
    getAllActivites300: function (req, res) {
        ActivitesModel.find({},function (err, Activites) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'liste des Activites', statut: 200, data: Activites })
            }
        })
    },
    getAllActivites : function (req, res) {
     
        ActivitesModel.find({},function (err, Activites) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        console.log('aaaaaa',Activites)
                        let resultat=Activites.filter((x => x.idGroupe===req.params.idGroupe)&&(
                        y => y.idMatiere===req.params.idMatiere));
                        console.log(resultat);
                        res.json({ msg: 'mat', statut: 200, data:resultat  })
        
                    }
                    
                })
              
            
        },
    getOneActivites: function (req, res) {
        ActivitesModel.findById({ _id: req.params.id }, function (err, Activites) {
            console.log("aaaa", Activites)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Activites', statut: 200, data: Activites })
            }
        })
    },
    deleteActivitesById: function (req, res) {
        console.log(req.body)
        ActivitesModel.deleteOne({ _id: req.params.id }, req.body, function (err, Activites) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'deleted', statut: 200, data: Activites })
            }
        })
    },
    updateActivitesById: function (req, res) {
        ActivitesModel.updateOne({ _id: req.params.id }, {
            nom:req.body.nom,
            URLActivite: req.body.URLActivite,
            Files:req.file.filename,
            }, function (err, Activites) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: ' Activites', statut: 200, data: Activites })
            }
        })
    }
}