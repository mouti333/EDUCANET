const mongoose = require ('mongoose')

const bcrypt=require('bcrypt')
const saltRounds=10
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema
const UserSchema = new Schema ({

email:{
        type:String,
        required:true,
        unique:true,
        validate:
        function ValidateEmail(mail) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
    return (true)
    console.log('You have entered a valid email address!!')
    }
    console.log("You have entered an invalid email address!")
    return (false)
    }
    },
mdp:{
        type: String,
        // required: true, 
        // minlength: 7,
        // trim: true,
        //  validate(value){
        //     if (value.toLowerCase().includes('password')) {
        //         throw new Error('Password cannot contain "password"')
        //     }
        // } },  
},
nom:{
        type:String,
        required:true
    },
// prenom:{
//         type:String,
//         required:true
//     },



photo:{
    type:String,
    required:false
} ,

});

UserSchema.pre('save',function(next){
    this.mdp= bcrypt.hashSync(this.mdp,saltRounds);
    next();
})
module.exports = mongoose.model('User',UserSchema)
