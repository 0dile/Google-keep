const {type} = require("express/lib/response")
const mongoose = require("mongoose");

mongoose.Userschema = new mongoose.Schema (
    {
        name:{type:String,required: true},
        email:{type:String,unique:'true', required: true},
        password: {type: String, required: true}
    }
);
module.exports = mongoose.models('Users',Userschema);