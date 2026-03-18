const express = require("express");
const Student = require("../models/Student.js");

const router = express.Router();
router.post("/student/insert",async(req , res)=>{
    const data= await Student.create(req.body);
    res.send(data);
});

router.post("/student/update/:id",async(req , res)=>{
    const data= await Student.updateOne(
        {_id: req.params.id},{$set: req.body}
    );
    res.send(data);
});

router.get("/student/find",async(req , res)=>{
    const data= await Student.find();
    res.send(data);
});


router.post("/student/delete/:id",async(req , res)=>{
    const data= await Student.deleteOne(
        {_id: req.params.id}
    );
    res.send(data);
});

router.get("/student/sort",async(req , res)=>{
    const data= await Student.find().sort({age:1});
    res.send(data);
});

router.get("/student/limit",async(req , res)=>{
    const data= await Student.find().limit(2);
    res.send(data);
});

module.exports = router;