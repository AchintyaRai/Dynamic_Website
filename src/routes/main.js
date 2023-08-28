const express=require("express");
const routes=express.Router();
const Detail = require("../models/Detail");
const Slider=require("../models/Slider");
const Service=require("../models/Service");
const Contact=require("../models/Contact")
const { response } = require("express");





routes.get("/",async (req,res)=>{
    console.log("welcome to home page");
    
    const details= await Detail.findOne({"id":"63ae9b5262cf0c8954673a7f"});
    const slides = await Slider.find()
    const services = await Service.find()

    console.log(details)
    res.render("index",{
        details : details,
        slides : slides,
        services:services

    });
})

routes.get("/gallery",async (req,res)=>{
    console.log("welcome to Gallery ");
    const details= await Detail.findOne({"id":"63ae9b5262cf0c8954673a7f"});
    
    res.render("gallery",{
        details : details
    });
})

//process contact form
routes.post("/process-contact-form",async(req,res)=>{
    console.log("form is submitted")
    console.log(req.body)
   // res.send('hii');

   try{
          const data=  await Contact.create(req.body)
          console.log(data)
          res.redirect('/')
   }catch(e){
console.log(e)
res.redirect('/')
   }
})






module.exports=routes