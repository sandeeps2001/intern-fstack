const { NULL } = require('sass');
//superadmin
const dbc = async()=> {
    try{
const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'loyalytics';
const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
const db = await client.db(databaseName);
const s =  await db.collection('cred').findOne({ _id: new ObjectId("6436abb0f4a169a7d4499ace") });
return s;
    }
    catch(err){
        console.log("err",err);
    }
    }
//signup
    const signuppost = async(e,p)=> {
        try{
    const {MongoClient, ObjectId} = require('mongodb')
    const connectionURL = 'mongodb://127.0.0.1:27017'
    const databaseName = 'loyalytics';
    const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
    const db = await client.db(databaseName);
    const res = await db.collection('test').insertOne(
       {
               email : `${e}`,
                 password : `${p}`
             })
    return true;
            }
            catch(err){
                console.log('err',err)
                return false
            }
        
        }
//login
const logincheck = async(e,p)=> {
    try{
const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'loyalytics';
const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
const db = await client.db(databaseName);
const lresult =  await db.collection('test').findOne({ email:`${e}`, password:`${p}`});
console.log(lresult)
return lresult;
    }
    catch(err){
        console.log("err",err);
    }
    }

//create channel
const createchannel = async(c,d,e)=> {
    try{
const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'channel';
const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
const db = await client.db(databaseName);
const res = await db.collection(`${c}`).insertOne(
   {
           channelname : `${c}`,
             email : `${e}`,
             date: `${d}`
         })
return true;
        }
        
        catch(err){
            console.log('err',err)
            return false
        }
    
    }

    const fetchchannel = async(e)=> {
        try{
    const {MongoClient, ObjectId} = require('mongodb')
    const connectionURL = 'mongodb://127.0.0.1:27017'
    const databaseName = 'channel';
    const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
    const db = await client.db(databaseName);
    var Mykeys = []
 const a = await db.listCollections().toArray()
 a.forEach(element => {
         Mykeys.push(element.name)
           })
           return Mykeys;
            }
            catch(err){
                console.log('err',err)
                return false
            }
        
        }
        const fetchchanneldata = async(c)=> {
            try{
        const {MongoClient, ObjectId} = require('mongodb')
        const connectionURL = 'mongodb://127.0.0.1:27017'
        const databaseName = 'channel';
        const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
        const db = await client.db(databaseName);
        var Mykeys = []
     const a = await db.collection(`${c}`)
     a.forEach(element => {
             Mykeys.push(element.name)
               })
               return Mykeys;
                }
                catch(err){
                    console.log('err',err)
                    return false
                }
            
            }
    
  

            const fetchchannelmessage = async(c)=> {
                try{
            mes = []
            const {MongoClient, ObjectId} = require('mongodb')
            const connectionURL = 'mongodb://127.0.0.1:27017'
            const databaseName = 'channel';
            const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
            const db = await client.db('channel');
            const res = await db.collection(c).find({}).toArray()
            res.forEach(elm =>{
                if(elm.message){
                    mes.push(elm.message)
                }
            })
            console.log(mes)
            return mes
            }
                
                    catch(err){
                        console.log('err',err)
                        return false
                    }
                
                }
    module.exports ={
       dbc,
       signuppost,
       logincheck,
       createchannel,
       fetchchannel,
       fetchchanneldata,
       fetchchannelmessage
    }