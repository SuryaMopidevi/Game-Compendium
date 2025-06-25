const mongoose = require('mongoose')
const user =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : Number,
        required : true
    }
})

const product = new mongoose.model("product",user)
module.exports = product