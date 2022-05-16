const AdministrationModel = require('../Models/AdministrationModel')
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

CreateAdministration: function (req, res) {
 console.log(req.body)
 AdministrationModel.create({nom:req.body.nom,prenom:req.body.prenom,email:req.body.email,
        mdp:password,photo:req.file.filename,role:req.body.role
    }, 
            function (err,Administration) {
            if (err) {
                console.log(err)
                res.json({msg : 'error', statut: 500, data: null})
            }
            else{
                 res.json({ msg: 'Administration ajouté', statut: 200, data: Administration})
            }
    })
},
getAllAdministration: function (req, res) {
    AdministrationModel.find({}).populate('order').exec(function (err, Administration) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'liste des Administration', statut: 200, data: Administration })
        }
    })
},
updateAdministrationById: function (req, res) {
    AdministrationModel.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true },
         function (err, Administration) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: Administration })
        }
    })
},
deleteOneAdministration:function(req,res){
    AdministrationModel.deleteOne({_id:req.params.id},function(err,Administration){
        if(err){
            res.json({msg:'error',statut:500,data:null})
       } else{
        res.json({msg:'Administration supprimer',statut:200,data:Administration}) 
        }

    })

},
authenticate: function (req, res, next) {
    AdministrationModel.findOne({
        email: req.body.email
    }, function (err, AdministrationInfo) {
        if (err) {
            next(err);
        } else {
            if(AdministrationInfo!=null){
                console.log('user',AdministrationInfo)
            if (bcrypt.compare(req.body.mdp, AdministrationInfo.mdp)) {
                var refreshToken = randtoken.uid(256)
                refreshTokens[refreshToken] = AdministrationInfo._id
                console.log('cccc',refreshTokens[refreshToken])
                const token = jwt.sign({
                    id: AdministrationInfo._id
                }, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({
                    status: "success",
                    message: "Administration found!!!",
                    data: {
                        Administration: AdministrationInfo,
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
        var Administration = {
            'id':id
        }
        var token = jwt.sign(Administration,req.app.get('secretKey'),{expiresIn: '1h'})
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









}