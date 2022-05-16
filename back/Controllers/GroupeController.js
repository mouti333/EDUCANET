
const UserModel = require('../Models/UserModel')
const GroupeModel= require('../Models/GroupeModel')
const Database = require('../ConfigDataBase/Database')


module.exports = {
    CreateGroupe: function (req, res) {
        console.log("zzzzzzzz", req.params.id)
        //console.log(req.query.array[20]);
        var i=0;
        var groupMat= new Array();
        console.log(i)   
        UserModel.findById({ _id: req.params.idAD }, function (err, User) {
            console.log("aaaa", User)
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })}
                else {
                 if (User.__t == "Administration") {                                                                                    
                GroupeModel.create({    
                NomDeGroupe: req.body.NomDeGroupe,
                    Abbreviation: req.body.Abbreviation,idAdministration:req.params.idAD
                },

                // Administration: User ,idAdministration:req.params.idAD
                    function (err, Groupe) {
                        if (err) {
                            console.log(err)
                            res.json({ msg: 'error', statut: 500, data: null })
                        }
                        else {
                            
                            res.json({ msg: 'Groupe ajouté', statut: 200, data:Groupe})
                        }
                    })
            }
            else {
                res.json({ msg: 'pas access', statut: 500, data: null })
            }
                }
        }
        )
 } ,

    getAllGroupe100000: function (req, res) {
        GroupeModel.find({}).populate('order').exec(function (err, Groupe) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'liste des Groupe', statut: 200, data: Groupe })
            }
        })
    },
    getAllGroupe: function (req, res) {
        console.log('params',req.params);
        UserModel.findById({ _id: req.params.idUser },
            function (err, User) {
                if (err) {
                    res.json({ msg: 'error', statut: 500, data: null })
                }
                else {
                    console.log('user',User)
                    if (User.__t == "Administration") {
                        GroupeModel.find({}).populate('order').exec(
                            function (err, Groupes) {
                                if (err) {
                                    res.json({ msg: 'error', statut: 501, data: null })
                                } else {
                                    res.json({ msg: 'liste des Groupes', statut: 200, data: Groupes })
                                }
                            })
                    }
                  else{  if (User.__t == "Enseignant") {
  GroupeModel.find({Matiere : {$elemMatch:{idEnseignant:req.params.idUser}}}).then(function(matt){
    console.log('test',req.params)

                        console.log(matt);
                        res.json({ msg: 'mat', statut: 500, data:matt  })

                    });
                        } else {

                      //   console.log(test)
                           // res.json({ msg: 'error', statut: 500, data:test  })

                        }
                    }
                //     else {
                //         console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                //         console.log(User.__t);
                //         if (User.__t == "Enseignant") {
                //             console.log(req.params.idGroupe)
                //             GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
                //                 if (err) {
                //                     console.log("eeeee")
    
                //                     res.json({ msg: 'error', statut: 502, data: null })
                //                     console.log("nnnnnnnnnnnnnnnnnnnnnnn")
                //                 } else {
                //                     console.log(Groupe.Groupe)
                //                     for (i = 0; i < Groupe.Groupe.length; i++) {
                //                             console.log("xxxxxxxxxxxxxxxxxx"+Groupe.Groupe[i]._id);
                //                             GroupeModel.findById({_id:Groupe.Groupe[i]._id}, function (err,grp) {
                //                                 if (err) {
                //                                     res.json({ msg: 'errorrr', statut: 503, data: null })
                //                                 } else {
                //                                     if (req.params.idUser == grp.idEnseignant)
                //                                     {
                //                                         console.log()
                //                                         res.json({ msg: 'liste des Groupes', statut: 200, data:grp })
    
                //                                      }
                //                                      else{
                //                                         res.json({ msg: 'pas acces', statut: 504, data:null })
    
                //                                      }
                //                                 }
                //                             })
                                   
                //                     }
                //                 }
                        
                //             }
                //             )
                        
                //         }
                //     }
                // }
            } })
    
    },
    getOneGroupe: function (req, res) {
    EtudiantModel.find({Groupe : {$elemMatch:{idGroupe:req.params.idGroupe}}}).then(function(grp){
        console.log('test',req.params)
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        }
                         
    
                        else {
    
                                console.log(grp);
                                res.json({ msg: 'mat', statut: 500, data:grp  })
                            };
                        }    )  },
                        
    // getOneGroupe: function (req, res) {
    // //     GroupeModel.findById({ _id: req.params.id }, function (err, Groupe) {
    // //         console.log("aaaa", Groupe)

    // //         if (err) {
    // //             res.json({ msg: 'error', statut: 500, data: null })
    // //         } else {
    // //             res.json({ msg: 'Groupe', statut: 200, data: Groupe })
    // //         }
    // //     })
    // // },
    getGroupeEtudiant : function (req, res) {
     
        EtudiantModel.find({},function (err, Etudiant) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        console.log('aaaaaa',Etudiant)
                        let resultat=Etudiant.filter((x => x.idGroupe===req.params.idGroupe));
                        console.log(resultat);
                        res.json({ msg: 'vrai', statut: 200, data:resultat  })
        
                    }
                    
                })
              
            
        },
    deleteGroupeById: function (req, res) {
        console.log(req.body)
        GroupeModel.deleteOne({ _id: req.params.id }, req.body, function (err, Groupe) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'deleted', statut: 200, data: Groupe })
            }
        })
    },
    updateGroupeById: function (req, res) {
        GroupeModel.updateOne({ _id: req.params.id }, req.body, function (err, Groupe) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Groupe', statut: 200, data: Groupe })
            }
        })
    },
    getAllGroupe2: function (req, res) {
        UserModel.findById({ _id: req.params.idUser },
            function (err, User) {
                if (err) {
                    res.json({ msg: 'error', statut: 500, data: null })
                }
                else {
                    if (User.__t == "Administration") {
                        GroupeModel.find({idAdministration:req.params.idUser}).populate('order').exec(
                            function (err, Groupes) {
                                if (err) {
                                    res.json({ msg: 'error', statut: 501, data: null })
                                } else {
                                    res.json({ msg: 'liste des Groupes', statut: 200, data: Groupes })
                                }
                            })
                    }
                  else{  if (User.__t == "Enseignant") {
                    console.log(req.params.idGroupe)
                    GroupeModel.find({Matiere : {$elemMatch:{idEnseignant:req.params.idUser}}}).then(function(matt){
                        console.log(matt);
                        res.json({ msg: 'mat', statut: 500, data:matt  })

                    });
                        } else {

                            console.log(Groupe.Matiere)
                            ;
                         //   console.log(test)
                           // res.json({ msg: 'error', statut: 500, data:test  })

                        }
                    }
                //     else {
                //         console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                //         console.log(User.__t);
                //         if (User.__t == "Enseignant") {
                //             console.log(req.params.idGroupe)
                //             GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
                //                 if (err) {
                //                     console.log("eeeee")
    
                //                     res.json({ msg: 'error', statut: 502, data: null })
                //                     console.log("nnnnnnnnnnnnnnnnnnnnnnn")
                //                 } else {
                //                     console.log(Groupe.Groupe)
                //                     for (i = 0; i < Groupe.Groupe.length; i++) {
                //                             console.log("xxxxxxxxxxxxxxxxxx"+Groupe.Groupe[i]._id);
                //                             GroupeModel.findById({_id:Groupe.Groupe[i]._id}, function (err,grp) {
                //                                 if (err) {
                //                                     res.json({ msg: 'errorrr', statut: 503, data: null })
                //                                 } else {
                //                                     if (req.params.idUser == grp.idEnseignant)
                //                                     {
                //                                         console.log()
                //                                         res.json({ msg: 'liste des Groupes', statut: 200, data:grp })
    
                //                                      }
                //                                      else{
                //                                         res.json({ msg: 'pas acces', statut: 504, data:null })
    
                //                                      }
                //                                 }
                //                             })
                                   
                //                     }
                //                 }
                        
                //             }
                //             )
                        
                //         }
                //     }
                // }
            } })
    
    }
}