const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlPerser:true,
    useCreateIndex : true
})

const Task = mongoose.model('Task',{
    description: {
        type:String,
        required: true,
        trim:true
    },
    Completed:{
        type:Boolean,
        default:false
    }
})

// const me  = new User({
//     name: 'Rakesh',
//     age: 45,
//     email: 'rakesh@gmail.com',
//     password: 'phone123!'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch(()=>{
//     console.log('Error', error)
// })

