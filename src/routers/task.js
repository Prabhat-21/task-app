const express = require('express')
const router = new express.Router()
const Task = require('../models/Task')


router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send()
    }
})


router.get('/tasks', async (req,res)=>{

    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }
    catch(e){
        res.status(404).send()
    }

})

router.get('/tasks/:id', async (req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send()
    }
   
})

router.patch('/tasks/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'Completed']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation){
        res.status(400).send({error:'Invalid Updates'})
    }

    
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, {new : true, runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})


router.delete('/tasks/:id', async(req, res)=>{
    try{
        const task = Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports=router