const EnseignantModel = require('../Models/EnseignantModel')
 const UserModel = require('../models/UserModel')
var async= require('async')

const Database = require ('../ConfigDataBase/Database');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const randtoken = require('rand-token') 
const mongoose = require('mongoose'); 
const MatiereModel = require('../Models/MatiereModel');
const GroupeModel = mongoose.model("Groupe"); 
var fileId = mongoose.Types.ObjectId();
var generator = require('generate-password');

var password = generator.generate({
	length: 12,
	numbers: true,
    symbols : true
});

var refreshTokens = {}

module.exports = {
 
// CreateEnseignant:async function (req, res) {
 

//  console.log(req.body)
//  EnseignantModel.create({   nom:req.body.nom,
//                             prenom:req.body.prenom,
//                             email:req.body.email
//                             ,mdp:req.body.mdp,
//                             statut:req.body.statut,
//                             photo:req.file.filename    

// }, function (err,Enseignant) {
//     if (err) {
//         console.log(err)
//         res.json({msg : 'error', statut: 500, data: null})
//     }
//     else{
//          res.json({ msg: 'Enseignant ajouté', statut: 200, data: Enseignant})
//     }
// })},
    //         function (err,Enseignant) {
    //         if (err) {
    //             console.log(err)
    //             res.json({msg : 'error', statut: 500, data: null})
    //         }
    //         else{
    //             var i=0;
    //                 do{
    //             var obj ={
    //                 idGroupe:req.query.a1[i],
    //                 idMatiere:req.query.a2[i]
    //             }
    //             Enseignant.GroupeMatiere.push(obj);
    //             Enseignant.save();
    //             i++;
    //         }
    //             while(req.query.a1[i]!=undefined)
    //              res.json({ msg: 'Enseignant ajouté', statut: 200, data: Enseignant})

    //         }
    // })
//     CreateEnseignant: function (req, res) {
//         UserModel.findById({_id:req.params.idUser},function(err, User){
//             console.log("aaaa",User)
        
//             if (err) {
//                 res.json({ msg: 'error', statut: 500, data: null })
//             } else {
//              console.log(User.__t);
//              if (User.__t == "Administration") {
//      console.log(req.body)
//      EnseignantModel.create({nom:req.body.nom,
//         prenom:req.body.prenom,email:req.body.email,
//         mdp:req.body.mdp,
//         statut:req.body.statut,photo:req.file.filename,
//          idAdministration:req.params.idUser}, 
//     function (err,Enseignant) {
//     if (err) {
//         console.log(err)
//         res.json({msg : 'error', statut: 500, data: null})
//     }
//     else{
//          res.json({ msg: 'Enseignant ajouté', statut: 200, data: Enseignant})
//     }
//    })
//             }
//         else {
//             res.json({ msg: 'pas access', statut: 500, data: null })
//        }
//        }
//     })},
    CreateEnseignant: function (req, res) {
       
                    UserModel.findById({ _id:req.params.idAD }, function (err, User) {
                        console.log("aaaa", User)
                        if (err) {
                            res.json({ msg: 'error', statut: 500, data: null })}
                            else {
                                // console.log("eeeeeeeeeeeeee",User.__t);
                            //  if (User.__t === "Administration") { 
                     console.log(req.body)
                       EnseignantModel.create({nom:req.body.nom,
                       prenom:req.body.prenom,email:req.body.email,
                       mdp:password,statut:req.body.statut,photo:req.file.filename,
                       idAdministration:req.params.idAD}, 
                   function (err,Enseignant) {
                   if (err) {
                       console.log(err)
                       res.json({msg : 'error', statut: 500, data: null})
                   }
                   else{
                        res.json({ msg: 'Enseignant ajouté', statut: 200, data: Enseignant,password:password})
                    } })
                // }
            //         else {
            //    res.json({ msg: 'pas access', statut: 500, data: null })
            //        }
                }
       })
       },  

//  getPassword:function(req,res){

//  },
deleteEnseignantById: function (req, res) {
    console.log(req.body)
    EnseignantModel.deleteOne({ _id: req.params.id }, req.body, function (err, Enseignant) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: Enseignant })
        }
    })
},


getAllEnseignantsParGroupe:function(req,res){

    GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
        if (err) {
            console.log("eeeee")

            res.json({ msg: 'error', statut: 502, data: null })
        } else {

        
    let obj=[];
    var count=0;
    for(i=0;i<Groupe.Matiere.length;i++){
    
        UserModel.findOne({_id: Groupe.Matiere[i].idEnseignant},function(err,ens){
            if(err){
               res.json({ msg: 'liste des Matieres', statut: 504, data:err })
            
            }else{
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
               // console.log(ens);
            //   res.json({ msg: 'liste des Matieres', statut: 200, data:ens })
              obj.push(ens);
              console.log(obj);
              console.log(i);
              count = count+1;
             
            }
            console.log(count);
            if(count==Groupe.Matiere.length){
                console.log("test");
              res.json({ msg: 'liste des Matieres', statut: 201, data:obj });
            }
            
                                      });
    }}})
},
// getAllEnseignants: function (req, res) {
//         EnseignantModel.find({}).populate('order').exec(function (err, Enseignant) {
//                         if (err) {
//                             res.json({ msg: 'error', statut: 500, data: null })
//                         } else {
//                             res.json({ msg: 'liste des Enseignants', statut: 200, data: Enseignant })
                           
//                         }
//                     })
//                 },
                getAllEnseignants: function (req, res) {
                    UserModel.findById({ _id: req.params.idAD },
                        function (err, User) {
                            if (err) {
                                res.json({ msg: 'error', statut: 500, data: null })
                            }
                            else {
                                // if (User.__t == "Administration") {
                                EnseignantModel.find({idAdministration:req.params.idAD}).populate('order').exec(function (err, Enseignant) {
                                    if (err) {
                                        res.json({ msg: 'error', statut: 500, data: null })
                                    } else {
                                        res.json({ msg: 'liste des Enseignants', statut: 200, data: Enseignant })
                                       
                                    }
                                })
                                // }
                                // else {
                                // res.json({ msg: 'pas access', statut: 500, data: null })
                                //     }
                                }
                                })
                            },
                            
// getAllEnseignants: function (req, res) {
//     UserModel.findById({ _id: req.params.idUser },
//         function (err, User) {
//             if (err) {
//                 res.json({ msg: 'error', statut: 500, data: null })
//             }


//             else {
    // EnseignantModel.find({}).populate('order').exec(function (err, Enseignant) {
    //     if (err) {
    //         res.json({ msg: 'error', statut: 500, data: null })
    //     } else {
    //         res.json({ msg: 'liste des Enseignants', statut: 200, data: Enseignant })
           
    //     }
//     })}
    
// })},
getOneEnseignant: function (req, res) {
    EnseignantModel.findById({_id:req.params.id},function(err, Enseignant){
        console.log("aaaa",Enseignant)

        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Enseignants', statut: 200, data: Enseignant })
        }
    })
},
updateEnseignantById: function (req, res) {
    EnseignantModel.updateOne({ _id: req.params.id }, req.body,
         { new: true, runValidators: true },
         function (err, Enseignant) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: Enseignant })
        }
    })
},
authenticate: function (req, res, next) {
    EnseignantModel.findOne({
        email: req.body.email
    }, function (err, EnseignantInfo) {
        if (err) {
            next(err);
        } else {
            if(EnseignantInfo!=null){
            if (bcrypt.compareSync(req.body.mdp, EnseignantInfo.mdp)) {
                var refreshToken = randtoken.uid(256)
                refreshTokens[refreshToken] =EnseignantInfo._id
                console.log('cccc',refreshTokens[refreshToken])
                const token = jwt.sign({
                    id: EnseignantInfo._id
                }, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({
                    status: "success",
                    message: "Enseignant found!!!",
                    data: {
                        Enseignant: EnseignantInfo,
                        accesstoken: token,
                        refreshToken: refreshToken
                    }
                });
            } else {
                res.json({status: "error", message: "Invalid password!!!", data: null});
            }
        }
        else{
            res.json({status: "error", message: "Invalid email!!!", data: null});

        }
    }
    });
},
refreshtokenn:function(req,res,next){
    var id = req.body.id
    var refreshToken=req.body.refreshToken
    console.log(req.body)
    console.log('c1',refreshTokens[refreshToken]==id)
    console.log('c2',(refreshToken in refreshTokens))

    if ((refreshToken in refreshTokens)&& (refreshTokens[refreshToken]==id)){
        var Enseignant = {
            'id':id
        }
        var token = jwt.sign(Enseignant,req.app.get('secretKey'),{expiresIn: '1h'})
        res.json({token:'JWT'+token})
    }
    else{
        
        res.sendStatus(401)
    }
    },
logout : function(req,res,next){
        var refreshToken=req.body.refreshToken
        jwt.verify(req.headers['x-access-token'],req.app.get('secretKey'))
        if (refreshToken in refreshTokens){
            delete refreshTokens[refreshToken]
        }
        res.json({msg:'token experied',statut:204})
    },
    
affecterEnseignantMatiere: function (req, res) {
    console.log(req.body.test);
            if(req.body.test){
                GroupeModel.findById({_id:req.params.idGroupe}, function (err, Groupe) {
                    if (err) {
                        console.log("eeeee")

                        res.json({ msg: 'error', statut: 501, data: null })
                    } else {
try{
    
           GroupeModel.findOne({_id:req.params.idGroupe}).select({ Matiere: {$elemMatch: {_id: req.params.idMatiere}}})
                .then(function(Matt){

                  

                  var obj={
                    _id:  Matt.Matiere[0]._id,
                    nomMatiere:  Matt.Matiere[0].nomMatiere,
                    nombre_d_heure_enseignée:  Matt.Matiere[0].nombre_d_heure_enseignée,
                    nombre_d_heure:  Matt.Matiere[0].nombre_d_heure,
                    idEnseignant : req.params.idEnseignant
                  }

                  Groupe.Matiere.pull(req.params.idMatiere);
                  Groupe.Matiere.push(obj);
                  Groupe.save();

               res.json({ msg: 'enseignant est affécté', statut: 200,data:obj})
               
                });


                
               // console.log(mati._id);
                 // const x=Groupe.Matiere.pull(req.params.idMatiere);
                //      Groupe.save();
                     //Groupe.save();
                       // console.log(result);
                    //  res.json({ msg: 'res', statut: 200, data: "mati"})
                    }
                    catch(e){
                        console.log(e);
                        res.json({ msg: 'res', statut: 501, data: e })

                    }

                        }
                    
            
                }
                )
                    // MatiereModel.updateOne({ _id: req.params.idMatiere }, {idEnseignant:req.params.idEnseignant},
                    //      { new: true, runValidators: true },
                    //      function (err, Matiere) {
                    //     if (err) {
                    //         res.json({ msg: 'error', statut: 500, data: null })
                    //     } else {

                    //         res.json({ msg: 'Done', statut: 200, data: Matiere })
                    //     }
                    // }) 
    }
    else{
        res.json({ msg: 'not error', statut: 500, data: null })

    }
     },

}