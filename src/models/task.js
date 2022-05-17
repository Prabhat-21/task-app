const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose;
// mongoose.Promise = global.Promise;
const Task = new Schema({
    description: {
        type:String,
        required: true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }
},{
    timestamps:true
}) 

module.exports=mongoose.models.Task || mongoose.model('Task',Task)


