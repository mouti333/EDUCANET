const ActivitesModel = require('../models/ActivitesModel')

const UserModel = require('../Models/UserModel')
const ReponseActivitesModel = require('../Models/ReponseActivitesModel')

                                                                    
const Database = require('../ConfigDataBase/Database')

const mongoose = require('mongoose')
module.exports = {

    CreateReponseActivites: function (req, res) {
        console.log("zzzzzzzz",req.params.idUser)
        UserModel.findById({_id:req.params.idUser},function(err, User){
           console.log("aaaa",User)
       
           if (err) {
               res.json({ msg: 'error', statut: 500, data: null })
           } else {
            console.log(User.__t);
            if (User.__t == "Etudiant") {
               ActivitesModel.findById({_id:req.params.idActivites},
                function (err, Activites){
                    if(err){  
                        res.json({ msg: 'error1', statut: 500, data: null }) 
                    }
                    else {
                        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                        console.log(Activites);
               
                   
                        ReponseActivitesModel.create({nom:req.body.nom, DateDeCreation: Date.now(),
                            Files:req.file.filename,
                          idActivites:req.params.idActivites,Activites:Activites,Etudiant:User,
                          idGroupe:req.params.idGroupe,idMatiere:req.params.idMatiere}, 
                                       function (err, aa) {
                                       if (err) {
                                           console.log(err)
                                           res.json({msg : 'error2', statut: 500, data: null})
                                       }
                                       else{   
                                           console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                                           console.log(Activites);
                                        Activites.ReponseActivite.push(aa);

                                        Activites.save();
                                           res.json({ msg: 'ReponseActivite', statut: 200, data:aa})
                      
                       }
                   })
                    }
                }
               )
            }
         
            else {
             res.json({ msg: 'pas access', statut: 500, data: null })
           }}
        }
           )
       },
       getAllReponseActivites : function (req, res) {
     
        ReponseActivitesModel.find({}).populate('order').exec(function (err, ReponseActivites) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        let resultat=ReponseActivites.filter((x => x.idGroupe===req.params.idGroupe)&&(
                        y => y.idMatiere===req.params.idMatiere)&&(
                            y => y.idActivites===req.params.idActivites));
                        console.log(resultat);
                        res.json({ msg: 'mat', statut: 500, data:resultat  })
        
                    }
                    
                })
              
            
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
    
    // getAllActivites300: function (req, res) {
    //     ActivitesModel.find({}).populate('order').exec(function (err, Activites) {
    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             res.json({ msg: 'liste des Activites', statut: 200, data: Activites })
    //         }
    //     })
    // },
    // getAllActivites : function (req, res) {
     
    //     ActivitesModel.find({}).populate('order').exec(function (err, Activites) {
    //                 if(err){
    //                     res.json({ msg: 'error', statut: 500, data: null })

    //                 }
    //                 else{
    //                     let resultat=Activites.filter((x => x.idGroupe===req.params.idGroupe)&&(
    //                     y => y.idMatiere===req.params.idMatiere));
    //                     console.log(resultat);
    //                     res.json({ msg: 'mat', statut: 500, data:resultat  })
        
    //                 }
                    
    //             })
              
            
    //     },
    // getOneActivites: function (req, res) {
    //     ActivitesModel.findById({ _id: req.params.id }, function (err, Activites) {
    //         console.log("aaaa", Activites)

    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             res.json({ msg: 'Activites', statut: 200, data: Activites })
    //         }
    //     })
    // },
    // deleteActivitesById: function (req, res) {
    //     console.log(req.body)
    //     ActivitesModel.deleteOne({ _id: req.params.id }, req.body, function (err, Activites) {
    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             res.json({ msg: 'deleted', statut: 200, data: Activites })
    //         }
    //     })
    // },
    // updateActivitesById: function (req, res) {
    //     ActivitesModel.updateOne({ _id: req.params.id }, req.body, function (err, Activites) {
    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             res.json({ msg: ' Activites', statut: 200, data: Activites })
    //         }
    //     })
    // }
}