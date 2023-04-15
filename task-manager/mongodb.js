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

    module.exports ={
       dbc,
       signuppost,
       logincheck
    }