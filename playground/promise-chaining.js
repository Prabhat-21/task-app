require('../src/db/mongoose')
const User = require('../src/models/user')

//626fcadf1634b65a2cf74b37

const updateAgeCount = async(id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeCount('626fcadf1634b65a2cf74b37',23).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})