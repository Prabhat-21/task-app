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
    
    // db.collection('users').findOne({name:'Tushar'},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:23}).toArray((error, users)=>{
    //     console.log(users)
    // })

    db.collection('tasks').findOne({_id:new ObjectID('626a4d71d240996294f69f1a')},(error, user)=>{

        if(error){
        return console.log('Unable to fetch')
            }
         console.log(user)
    })

    db.collection('tasks').find({Completed:false}).toArray((error, users)=>{
           console.log(users)
         })


})