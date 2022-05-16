// const MatiereModel = require('../Models/MatiereModel')
// const GroupeModel = require('../models/GroupeModel')
// const AdministrationModel = require('../Models/AdministrationModel')
// const UserModel = require('../Models/UserModel')
// const Database = require('../ConfigDataBase/Database')
// const mongoose = require ('mongoose')
// module.exports = {
// CreateMatiere: function (req, res) {
//         console.log("zzzzzzzz",req.params.idAD)
//         UserModel.findById({_id:req.params.idAD},function(err, User){
//            console.log("aaaa",User)
       
//            if (err) {
//                res.json({ msg: 'error', statut: 500, data: null })
//            } else {
//             console.log(User.__t);
//             if (User.__t == "Administration") {
//                GroupeModel.findById({_id:req.params.idGroupe},
//                 function (err, Groupe){
//                     if(err){
//                         res.json({ msg: 'error', statut: 500, data: null }) 
//                     }
//                     else {
//                         console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//                         console.log(Groupe);
                       
//                         MatiereModel.create({nomMatiere: req.body.nomMatiere, nombre_d_heure_enseignée: req.body.nombre_d_heure_enseignée,
//                             nombre_d_heure: req.body.nombre_d_heure, Administration:User,Groupe:Groupe ,idGroupe:req.params.idGroupe,idEnseignant:req.params.idEnseignant}, 
//                                        function (err, M) {
//                                        if (err) {
//                                            console.log(err)
//                                            res.json({msg : 'error', statut: 500, data: null})
//                                        }
//                                        else{
//                                            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
//                                            console.log(Groupe);
//                                         Groupe.Matiere.push(M);

//                                         Groupe.save();
//                                            res.json({ msg: 'Matiere', statut: 200, data:M})
                      
//                        }
//                    })
//                     }
//                 }
//                )
//             }
         
//                else {
//                 res.json({ msg: 'pas access', statut: 500, data: null })
//            }
//            }
//         }
//            )
//        },
// deleteMatiereById: function (req, res) {
//     console.log(req.body)
//     MatiereModel.deleteOne({ _id: req.params.id }, req.body, function (err, Matiere) {
//         if (err) {
//             res.json({ msg: 'error', statut: 500, data: null })
//         } else {
//             res.json({ msg: 'deleted', statut: 200, data: Matiere })
//         }
//     })
// },

// getAllMatieres: function (req, res) {
//     UserModel.findById({ _id: req.params.idUser },
//         function (err, User) {
//             if (err) {
//                 res.json({ msg: 'error', statut: 500, data: null })
//             }


//             else {
//                 if (User.__t == "Administration") {
//                   {
//                     GroupeModel.findById({_id: req.params.idGroupe}, 
//                         function (err,Grp){
//                             if (err) {
//                                 res.json({ msg: 'errorrr', statut: 500, data: null })

//                         }
//                         else {
//                             for (i = 0; i < Grp.Matiere.length; i++) {
//                                 console.log("xxxxxxxxxxxxxxxxxx"+Grp.Matiere[i]._id);
//                                 MatiereModel.findById({_id:Grp.Matiere[i]._id}, function (err,Mati) {
//                                     if (err) {
//                                         res.json({ msg: 'errorrr', statut: 500, data: null })
//                                     } else {
                                      
                                         
//                                             res.json({ msg: 'pas', statut: 500, data:Mati })
    
                                         
//                                     }
//                                 })
                       
//                         }
//                         }
//                     }
//                         )
                
//                 }
//                 // else {
//                 //     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
//                 //     console.log(User.__t);
//                     if (User.__t == "Enseignant") {
//                         console.log(req.params.idGroupe)
//                         GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
//                             if (err) {
//                                 console.log("eeeee")

//                                 res.json({ msg: 'error', statut: 500, data: null })
//                             } else {

//                                 console.log(Groupe.Matiere)
//                                 for (i = 0; i < Groupe.Matiere.length; i++) {
//                                         console.log("xxxxxxxxxxxxxxxxxx"+Groupe.Matiere[i]._id);
//                                         MatiereModel.findById({_id:Groupe.Matiere[i]._id}, function (err,Mat) {
//                                             if (err) {
//                                                 res.json({ msg: 'errorrr', statut: 500, data: null })
//                                             } else {
//                                                 if (req.params.idUser == Mat.idEnseignant)
//                                                 {
//                                                     console.log()
//                                                     res.json({ msg: 'liste des Matieres', statut: 200, data:Mat })

//                                                  }
//                                                  else{
//                                                     res.json({ msg: 'pas', statut: 500, data:null })

//                                                  }
//                                             }
//                                         })
                               
//                                 }
//                             }
                    
//                         }
//                         )
                    
//                     }
//                     if (User.__t =="Etudiant") {
//                         GroupeModel.findById({_id:User.idGroupe}, 
//                             function (err,Grp){
//                                 if (err) {
//                                     res.json({ msg: 'errorrr', statut: 500, data: null })

//                             }
//                             else {
//                                 for (i = 0; i < Grp.Matiere.length; i++) {
//                                     console.log("xxxxxxxxxxxxxxxxxx"+Grp.Matiere[i]._id);
//                                     MatiereModel.findById({_id:Grp.Matiere[i]._id}, function (err,Mati) {
//                                         if (err) {
//                                             res.json({ msg: 'errorrr', statut: 500, data: null })
//                                         } else {
                                          
                                             
//                                                 res.json({ msg: 'pas', statut: 500, data:Mati })
        
                                             
//                                         }
//                                     })
                           
//                             }
//                             }
//                         }
//                             )
                    
//                     }
//               //  }
//              } }
//         } )

// },
// getOneMatiere: function (req, res) {
//     UserModel.findById({ _id: req.params.idUser }, function (err, User) {
//         if (err) {
//             res.json({ msg: 'error', statut: 500, data: null })
//         }
//         else {
//             if (User.__t=="Administration"){
//                 MatiereModel.findById({ _id:req.params.idMatiere},
//                 function (err, Matieres) {
//                     if (err) {
//                         res.json({ msg: 'error', statut: 500, data: null })
//                     } else {
//                         res.json({ msg: 'liste des Matieres', statut: 200, data: Matieres })
//                     }
//                 })
//             }
// else{

//             console.log(User.__t);
//             if (User.__t == "Enseignant" || User.__t == "Etudiant") {
//                 MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
//                     if (err) {
//                         res.json({ msg: 'errorrr', statut: 500, data: null })

//                     }
//                     else {
//                         if (req.params.idUser == Matiere.idEnseignant || User.idGroupe == Matiere.idGroupe) {
//                             MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
//                                 if (err) {
//                                     res.json({ msg: 'erroooor', statut: 500, data: null })
//                                 }
//                                 else {
//                                     res.json({ msg: 'Matiere :', statut: 200, data: Matiere })

//                                 }
//                             })
//                         }
//                         else {
//                             res.json({ msg: 'pas acces', statut: 500, data: null })

//                         }

//                     }
//                 });
//             }
        

//             else {
//                 res.json({ msg: 'pas acces', statut: 500, data: null })

//             }

//         }
//         }
//         })

// },
// updateMatiereById: function (req, res) {
//     MatiereModel.updateOne({ _id: req.params.id }, req.body,
//          { new: true, runValidators: true },
//          function (err, Matiere) {
//         if (err) {
//             res.json({ msg: 'error', statut: 500, data: null })
//         } else {
//             res.json({ msg: 'Done', statut: 200, data: Matiere })
//         }
//     })
// },
// }



const MatiereModel = require('../Models/MatiereModel')
const GroupeModel = require('../models/GroupeModel')
const AdministrationModel = require('../Models/AdministrationModel')
const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')
module.exports = {
CreateMatiere: function (req, res) {
        console.log("zzzzzzzz",req.params.idAD)
        UserModel.findById({_id:req.params.idAD},function(err, User){
           console.log("aaaa",User)
       
           if (err) {
               res.json({ msg: 'error', statut: 500, data: null })
           } else {
            console.log(User.__t);
            if (User.__t == "Administration") {
               GroupeModel.findById({_id:req.params.idGroupe},
                function (err, Groupe){
                    if(err){  
                        res.json({ msg: 'error', statut: 500, data: null }) 
                    }
                    else {
                        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                        console.log(Groupe);
                        // nombre_d_heure_enseignée: req.body.nombre_d_heure_enseignée
                        MatiereModel.create({nomMatiere: req.body.nomMatiere,Activites:req.body.Activites,
                            nombre_d_heure: req.body.nombre_d_heure, Administration:User,Groupe:Groupe ,idGroupe:req.params.idGroupe,}, 
                                       function (err, M) {
                                       if (err) {
                                           console.log(err)
                                           res.json({msg : 'error', statut: 500, data: null})
                                       }
                                       else{   
                                           console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                                           console.log(Groupe);
                                        Groupe.Matiere.push(M);

                                        Groupe.save();
                                           res.json({ msg: 'Matiere', statut: 200, data:M})
                      
                       }
                   })
                    }
                }
               )
            }
         
               else {
                res.json({ msg: 'pas access', statut: 500, data: null })
           }
           }
        }
           )
       },
deleteMatiereById: function (req, res) {
    console.log(req.body)
    MatiereModel.deleteOne({ _id: req.params.id }, req.body, function (err, Matiere) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: Matiere })
        }
    })
},

getAllMatieres: function (req, res) {
    UserModel.findById({ _id: req.params.idUser },
        function (err, User) {
            if (err) {
                res.json({ msg: 'error', statut: 503, data: null })
            }


            else {
                if (User.__t == "Administration" || User.__t =="Etudiant") {
                    GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
                        if (err) {
                            console.log("eeeee")

                            res.json({ msg: 'error', statut: 502, data: null })
                        } else {

                            console.log(Groupe.Matiere)
                            var objMat;
                            // for (i = 0; i < Groupe.Matiere.length; i++) {
                            //         console.log("xxxxxxxxxxxxxxxxxx"+Groupe.Matiere[i]._id);
                            //         MatiereModel.findById({_id:Groupe.Matiere[i]._id}, function (err,Mat) {
                            //             if (err) {
                            //                 res.json({ msg: 'errorrr', statut: 500, data: null })
                            //             } else {
                            //                 var obj={  _id: Mat._id,
                            //                     nomMatiere: Mat.nomMatiere,
                            //                     nombre_d_heure_enseignée: Mat.nombre_d_heure_enseignée,
                            //                     nombre_d_heure: Mat.nombre_d_heure,
                            //                 };
                            //                 objMat.push(obj);
                            //                 console.log(obj);
                            //                 console.log(objMat);
                                          
                            //                     console.log("yyyyyyyyyyyyyyyyy"+Mat._id)

                                            
                            //             }
                            //         })
                           
                            // }
                            
                            res.json({ msg: 'liste des Matieres', statut: 200, data:Groupe.Matiere })

                        }
                
                    })
                    // MatiereModel.find({}).populate('Enseignant').exec(
                    //     function (err, Matieres) {
                    //         if (err) {
                    //             res.json({ msg: 'error', statut: 500, data: null })
                    //         } else {
                    //             res.json({ msg: 'liste des Matieres', statut: 200, data: Matieres })
                    //         }
                    //     })
                }
                else {
                    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                    console.log(User.__t);
                    if (User.__t == "Enseignant") {
                        console.log(req.params.idGroupe)
                        GroupeModel.findById({_id:req.params.idGroupe}).populate('Matiere').exec(function (err, Groupe) {
                            if (err) {
                                console.log("eeeee")
    
                                res.json({ msg: 'error', statut: 501, data: null })
                            } else {
    
                                console.log(Groupe)

                             let resultat=Groupe.Matiere.filter(x => x.idEnseignant===req.params.idUser);
                             console.log(resultat);
                             res.json({ msg: 'mat', statut: 500, data:resultat  })

                                /* Groupe.find({"Matiere":{idEnseignant:req.params.idUser}}).then(function(matieresE){
                                    console.log(matieresE);
                                    res.json({ msg: 'mat', statut: 500, data:matieresE  })

                                }) */
                           /*      GroupeModel.find({Matiere : {$regex:{idEnseignant:req.params.idUser}}}).then(function(matt){
                                    console.log(matt);
                                    res.json({ msg: 'mat', statut: 500, data:matt  })

                                }); */
                             //   console.log(test)
                               // res.json({ msg: 'error', statut: 500, data:test  })

                            }})
                      
                        // GroupeModel.find({_id:req.params.idGroupe}).select({ Matiere: {$elemMatch: {idEnseignant: req.params.idUser}}})
                        
                        // .then(function(Matt){
                        //      res.json({ msg: 'error', statut: 200, data: Matt })


                        // });
                        // GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
                        //     if (err) {
                        //         console.log("eeeee")

                        //         res.json({ msg: 'error', statut: 500, data: null })
                        //     } else {

                        //         console.log(Groupe.Matiere)
                        //         for (i = 0; i < Groupe.Matiere.length; i++) {
                        //                 console.log("xxxxxxxxxxxxxxxxxx"+Groupe.Matiere[i]._id);
                        //                 MatiereModel.findById({_id:Groupe.Matiere[i]._id}, function (err,Mat) {
                        //                     if (err) {
                        //                         res.json({ msg: 'errorrr', statut: 500, data: null })
                        //                     } else {
                        //                         if (req.params.idUser == Mat.idEnseignant)
                        //                         {
                        //                             console.log()
                        //                             res.json({ msg: 'liste des Matieres', statut: 200, data:Mat })

                        //                          }
                        //                          else{
                        //                             res.json({ msg: 'pas', statut: 500, data:null })

                        //                          }
                        //                     }
                        //                 })
                               
                        //         }
                        //     }
                    
                        // }
                     //   )
                    
                    }
                    // if (User.__t =="Etudiant") {
                    //     GroupeModel.findById({_id:User.idGroupe}, 
                    //         function (err,Grp){
                    //             if (err) {
                    //                 res.json({ msg: 'errorrr', statut: 500, data: null })

                    //         }
                    //         else {
                                
                    //             for (i = 0; i < Grp.Matiere.length; i++) {
                    //                 console.log("xxxxxxxxxxxxxxxxxx"+Grp.Matiere[i]._id);
                    //                 MatiereModel.findById({_id:Grp.Matiere[i]._id}, function (err,Mati) {
                    //                     if (err) {
                    //                         res.json({ msg: 'errorrr', statut: 500, data: null })
                    //                     } else {
                                          
                                             
                    //                             res.json({ msg: 'pas', statut: 500, data:Mati })
        
                                             
                    //                     }
                    //                 })
                           
                    //         }
                    //         }
                    //     }
                    //         )
                    
                    // }
                }
            }
        } )

},
getOneMatiere: function (req, res) {
    UserModel.findById({ _id: req.params.idUser }, function (err, User) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        }
        else {
            if (User.__t=="Administration"){
                MatiereModel.findById({ _id:req.params.idMatiere},
                function (err, Matieres) {
                    if (err) {
                        res.json({ msg: 'error', statut: 500, data: null })
                    } else {
                        res.json({ msg: 'liste des Matieres', statut: 200, data: Matieres })
                    }
                })
            }
else{

            console.log(User.__t);
            if (User.__t == "Enseignant" || User.__t == "Etudiant") {
                MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
                    if (err) {
                        res.json({ msg: 'errorrr', statut: 500, data: null })

                    }
                    else {
                        if (req.params.idUser == Matiere.idEnseignant || User.idGroupe == Matiere.idGroupe) {
                            MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
                                if (err) {
                                    res.json({ msg: 'erroooor', statut: 500, data: null })
                                }
                                else {
                                    res.json({ msg: 'Matiere :', statut: 200, data: Matiere })

                                }
                            })
                        }
                        else {
                            res.json({ msg: 'pas acces', statut: 500, data: null })

                        }

                    }
                });
            }
        

            else {
                res.json({ msg: 'pas acces', statut: 500, data: null })

            }

        }
        }
        })

},
updateMatiereById: function (req, res) {
    MatiereModel.updateOne({ _id: req.params.id }, req.body,
         { new: true, runValidators: true },
         function (err, Matiere) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: Matiere })
        }
    })
},
}






