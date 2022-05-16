const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken');
const SuperAdminSchema = new Schema ({

}) 


module.exports=User.discriminator('SuperAdmin',SuperAdminSchema)