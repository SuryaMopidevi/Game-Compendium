const mongoose = require('mongoose')
const { use } = require('react')
const UserSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    }
})
const user = mongoose.model('user',UserSchema)
module.exports=user