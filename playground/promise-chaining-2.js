require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('626fcc931cd5246fb469f237').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({Completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteAndCount('626fcc931cd5246fb469f237').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})