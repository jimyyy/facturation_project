//importation de mongoose
const mongoose= require('mongoose');
//generation dun shema
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    tel:String,
    role:String,
    Department:String

    



});
//generate model 
const user=mongoose.model('User',userSchema);
//export model

module.exports=user;