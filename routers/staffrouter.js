var Express=require('express');
var {staffModel}=require('../models/staffmodel');
const router=Express.Router();
router.get('/',(req,res)=>{
    res.send("welcome");
});
router.post('/add',async(req,res)=>{
    try {
        var data=new staffModel(req.body);
        var result=await data.save();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports=router;