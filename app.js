var Express= require('express');
var Parser=require('body-parser');
var Mongoose=require('mongoose');
var apps=Express();
var route=require('./routers/staffrouter');
apps.use('/',route);
apps.use(Parser.urlencoded({extended:false}));
Mongoose.connect("mongodb+srv://shinyjoseph:shiny@cluster0-prim6.mongodb.net/test?retryWrites=true&w=majority");
apps.listen(process.env.PORT||4000,()=>{
    console.log("server started");
})