const mongodb=require('mongodb')
const mongoClient =mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname='proj-1'

mongoClient.connect(connectionUrl ,(error, res1)=>{
    if(error){
        return console.log('unable to connect')
    }
    console.log('all pref')
    const db=res1.db(dbname)
    ///////////////////////////////////////////////////////////////
    // insertOne 2
    
    db.collection('users').insertOne(
        {
            name:'esraa',
            age:21
        }),(error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    }
    db.collection('users').insertOne(
        {
            name:'eman',
            age:24
        }),(error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    }
    
    ///////////////////////////////////////////////////////////////////////////
    // insertMany 10
    
    db.collection('users').insertMany([
       
        {
            name:'hanan',
            age:25
        },
        {
            name:'alyaa',
            age:25
        },
        {
            name:'esraa',
            age:25
        },
        {
            name:'asmaa',
            age:25
        },
        {
            name:'mariam',
            age:25
        },
        {
            name:'mohamed',
            age: 30
        },
        {
            name:'fares',
            age:20
        },
        {

            name:'aziz',
            age:26
        },
        {
            name:'yassen',
            age:30
        },
        {
            name:'mazen',
            age:20
        },
      

    ]),(error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
      }

      //////////////////////////////////////////////////////////////
      // find match 25
      
      db.collection('users').find({age:25}).toArray((error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data)
      })
    
       /////////////////////////////////////////////////////////
       // limit (3) 25
       
       db.collection('users').find({age:25}).limit(3).toArray((error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data)
      })
      
     //////////////////////////////////////////////////////////
     // $set name 4
     
     db.collection('users').updateOne({_id:mongodb.ObjectId("64db92525185d749616cb5f8")},{
       $set:{name:'amira'}
      }).then((data)=> console.log(data.modifiedCount))
      .catch((error)=>console.log(error))
       ////////////
       db.collection('users').updateOne({_id:mongodb.ObjectId("64db92525185d749616cb5f9")},{
        $set:{name:'mona'}
       }).then((data)=> console.log(data.modifiedCount))
       .catch((error)=>console.log(error))
       ///////////
       db.collection('users').updateOne({_id:mongodb.ObjectId("64db92525185d749616cb5fa")},{
        $set:{name:'gehad'}
       }).then((data)=> console.log(data.modifiedCount))
       .catch((error)=>console.log(error))
       ////////////
       db.collection('users').updateOne({_id:mongodb.ObjectId("64db92525185d749616cb5fb")},{
        $set:{name:'kawkab'}
       }).then((data)=> console.log(data.modifiedCount))
       .catch((error)=>console.log(error))

     //////////////////////////////////////////////////////////
     //updateOne for 1 inc 20
     
     db.collection('users').updateOne({_id:mongodb.ObjectId("64db8a7e67ddbc147f489c6c")},{
       $inc:{age:20}
     }).then((data)=> console.log(data.modifiedCount))
     .catch((error)=>console.log(error))


     ///////////////////////////////////////////////////////////////
      //updateMany inc age 10 
     
      db.collection('users').updateMany({},{
        $inc:{age:10}
      }).then((data)=> console.log(data.modifiedCount))
      .catch((error)=>console.log(error))
      
      /////////////////////////////////////////////////////////////
       //deleteOne 1
       
     db.collection('users').deleteOne({_id:mongodb.ObjectId("64db8a7e67ddbc147f489c6d")})
     .then((data)=> console.log(data.modifiedCount))
      .catch((error)=>console.log(error))

 /////////////////////////////////////////////////////////////
       //deleteMany age35
    
     db.collection('users').deleteMany({age:35})
     .then((data)=> console.log(data.modifiedCount))
      .catch((error)=>console.log(error))

})
