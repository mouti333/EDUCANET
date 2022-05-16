const RoleModel = require('../Models/RoleModel')
module.exports={
    CreateRole : function(req,res) {
        RoleModel.create(req.body,function(err,role){
            if (err){
                console.log(err)
                res.json({msg: 'error',statut:500,data:null})
            } 
            else {
                res.status(200).json({msg:'role ajouté',statut: 200,data : role})
            }
        })
        }}