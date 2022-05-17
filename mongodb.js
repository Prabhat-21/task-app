//crud operations

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const ObjectID = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser:true}, (error, client)=>{
    if(error){
       return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    
    db.collection('users').findOne({name:'Tushar'},(error, user)=>{
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({age:23}).toArray((error, users)=>{
        console.log(users)
    })

    db.collection('tasks').findOne({_id:new ObjectID('626a4d71d240996294f69f1a')},(error, user)=>{

        if(error){
        return console.log('Unable to fetch')
            }
         console.log(user)
    })

    db.collection('tasks').find({completed:false}).toArray((error, users)=>{
           console.log(users)
         })

    const updatePromise = db.collection('users').updateOne({
        _id : new ObjectID("626a47312be2244c9c47b92d")
    }, {
        $inc:{
            age : 1
        }
    })

    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    },{
        $set:{
            completed : true
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('users').deleteMany({age:24}).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description : 'Databases'
    }).then((result)=>{
             console.log(result)
         }).catch((error)=>{
         console.log(error)
         })

})