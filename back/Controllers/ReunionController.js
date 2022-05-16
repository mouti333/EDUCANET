const ReunionModel = require('../Models/ReunionModel')
const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
//const ReunionModel = require('../Models/ReunionModel')
const MatiereModel = require('../Models/MatiereModel')
const EnregistrementModel = require('../Models/EnregistrementModel')
const mongoose = require('mongoose')
const { array } = require('../middeleware/upload')
module.exports = {

    CreateReunion: function (req, res) {
        console.log('reunionnnnnnnnnnnnnnnnnnnn');
        UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            if (err) {
                res.json({ msg: 'errorrrrrrrrrrr', statut: 500, data: null })
            } else {
                if (User.__t == "Enseignant") {
                            ReunionModel.create({
                                nomReunion : req.body.nomReunion,
                                dateDebutReunion: req.body.dateDebutReunion,
                                dateFinReunion: req.body.dateFinReunion,
                                dureeReunion: req.body.dureeReunion,
                                enCours : true ,
                                url : req.body.url ,
                                liste_des_participants: req.body.liste_des_participants,
                                idGroupe : req.params.idGroupe,
                                idMatiere : req.params.idMatiere,
                                idUser: req.params.idUser               
                            },
                                function (err, Reunion) {
                                    if (err) {
                                        console.log(err)
                                        res.json({ msg: 'error', statut: 502, data: Reunion })
                                    }
                                       else{
                                            res.json({ msg: 'Reunion ajouté', statut: 200, data: Reunion})
                                        }
                                })

                        }
                else {
                    res.json({ msg: 'pas access', statut: 503, data: null })
                }
            }


        })

    },
    getOneReunion: function (req, res) {

        ReunionModel.findById({ _id: req.params.idReunion }, function (err, Reunion) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                    MatiereModel.findById({ _id: req.params.idMatiere }, function (err, Matiere) {
                        if (err) {
                            res.json({ msg: 'errorrr', statut: 500, data: null })

                        }
                        else {
                                ReunionModel.findById({ _id: req.params.idReunion }, function (err, Reunion) {
                                    if (err) {
                                        res.json({ msg: 'erroooor', statut: 500, data: null })
                                    }
                                    else {
                                        res.json({ msg: 'Reunion :', statut: 200, data: Reunion })

                                    }
                                })

                        }
                    });

            }
        })

    },
    getAllReunion : function (req, res) {
     
        ReunionModel.find({}).populate('order').exec(function (err, Reunion) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        let resultat=Reunion.filter((x => x.idGroupe===req.params.idGroupe)&&(
                        y => y.idMatiere===req.params.idMatiere));
                        console.log(resultat);
                        res.json({ msg: 'mat', statut: 500, data:resultat  })
        
                    }
                    
                })
              
            
        },
    EcranPartagee: function (req, res) {
        console.log("zzzzzzzz", req.params.idUser)
        console.log("aaaaaaaa", req.params.idReunion)
        UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            console.log("aaaa", User)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                ReunionModel.findById({ _id: req.params.idReunion },
                    function (err, Reunion) {
                        if (err) {
                            console.log(err)
                            res.json({ msg: 'error', statut: 500, data: null })
                        }
                        else {
                            console.log(req.params.id)
                            console.log(Reunion)
                            ecran = {
                                NomDePersonnePartagee: User.nom,
                                PrenomDePersonnePartagee: User.prenom,
                                Date: Date.now()
                            }

                            console.log(ecran)
                            Reunion.EcranPartagee.push(ecran);

                            Reunion.save();

                            res.json({ msg: 'Etudiant', statut: 200, data: "xxx" })


                        }
                    }

                )
            }


        }
        )
    },
    Presence: function (req, res) {
        console.log("zzzzzzzz", req.params.idUser in liste_des_participants)
        console.log("aaaaaaaa", req.params.idReunion)
        UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            console.log("aaaa", User)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                ReunionModel.findById({ _id: req.params.idReunion },
                    function (err, Reunion) {
                        if (err) {
                            console.log(err)
                            res.json({ msg: 'error', statut: 500, data: null })
                        }
                        else {
                            console.log(req.params.id),
                                console.log(liste_des_participants.presence)
                            presence = {
                                NombreDeTentatives: req.body.NombreDeTentatives, NombreDeTentativesVerifies: req.body.NombreDeTentativesVerifies,
                                NombreDeTentativesNonRepondus: req.body.NombreDeTentativesNonRepondus, DateDeDebut: req.body.DateDeDebut, DateFin: req.body.DateFin
                            }

                            console.log(presence)
                            liste_des_participants.Presence.push(User);
                            res.json({ msg: 'Etudiant', statut: 200, data: "yyy" })


                        }
                    }

                )
            }


        }
        )
    },
    AddEtuToList: function (req, res) {
        console.log("zzzzzzzz", req.params.idUser)
        console.log("aaaaaaaa", req.params.idReunion)

        ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
         .then(function(reunion,err){
        console.log("fffffffffffffffffffffffffffffffffffffffffffffffff");
        console.log(reunion);
        if(reunion.liste_des_participants.length===0){

        UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            if (err) { 
           //     res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                console.log("aaaa", User)
                ReunionModel.findById({ _id: req.params.idReunion },
                    function (err, Reunion) {
                        if (err) {
                            console.log(err)
             //               res.json({ msg: 'error', statut: 500, data: null }) 
                        }
                        else {
                            console.log("eeeeeeeeeeeeeeeeeeeeeeee");
                            console.log(User);
                            var item = {
                                Etudiant:{
                                    idEtudiant:req.params.idUser,
                                    nom : User.nom,
                                    prenom:User.prenom
                                },
                                _id:req.params.idUser,
                                NombreDeReponse: 0,
                                NombreDeQuestion: 0,
                                DateEntree: Date.now(),
                                DureeEtudiant : 0,
                                QuestionEns : 0,
                                Concentration : 0,
                                Connecter : true
                            }
                            console.log(item)
                            Reunion.liste_des_participants.push(item);
                            Reunion.save();
                           res.json({ msg: 'Etudiant ajouter à la liste des participants', statut: 200, data: "Succès" });
                        }
                    }

                )
            }


        }
        )
                                }else{
                                      var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : Date.now(),
                    DureeEtudiant: reunion.liste_des_participants[0].DureeEtudiant,
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    Concentration: reunion.liste_des_participants[0].Concentration,
                    Connecter: true

                  }

                  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
                  console.log(obj);
                   ReunionModel.findById({ _id: req.params.idReunion }, function (err, r) {
            if (err) { 
           //     res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                r.liste_des_participants.pull(req.params.idUser);
                  r.liste_des_participants.push(obj); 
                  r.save();
            }});
                     

                                                }
                      

               
                });

                 //     res.json({ msg: 'res', statut: 200, data: "mati"})
                   
                    }
    ,
    CreateEnregistrement: function (req, res) {
        UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                console.log("xxxxxxxxxxxxxxxxxxxxxx");
                console.log(User.__t);
                if (User.__t == "Etudiant") {
                    ReunionModel.findById({ _id: req.params.idReunion }, function (err, Reunion) {
                        if (err) {
                            res.json({ msg: 'error', statut: 500, data: null })
                        } else {
                            EnregistrementModel.create({
                                date_début: req.body.date_début,
                                date_fin: req.body.date_fin,
                                echéance: req.body.echéance,
                            },
                                function (err, Enregistrement) {
                                    if (err) {
                                        console.log(err)
                                        res.json({ msg: 'error', statut: 500, data: null })
                                    }
                                    else {
                                        console.log(req.params.idReunion)
                                        console.log(Reunion)
                                        Reunion.idEnregistrements.push(Enregistrement);
                                        Reunion.save();
                                        res.json({ msg: 'Enregistrement', statut: 200, data: Reunion.idEnregistrements })


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


        })

    },
    getAllListes: function (req, res) {
        ReunionModel.findById({ _id: req.params.idReunion }, function (err, Reunion) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'Done', statut: 200, data: Reunion.liste_des_participants })   
            }
        });
    },
    updateReunionById: function (req, res) {
                UserModel.findById({ _id: req.params.idUser }, function (err, User) {
                    console.log(User.__t);
                    if(User.__t == "Enseignant") {
           ReunionModel.updateOne({ _id: req.params.idReunion }, req.body, { new: true, runValidators: true },
         function (err, reunion) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: reunion })
        }
    });
    
        }
        else {
                            ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                        if(Reunion.enCours==true){ 
                                 try{
    
                            ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
                            .then(function(reunion){
                            var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse  ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : reunion.liste_des_participants[0].DateEntree,
                    DureeEtudiant:reunion.liste_des_participants[0].DureeEtudiant+ (Date.now() - reunion.liste_des_participants[0].DateEntree)/3600000,
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    // Concentration: ((reunion.liste_des_participants[0].NombreDeReponse/reunion.liste_des_participants[0].NombreDeQuestion)*100).toFixed(2) + ' ' +'%' ,
                    Connecter: false
                  }

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });
                    res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                                        }                    }
                })
            
        }
        })
    },
  updateReponse: function (req, res) {
             UserModel.findById({ _id: req.params.idUser }, function (err, User) {
                if(User.__t == "Etudiant") { 
                ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                        console.log(Reunion)
                        try{
    
                        ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
                            .then(function(reunion){
                            var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse + 1,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : reunion.liste_des_participants[0].DateEntree,
                    DureeEtudiant: reunion.liste_des_participants[0].DureeEtudiant,
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    Concentration: reunion.liste_des_participants[0].Concentration,
                    Connecter: reunion.liste_des_participants[0].Connecter
                  }

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });

                      res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                    }
})
                }
                else {
                    res.json({ msg: 'pas acces', statut: 500, data: null })

                }
             })
},

  updateQusetion: function (req, res) {
        
    UserModel.findById({ _id: req.params.idUser }, function (err, User) {
        console.log(User)
        if(User.__t == "Etudiant") { 
        ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                        console.log(Reunion)
        try{
    
           ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
                            .then(function(reunion){
                                console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                                   console.log(reunion.liste_des_participants); 
                            var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion + 1,
                    DateEntree : reunion.liste_des_participants[0].DateEntree,
                    DureeEtudiant: reunion.liste_des_participants[0].DureeEtudiant,
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    Concentration: reunion.liste_des_participants[0].Concentration,
                    Connecter: reunion.liste_des_participants[0].Connecter

                  }
                  console.log(req.params.idEtudiant);
                  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                  console.log(reunion.liste_des_participants[0]);
                  console.log(obj);

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });

                      res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                    }
})
        }
        else {
            res.json({ msg: 'pas acces', statut: 500, data: null })
        }
    })
},

UpdateEntree : function(req,res) {
     UserModel.findById({ _id: req.params.idUser }, function (err, User) {
         console.log(User)
                if(User.__t == "Etudiant") { 
                ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                        console.log(Reunion)
                        try{
    
                            ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
                            .then(function(reunion){
                        var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : Date.now(),
                    DureeEtudiant: reunion.liste_des_participants[0].DureeEtudiant,
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    Concentration: reunion.liste_des_participants[0].Concentration,
                    Connecter: reunion.liste_des_participants[0].Connecter

                  }

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });

                      res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                    }
})
                }
                else {
                    res.json({ msg: 'pas acces', statut: 500, data: null })

                }
             }) 
},

updateSortie : function (req,res) {
    UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            if(User.__t == "Etudiant") { 
                ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                        if(Reunion.enCours==true){ 
                                 try{
    
                            ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {_id: req.params.idUser}}})
                            .then(function(reunion){
                            var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse  ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : reunion.liste_des_participants[0].DateEntree,
                    DureeEtudiant:reunion.liste_des_participants[0].DureeEtudiant+ ((now.getTime() - reunion.liste_des_participants[0].DateEntree.getTime())/60000).toFixed(2),
                    QuestionEns: reunion.liste_des_participants[0].QuestionEns,
                    Concentration: ((reunion.liste_des_participants[0].NombreDeReponse/reunion.liste_des_participants[0].NombreDeQuestion)*100).toFixed(2),
                    Connecter: false
                  }

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });

                      res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                                        }                    }
                })
            }
            
            else {
        ReunionModel.updateOne({ _id: req.params.idReunion }, req.body, { new: true, runValidators: true },
         function (err, reunion) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: reunion })
        }
    });
            }
    })
},

updateQuestionEns : function (req,res) {
    UserModel.findById({ _id: req.params.idUser }, function (err, User) {
            if(User.__t == "Etudiant") { 
                ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else { 
                                 try{
    
                        ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {idEtudiant: req.params.idEtudiant}}})
                            .then(function(reunion){
                            var obj={
                    _id:  reunion.liste_des_participants[0]._id,
                    Etudiant:{idEtudiant:reunion.liste_des_participants[0].Etudiant.idEtudiant,
                    nom:reunion.liste_des_participants[0].Etudiant.nom,
                    prenom:reunion.liste_des_participants[0].Etudiant.prenom},
                    NombreDeReponse:  reunion.liste_des_participants[0].NombreDeReponse  ,
                    NombreDeQuestion:  reunion.liste_des_participants[0].NombreDeQuestion ,
                    DateEntree : reunion.liste_des_participants[0].DateEntree,
                    DureeEtudiant: reunion.liste_des_participants[0].DureeEtudiant,
                    QuestionEns: req.body.QuestionEns,
                    Concentration: reunion.liste_des_participants[0].Concentration

                  }

                  Reunion.liste_des_participants.pull(reunion.liste_des_participants[0]._id);
                  Reunion.liste_des_participants.push(obj); 
                  Reunion.save();

                });

                      res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }
                    }
                })
            }
            
            else {
                res.json({ msg: 'pas acces', statut: 500, data: null })
            }
    })
},


deleteEtuFromListe: function(req,res) {
    ReunionModel.findById({ _id: req.params.idReunion }, function (err, Reunion) {
        if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
    
                ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {Etudiant: req.params.idEtudiant}}})
                .then(function(reunion){
                      ReunionModel.deleteOne({ _id: req.params.idReunion }, req.body, function (err, Reunion) {
                                    if (err) {
                                        res.json({ msg: 'error', statut: 500, data: null })
                                    } else {
                                        console.log("eeeeeeeeeeeeeeeeeeeeee");
                                        console.log(Reunion.liste_des_participants._id.indexOf(req.params.idReunion));
                                        const index = Reunion.liste_des_participants._id.indexOf(req.params.idReunion);
                                       Reunion.liste_des_participants._id.splice(index, 1)
                                        Reunion.save();
                                        res.json({ msg: 'deleted', statut: 200, data: Reunion })
                                    }
                                })
                })

 
            }
    })
},

updateListe : function(req,res) {
    UserModel.findById({ _id: req.params.idUser }, function (err, User) {
        if(User.__t == "Etudiant") {
            ReunionModel.findById({_id:req.params.idReunion}, function (err, Reunion) {
                if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
                         ReunionModel.findOne({_id:req.params.idReunion}).select({ liste_des_participants: {$elemMatch: {Etudiant: req.params.idEtudiant}}})
                            .then(function(reunion){
                            ReunionModel.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true },
                            function (err, Reunion) {
                        if (err) {
                            res.json({ msg: 'error', statut: 500, data: null })
                        } else {
                            res.json({ msg: 'Done', statut: 200, data: Reunion })
                     }
    })
                        })

                }
            })
        } 
    })
}
}