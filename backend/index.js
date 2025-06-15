const express = require('express')
const mongoose = require("mongoose")
const app = express()
const url= "mongodb+srv://mopidevisurya001:LDKwroVkGXJU95R4@cluster0.9anfhmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const port =4102

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("surya")
})

mongoose.connect(url)
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((err)=>{
    console.log("Mongodb connection failed ",err)
})
 app.listen(port,()=>{
    console.log(`server listeing in port ${port}`)
 })

