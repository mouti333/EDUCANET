const EtudiantModel = require('../Models/EtudiantModel')
const UserModel = require('../Models/UserModel')

const GroupeModel = require('../Models/GroupeModel')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')

const randtoken = require('rand-token') 
var generator = require('generate-password');

var password = generator.generate({
	length: 12,
	numbers: true,
    symbols : true
});

var refreshTokens = {}


module.exports = {

CreateEtudiant: function (req, res) {
    UserModel.findById({_id:req.params.idUser},function(err, User){
        console.log("aaaa",User)
    
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
         console.log(User.__t);
         if (User.__t == "Administration") {
 console.log(req.body)
 EtudiantModel.create({matricule:req.body.matricule,nom:req.body.nom,
    prenom:req.body.prenom,email:req.body.email,
    mdp:password,specialité:req.body.specialité,photo:req.file.filename,idGroupe:req.params.idGroupe, idAdministration:req.params.idUser}, 
            function (err,Etudiant) {
            if (err) {
                console.log(err)
                res.json({msg : 'error', statut: 500, data: null})
            }
            else{
                 res.json({ msg: 'Etudiant ajouté', statut: 200, data: Etudiant,password:password})
            }
           })}
    else {
        res.json({ msg: 'pas access', statut: 500, data: null })
   }
   }
})},

deleteEtudiantById: function (req, res) {
    console.log(req.body)
    EtudiantModel.deleteOne({ _id: req.params.id }, req.body, function (err, Etudiant) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: Etudiant })
        }
    })
},

// getAllEtudiants: function (req, res) {
//     UserModel.find({idGroupe:req.params.idGroupe},function(err,affiche){
//         if(err){
//             console.log(err);

//         }
//         else{
//             console.log('affiche',affiche);
//         res.json({ msg: 'mat', statut: 200, data:affiche  })
//         }
        

//     })
 
// },
getAllEtudiants: function (req, res) {
    UserModel.findById({ _id: req.params.idUser },
        function (err, User) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {console.log(User)
                // if (User.__t == "Administration") {
                    EtudiantModel.find({idAdministration:req.params.idUser}).populate('order').exec(
                        function (err, Etudiants) {
                            if (err) {
                                res.json({ msg: 'error', statut: 501, data: null })
                            } else {
                                res.json({ msg: 'liste des Etudiants', statut: 200, data: Etudiants })
                            } })
                           
                            
                            //     if (req.params.idUser == Mat.idEnseignant){
                            //                              {
                            //                                  console.log()
                            //                                  res.json({ msg: 'liste des Matieres', statut: 200, data:Mat })
        
                            //                               }
                            //                              else{
                            //                                 res.json({ msg: 'pas', statut: 500, data:null })
                            //                              }} 
                            //                              
                                                        }})},
getAllEtudiants1000: function (req, res) {
    UserModel.findById({ _id: req.params.idUser },
        function (err, User) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {console.log(User)


                // if (User.__t == "Administration") {
                    EtudiantModel.find({idAdministration:req.params.idUser,idGroupe:req.params.idGroupe}).populate('order').exec(
                        function (err, Etudiants) {
                            if (err) {
                                res.json({ msg: 'error', statut: 501, data: null })
                            } else {
                                res.json({ msg: 'liste des Etudiants', statut: 200, data: Etudiants })
                            } })
                           
                            
                            //     if (req.params.idUser == Mat.idEnseignant){
                            //                              {
                            //                                  console.log()
                            //                                  res.json({ msg: 'liste des Matieres', statut: 200, data:Mat })
        
                            //                               }
                            //                              else{
                            //                                 res.json({ msg: 'pas', statut: 500, data:null })
                            //                              }} 
                            //                              
                                                        }})},
//               else{  if (User.__t == "Enseignant") {
//                 console.log(req.params.idEtudiants)
// GroupeModel.find({Matiere : {$elemMatch:{idEnseignant:req.params.idUser}}}).then(function(matt){
//                     console.log(matt);
//                     res.json({ msg: 'mat', statut: 500, data:matt  })});
//                     } else {
//                         console.log(Groupe.Matiere)
//                         ;
//                     } }
                

getOneEtudiant: function (req, res) {
    EtudiantModel.findById({_id:req.params.id},function(err, Etudiant){
        console.log("aaaa",Etudiant)

        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Etudiant', statut: 200, data: Etudiant })
        }
    })
},

updateEtudiantById: function (req, res) {
    EtudiantModel.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true },
         function (err, Etudiant) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: Etudiant })
        }
    })
},
authenticate: function (req, res, next) {
    EtudiantModel.findOne({
        email: req.body.email
    }, function (err, EtudiantInfo) {
        if (err) {
            next(err);
        } else {
            if(EtudiantInfo!=null){
            if (bcrypt.compare(req.body.mdp, EtudiantInfo.mdp)) {
                var refreshToken = randtoken.uid(256)
                refreshTokens[refreshToken] = EtudiantInfo._id
                console.log('cccc',refreshTokens[refreshToken])
                const token = jwt.sign({
                    id: EtudiantInfo._id
                }, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({
                    status: "success",
                    message: "Etudiant found!!!",
                    data: {
                        Etudiant: EtudiantInfo,
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

        var Etudiant = {
            'id':id
        }
        var token = jwt.sign(Etudiant,req.app.get('secretKey'),{expiresIn: '1h'})
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
    getMatieresEtudiant: function (req, res) {
        EtudiantModel.findById({ _id: req.params.idEtudiant}, function (err, Etudiant) {
        console.log("aaaa",Etudiant.idGroupe)
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            }
            else {
                GroupeModel.findById({ _id: Etudiant.idGroupe }, function (err,Groupe) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        console.log(Groupe.Matiere)
                        res.json({ msg: 'MatieresEtudiant', statut: 200, data:Groupe.Matiere})
                    }
                    
                })
              
            }
        }
        )}
}