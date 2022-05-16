const SuperAdminModel = require('../Models/SuperAdminModel')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')

const randtoken = require('rand-token') 
var refreshTokens = {}
var generator = require('generate-password');

var password = generator.generate({
	length: 12,
	numbers: true,
    symbols : true
});

module.exports = {

CreateSuperAdmin: function (req, res) {
 console.log(req.body)
    SuperAdminModel.create({
        nom:req.body.nom
        ,prenom:req.body.prenom,
        email:req.body.email,
        mdp:password,
        photo:req.file.filename,
       }, 
            function (err,SuperAdmin) {
            if (err) {
                console.log(err)
                res.json({msg : 'error', statut: 500, data: null})
            }
            else{
                 res.json({ msg: 'SuperAdmin ajouté', statut: 200, data: SuperAdmin})
            }
    })
},
authenticate: function (req, res, next) {
    SuperAdminModel.findOne({
        email: req.body.email
    }, function (err, SuperAdminInfo) {
        if (err) {
            next(err);
        } else {
            if(SuperAdminInfo!=null){
                console.log('SuperAdmin',SuperAdminInfo)
            if (bcrypt.compareSync(req.body.mdp, SuperAdminInfo.mdp)) {
                var refreshToken = randtoken.uid(256)
                refreshTokens[refreshToken] = SuperAdminInfo._id
                console.log('cccc',refreshTokens[refreshToken])
                const token = jwt.sign({
                    id: SuperAdminInfo._id
                }, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({
                    status: "success",
                    message: "SuperAdmin found!!!",
                    data: {
                        SuperAdmin: SuperAdminInfo,
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
        var SuperAdmin = {
            'id':id
        }
        var token = jwt.sign(SuperAdmin,req.app.get('secretKey'),{expiresIn: '1h'})
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
