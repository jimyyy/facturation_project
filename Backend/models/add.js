//importation de mongoose
const mongoose= require('mongoose');
//generation dun shema
const addSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    tel: String,
    Num:String,
    Date:Date,
    code:String,
    Product: String,
    Price: String,
    TVA: String,
    amount:String,
    total:String,
    Advance: String,
    Rest: String,
    message:String,
    datefrom:String,
    dateto:String,
    type:String
    



});
//generate model 
const add=mongoose.model('Add',addSchema);
//export model

module.exports=add;