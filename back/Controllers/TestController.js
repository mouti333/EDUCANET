const TestModel = require('../Models/TestModel')

const UserModel = require('../Models/UserModel')
const Database = require('../ConfigDataBase/Database')
const mongoose = require ('mongoose')

module.exports = {

CreateTest: function (req, res) {
 console.log("zzzzzzzz",req.params.id)
 UserModel.findById({_id:req.params.id},function(err, User){
    console.log("aaaa",User)

    if (err) {
        res.json({ msg: 'error', statut: 500, data: null })
    } else {
        
            
       TestModel.create({datededepotdetest:req.body.datededepotdetest,
        contenutest:req.body.contenutest,nomtest:req.body.nomtest,dureetest:req.body.dureetest,Enseignant:User
                }, 
                    function (err,Test) {
                    if (err) {
                        console.log(err)
                        res.json({msg : 'error', statut: 500, data: null})
                    }
                    else{
                        console.log(req.params.id)
                        console.log(Test)
                        User.Test.push(Test);

                        User.save();
                        console.log(User.Test[0].date)
                        res.json({ msg: 'Enseignant', statut: 200, data:User.Test[0]})

                
    }
})
 
    }
    }
    
    )
},
getAllTest: function (req, res) {
    TestModel.find({}).populate('Enseignant').exec(function (err, Test) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'liste des Tests', statut: 200, data: Test })
        }
    })
},

getOneTest: function (req, res) {
    TestModel.findById({ _id: req.params.id }, function (err, Test) {
        console.log("aaaa", Test)

        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'Test', statut: 200, data: Test })
        }
    })
},
deleteTestById: function (req, res) {
    console.log(req.body)
    TestModel.deleteOne({ _id: req.params.id }, req.body, function (err, Test) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: 'deleted', statut: 200, data: Test })
        }
    })
},
updateTestById: function (req, res) {
    TestModel.updateOne({ _id: req.params.id }, req.body, function (err, Test) {
        if (err) {
            res.json({ msg: 'error', statut: 500, data: null })
        } else {
            res.json({ msg: ' Test', statut: 200, data: Test })
        }
    })
}
}