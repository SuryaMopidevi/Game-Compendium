const express = require('express')
const mongoose = require("mongoose")
const app = express()
const url= "mongodb+srv://mopidevisurya001:LDKwroVkGXJU95R4@cluster0.9anfhmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const port =4102
const Schema = require('./schema')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

app.post("/" ,async(req,res)=>{
    const {id,name}=req.body;
    try{
        const user = new Schema({id : id , name : name})
        await user.save()
        res.status(201).json({message : "new user added successfully...."})
    }catch(err){
        console.log("Error : ",err)
    }
})

app.get("/user/:id",async (req,res)=>{
    try{
        const { id }= req.params
        const user = await Schema.find({id})
        if(!user){
            res.status(404).json({message : "no user found ..."})
        }
        res.status(200).json(user)
    }catch(err){
        console.log("error : ",err)
        res.status(500).json({message : "error in fetching data...."})
    }
})

mongoose.connect(url)
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((err)=>{
    console.log("Mongodb connection failed ",err)
})
 app.listen(port,()=>{
    console.log(`server listening in port ${port}`)
 })

