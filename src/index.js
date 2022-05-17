const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         filesize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a PDF'))
//         }

//         cb(undefined,true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })

// const errorMiddleware = (req,res,next)=>{
//     throw new Error('From my middleware')
// }
// app.post('/upload', upload.single('upload') ,(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
console.log('Server is up on ' + port)
})
 
// const Task = require('./models/task')
// const User = require('./models/user')

