const PublicationAdministratifModel = require('../models/PublicationAdministratifModel')
const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require('mongoose')

module.exports = {

    CreatePublicationAdministratif: function (req, res) {
      
        PublicationAdministratifModel.create({
                          DateDeCreation:Date.now(),
                          photo:req.file.filename,
                            Contenu: req.body.Contenu,Files:req.file.filename,idAdministration:req.params.idAD
                            //  Administration: User
                  },function(err,PublicationAdministratif){
                if (err){
                    console.log(err)
                    res.json({msg: 'error',statut:500,data:null})
                } 
                else {
                    res.status(200).json({msg:'PublicationAdministratif ajouté',statut: 200,data : PublicationAdministratif})
                }
            })
            },
    // CreatePublicationAdministratif: function (req, res) {
    //     console.log("zzzzzzzz", req.params.id)
    //     UserModel.findById({ _id: req.params.id }, function (err, User) {
    //         console.log("aaaa", User)

    //         if (err) {
    //             res.json({ msg: 'error', statut: 500, data: null })
    //         } else {


    //             PublicationAdministratifModel.create({

    //                 DateDeCreation: req.body.DateDeCreation,
    //                 Contenu: req.body.Contenu, Administration: User
    //             },
    //                 function (err, PublicationAdministratif) {
    //                     if (err) {
    //                         console.log(err)
    //                         res.json({ msg: 'error', statut: 500, data: null })
    //                     }
    //                     else {
    //                         console.log(req.params.id)
    //                         console.log(PublicationAdministratif)
    //                         User.PublicationAdministratif.push(PublicationAdministratif);

    //                         User.save();
    //                         console.log(User.PublicationAdministratif[0].date)
    //                         res.json({ msg: 'Enseignant', statut: 200, data: User.PublicationAdministratif[0] })


    //                     }
    //                 })

    //         }
    //     }

    //     )
    // },
    getAllPublicationAdministratif: function (req, res) {
        PublicationAdministratifModel.find({idAdministration:req.params.idAD}).populate('Adminstration').exec(function (err, PublicationAdministratif) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'liste des PublicationAdministratif', statut: 200, data: PublicationAdministratif })
            }
        })
    },
  
    getOnePublicationAdministratif: function (req, res) {
        PublicationAdministratifModel.findById({ _id: req.params.id }, function (err, PublicationAdministratif) {
            console.log("aaaa", PublicationAdministratif)

            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'PublicationAdministratif', statut: 200, data: PublicationAdministratif })
            }
        })
    },
    deletePublicationAdministratifById: function (req, res) {
        console.log(req.body)
        PublicationAdministratifModel.deleteOne({ _id: req.params.id }, req.body, function (err, PublicationAdministratif) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: 'deleted', statut: 200, data: PublicationAdministratif })
            }
        })
    },
    updatePublicationAdministratifById: function (req, res) {
        PublicationAdministratifModel.updateOne({ _id: req.params.id }, req.body, function (err, PublicationAdministratif) {
            if (err) {
                res.json({ msg: 'error', statut: 500, data: null })
            } else {
                res.json({ msg: ' Publication Administratif', statut: 200, data: PublicationAdministratif })
            }
        })
    }
}