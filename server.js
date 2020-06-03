const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const PORT=process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern-crud",{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(!err) console.log("Connected to MongoDb");
    else console.log("Not Connected Sorry");
})

const postRouter=require('./routes/route');
app.use("/api/crud",postRouter);


app.listen(PORT,()=>console.log("Running on port 8080"));