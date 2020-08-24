var Mongoose=require('mongoose');
const staffSchema=new Mongoose.Schema(
    {
    name :{
             type:String  
    },
    department :{
             type:String
    },
    clg:{
        type:String
    },
    salary:{
        type:Number
    },
}
);
var staffModel=Mongoose.model('details',staffSchema);
module.exports={staffModel};