const UserModel = require('../Models/UserModel')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require ('nodemailer')
const randtoken = require('rand-token') 
var generator = require('generate-password');

var password = generator.generate({
	length: 12,
	numbers: true,
    symbols : true
});
var refreshTokens = {}

module.exports = {

CreateUser: function (req, res) {
 console.log(req.body)
    UserModel.create({
        nom:req.body.nom
        ,prenom:req.body.prenom,
        email:req.body.email,
        mdp:password,
        photo:req.file.filename,
       }, 
            function (err,User) {
            if (err) {
                console.log(err)
                res.json({msg : 'error', statut: 500, data: null})
            }
            else{
                 res.json({ msg: 'User ajouté', statut: 200, data: password})
            }
    })
},
// getPassword:function(req,res){
// res.json({msg:'okkkk',password:password})
// },
deleteUserById: function (req, res) {
    console.log(req.body)
    UserModel.deleteOne({ _id: req.params.id }, req.body, function (err, User) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: User })
        }
    })
},
getAllUsers: function (req, res) {
    UserModel.find({}).populate('order').exec(function (err, User) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'liste des utilisateurs', statut: 200, data: User })
        }
    })
},
getOneUser: function (req, res) {
    UserModel.findById({_id:req.params.id},function(err, user){
        console.log("aaaa",user)

        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Utilisateurs', statut: 200, data: user })
        }
    })
},
updateUserById: function (req, res) {
    UserModel.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true },
         function (err, User) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Done', statut: 200, data: User })
        }
    })
},
authenticate: function (req, res, next) {
    UserModel.findOne({
        email: req.body.email
    }, function (err, userInfo) {
        if (err) {
            next(err);
        } else {
            if(userInfo!=null){
                console.log('user',userInfo)
            if (bcrypt.compareSync(req.body.mdp, userInfo.mdp)) {
                var refreshToken = randtoken.uid(256)
                refreshTokens[refreshToken] = userInfo._id
                console.log('cccc',refreshTokens[refreshToken])
                const token = jwt.sign({
                    id: userInfo._id
                }, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({
                    status: "success",
                    message: "user found!!!",
                    data: {
                        user: userInfo,
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
        var User = {
            'id':id
        }
        var token = jwt.sign(User,req.app.get('secretKey'),{expiresIn: '1h'})
        res.json({token:'JWT'+token})
    }
    else{
        
        res.sendStatus(401)
    }
},
logout : function(req,res,next){
    var refreshToken=req.body.refreshToken
    jwt.verify(req.headers['x-access-tokesn'],req.app.get('secretKey'))
    if (refreshToken in refreshTokens){
        delete refreshTokens[refreshToken]
    }
    res.json({msg:'token experied',statut:204})
},


forgetpassword: function (req, res) {
    const { email } = req.body;
    UserModel.findOne({ email }, (err, client) => {
        if (err || !client) {
            return res.status(400).json({ error: "email does not exist" });
        }
        const token = jwt.sign({ _id: client._id }, req.app.get('secretKey'), { expiresIn: '60m' });
        var data = {
            from: "dimassimoutia@gmail.com",
            to: email,
            subject: "activation email",
            // html:`<a href=http://localhost:3000/#/ResetPassword >reset your password here</a>`
            html:`<p>"http://localhost:3000/#/ResetPassword"  </p> `
        };
/*html:`<p>http:127.0.0.1:4001/users/resetpassword/${token}</p>`*/
            // html: <a href="http://localhost:3000/#/resetpassword/${token}">resetyour password here</a>
        
        let datareset = { resetLink: token }
        return UserModel.updateOne({ _id: client._id }, datareset, (err, succes) => {
            console.log("datareset", datareset);
            if (err) {
                return res.status(400).json({ error: "reset password link error" });
            }
            else {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                     tls: {
      rejectUnauthorized: false
  },
                    auth: {
                        user: 'dimassimoutia@gmail.com',
                        pass: 'dimassiess22689580'
                    }
                });
                transporter.sendMail(data, function (error, info) {
                    if (error) {
                        console.log('error', error);
                        return res.json({ err: "error" })
                    } else {
                        return res.json({ message: "email has been sent", token: token });

                    }
                });
            }
        })

    })
},

resetpassword: function (req, res) {
    const { resetLink, newPass } = req.body;

    console.log('loggg', req.body);
    if (resetLink) {
        jwt.verify(resetLink, req.app.get('secretKey'), function (err, decodeData) {
            if (err) {
                return res.json({
                    error: "incorrect token or it is exprired"
                })
            }
            UserModel.findOne({ resetLink }, (err, client) => {
                console.log("client", client);
                if (err || !client) {
                    return res.json({ error: "user with this token does not exist" });
                }
                const obj = {
                    mdp: newPass
                }
                console.log('userrrr', obj)
                //user=_extend(user,obj);
                client.mdp = obj.mdp
                client.save((err, result) => {
                    console.log("result", err);
                    if (err) {
                        return res.status(400).json({ error: "reset password error" });
                    }
                    else {
                        return res.status(200).json({ message: "password has been changed" });
                    }
                })
            })
        })
    }
    else {
        return res.status(401).json({ error: "authentification erreur" });
    }
}























}
