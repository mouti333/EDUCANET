const infos = require('../Models/infos')


module.exports = {
    Createinfos: function (req, res) {
        console.log(req.body)
        infos.create({
            idGRP : req.params.idGRP ,
              idUser : req.params.idUser,
              idmat : req.params.idmat
              }, 
                   function (err,User) {
                   if (err) {
                       console.log(err)
                       res.json({msg : 'error', statut: 500, data: null})
                   }
                   else{
                        res.json({ msg: 'User ajouté', statut: 200, data: User})
                   }
           })
       },



       getOneInfo : function (req, res) {
     
       infos.find({},function (err, infos) {
                    if(err){
                        res.json({ msg: 'error', statut: 500, data: null })

                    }
                    else{
                        console.log('aaaaaa',infos)
                        let resultat=infos.filter((x => x.idUser===req.params.idUser));
                        console.log(resultat);
                        res.json({ msg: 'mat', statut: 200, data:resultat  })
        
                    }
                    
                })
              
            
        },

  






























}
