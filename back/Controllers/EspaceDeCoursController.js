const EspaceDeCoursModel = require('../models/EspaceDeCoursModel')
const MatiereModel = require('../Models/MatiereModel')
const GroupeModel = require('../models/GroupeModel')

const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')
module.exports = {
    CreateespaceDeCours: function (req, res) {
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
                                EspaceDeCoursModel.create({
                                    
                    
                                    TypeDeCours: req.body.TypeDeCours,
                                        //   Contenu:req.body.Contenu,
                                          Titre:req.body.Titre,
                                          DateDeDepotDeCours:Date.now(),
                                          TypeDeCours:req.body.TypeDeCours,
                                          idGroupe:req.params.idGroupe,
                                          idMatiere:req.params.idMatiere,
                                          Groupe:Groupe,
                                          Files:req.file.filename,
                                    Enseignant: User
                                },
                                    function (err, EspaceDeCours) {
                                        if (err) {
                                            console.log(err)
                                            res.json({ msg: 'errorzzzzzzzzzzzzzzz', statut: 500, data: null })
                                        }
                                        else {
                                            console.log(req.params.id)
                                            console.log(EspaceDeCours)
                                            // Matiere.idespaceDeCours.push(EspaceDeCours);
    
                                            //    Matiere.save();
                              
                                                   
                                            res.json({ msg: 'Enseignant', statut: 200, data:EspaceDeCours })
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


    // CreateespaceDeCours: function (req, res) {
    //     console.log("zzzzzzzz",req.params.id)
    //     UserModel.findById({_id:req.params.id},function(err, User){
    //        console.log("aaaa",User)
       
    //        if (err) {
    //            res.json({ msg: 'errormmmmmmmmmmmm', statut: 500, data: null })
    //        } else {
    //         console.log(User.__t);
    //         if (User.__t == "Enseignant") {
    //            GroupeModel.findById({_id:req.params.idGroupe},                               
    //             function (err, Groupe){
    //                 if(err){
    //                     res.json({ msg: 'erroraaaaaaaaaaa', statut: 500, data: null }) 
    //                 }
    //                 else {
    //                     console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    //                     console.log(Groupe);
    //                     MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
    //                         if (err) {
    //                             res.json({ msg: 'errorssssss', statut: 500, data: null })
    //                         } else {
                                
    //                         EspaceDeCoursModel.create({
    //                              TypeDeCours: req.body.TypeDeCours,
    //                             Titre: req.body.Titre, Contenu: req.body.Contenu, DateDeDepotDeCours: req.body.DateDeDepotDeCours,
    //                              //  Files: req.file.filename,
    //                              idGroupe:req.params.idGroupe,idMatiere:req.params.idMatiere,Groupe:Groupe,
    //                                 Enseignant: User
    //                          },
    //                              function (err, espaceDeCours)
    //                      {
    //                                     if (err) {
    //                                         console.log(err)
    //                                         res.json({ msg: 'errorzzzzzzzzzzzzzzz', statut: 500, data: null })
    //                                     }
    //                                     else {
    //                                         console.log(req.params.id)
    //                                         console.log(espaceDeCours)
    //                                         Matiere.idespaceDeCours.push(espaceDeCours);
    
    //                                            Matiere.save();
                              
                                                   
    //                                         res.json({ msg: 'Enseignant', statut: 200, data:Matiere.idespaceDeCours })
    //                                     }
    //                                 })
    //                         }
    //                     }
    //                     )
       
    //                 }
    //             }
    //            )
    //         }
                                                             
    //            else {
    //             res.json({ msg: 'pas accessssssss', statut: 500, data: null })
    //        }
    //        }
    //     }
    //        )
    //    },
    // CreateespaceDeCours: function (req, res) {
    //     UserModel.findById({ _id: req.params.idUser }, function (err, User) {
    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             console.log(User.__t);
    //             if (User.__t == "Enseignant") {
                    


    //                 GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
    //                                     if (err) {
    //                                      console.log("eeeee")
            
    //                                     res.json({ msg: 'error', statut: 502, data: null })
    //                                      console.log("nnnnnnnnnnnnnnnnnnnnnnn")
    //                                  } else {
    //                 MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
    //                     if (err) {
    //                         res.json({ msg: 'error', statut: 500, data: null })
    //                     } else {

    //                         EspaceDeCoursModel.create({
    //                             TypeDeCours: req.body.TypeDeCours,
    //                             Titre: req.body.Titre, Contenu: req.body.Contenu, DateDeDepotDeCours: req.body.DateDeDepotDeCours,
    //                             //  Files: req.file.filename,
    //                         },
    //                             function (err, espaceDeCours) {
    //                                 if (err) {
    //                                     console.log(err)
    //                                     res.json({ msg: 'error', statut: 500, data: null })
    //                                 }
    //                                 else {
    //                                     console.log(req.params.id)
    //                                     console.log(espaceDeCours)
    //                                     Matiere.idespaceDeCours.push(espaceDeCours);

    //                                     Matiere.save();

    //                                     res.json({ msg: 'Enseignant', statut: 200, data: Matiere.idespaceDeCours })
    //                                 }
    //                             })
    //                     }
    //                 } 
    //                 )
    //             }

    //         })














    //             }
    //             else {
    //                 res.json({ msg: 'pas access', statut: 500, data: null })
    //             }
    //         }
    //     })  
    // },
    
       deleteEspaceDeCoursById: function (req, res) {
        console.log(req.body)
        EspaceDeCoursModel.deleteOne({ _id: req.params.id }, req.body, function (err, EspaceDeCours) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'deleted', statut: 200, data: EspaceDeCours })
            }
        })
    },
    getAllespaceDeCours : function (req, res) {
     
        EspaceDeCoursModel.find({}).populate('order').exec(function (err, EspaceDeCours) {
                    if(err){
                        res.json({ msg: 'error1111', statut: 500, data: null })
  }
                    else{
                        let resultat=EspaceDeCours.filter((x => x.idGroupe===req.params.idGroupe)&&(
                        y => y.idMatiere===req.params.idMatiere));
                        console.log(resultat);
                        res.json({ msg: 'Liste des EspaceDeCours ', statut: 500, data:resultat  })
        
                    }
                })
        },
    getAllgEspaceDeCours111111111100000000: function (req, res) {
        EspaceDeCoursModel.find({}).populate('order').exec( function (err, EspaceDeCours) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Liste des EspaceDeCours ', statut: 200, data: EspaceDeCours })
            }
        })
    },
    getOneEspaceDeCours: function (req, res) {
        EspaceDeCoursModel.findOne({ _id: req.params.id }, function (err, EspaceDeCours) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: ' EspaceDeCours ', statut: 200, data: EspaceDeCours })
            }
        })
    },

    updateEspaceDeCoursById: function (req, res) {
        EspaceDeCoursModel.updateOne({ _id: req.params.id }, req.body, function (err, EspaceDeCours) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: ' EspaceDeCours', statut: 200, data: EspaceDeCours })
            }
        })
    },
    // getAllespaceDeCours: function (req, res) {
    //     UserModel.findById({ _id: req.params.idUser }, function (err, User) {
    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {
    //             console.log(User.__t);
    //             if (User.__t == "Enseignant" || User.__t == "Etudiant") {
    //                 MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
    //                     if (err) {
    //                         res.json({ msg: 'error', statut: 500, data: null })

    //                     }
    //                     else {
    //                         if (req.params.idUser == Matiere.idEnseignant || User.idGroupe == Matiere.idGroupe) {
    //                             console.log(Matiere.idespaceDeCours);
    //                             for (i = 0; i < Matiere.idespaceDeCours.length; i++) {

    //                                 EspaceDeCoursModel.findById({ _id: Matiere.idespaceDeCours[i] }, function (err, espaceDeCours) {
    //                                     if (err) {
    //                                         res.json({ msg: 'error', statut: 500, data: null })
    //                                     }
    //                                     else {
    //                                         res.json({ msg: 'espaceDeCours :', statut: 200, data: espaceDeCours })

    //                                     }
    //                                 })
    //                             }
    //                         }
    //                         else {
    //                             res.json({ msg: 'pas acces', statut: 500, data: null })

    //                         }
    //                     }

    //                 })
    //             }
    //             else {
    //                 res.json({ msg: 'pas acces', statut: 500, data: null })

    //             }
    //         }
    //     });
    // },


}