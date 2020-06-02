const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Post=require("../model/postModel");

//Get all posts
router.get("/",(req,res)=>{
    Post.find((err,data)=>{
        if(err){
            console.log("Error");
            return next(err);
        }
        else{
            res.json(data);
        }
    })
});

//Posting a post
router.post("/add",(req,res)=>{
    const newPost =new Post({
        title: req.body.title,
        description: req.body.description,
        authorname: req.body.authorname
    })
    newPost.save((err,doc)=>{
        if(!err){
            res.json("The Post has been Succesfully added")
            console.log(doc)
        }else{
            res.json("Try again!!")
            console.log(err)
        }
    });

});

//Request by ID
router.get("/:id",(req,res)=>{
    Post.findById(req.params.id,(err,doc)=>{
        if(!err){
            console.log(req.params.id);
            res.json(doc);
        }
    });
})

//By Id and Update
router.put("/update/:id",(req,res)=>{
    Post.findById(req.params.id)
    .then(post=>{
        post.title=req.body.title;
        post.description=req.body.description;
        post.authorname=req.body.authorname;

        post.save().then(()=>res.json("The Post has been Succesfully updated")).catch(err=>res.json(err));
    })
    .catch(err=>res.json(err))
});

//By Id and Delete
router.delete("/:id",(req,res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Succesfully Deleted"))
    .catch((err)=>res.json(err));
});




module.exports = router;