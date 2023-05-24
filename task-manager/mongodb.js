const { NULL } = require("sass");
const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = process.env.NUXT_PRIVATE_DB_USER;
const databaseName = "internproject";

//signup
const signuppost = async (e, p) => {
  try {
    let signal = "alreadysignedup"
    let flag = false
    let flag2 = true
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    let db = await client.db(databaseName);
    const checkifauthorized = await db.collection('useraccess').find({}).toArray();
    checkifauthorized .forEach((element) => {
      if(e === element.email){
        flag = true
        if(element.password){
          flag2 = false
        }
      }

    });
    if(flag === true && flag2 === true){
    await db.collection("useraccess").updateOne({email: e}, {$set:{password : p}});
    return true
  }
  else if(flag === true && flag2 === false){
    return signal
  }
  return false
  }
   catch (err) {
    console.log("err", err);
    return false;
  }
};

//login
const logincheck = async (e, p) => {
  try {
    let signal = 'please complete signup and comeback' 
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const lresult = await db.collection("useraccess").findOne({ email: e});
    if(!lresult.password){
      return signal
    }
    console.log(lresult);
    return lresult;
  } catch (err) {
    console.log("err", err);
  }
};

//create channel
const createchannel = async (c, d, e) => {
  try {
    let flag = true
    const signal = "alreadyExists"
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const res = await db.collection('channelmsg').find({}).toArray()
    res.forEach(elm=>{
      if(elm.channelname === c){
         flag = false
      }
    })
    if(flag === false){
      return signal
    }
    await db.collection('channelmsg').insertOne({
      channelname: c,
      email: e,
      date: d,
    });
    return true
  } catch (err) {
    console.log("err", err);
    return signal
  }
};

//userdashboardchannelnamedisplay
const fetchchannel = async (e) => {
  try {
    let channelnames
  const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
  const db = await client.db(databaseName);
  var Mykeys = [];
  console.log(e)
  const a = await db.collection('useraccess').find({email : e}).toArray()
  console.log(a , "raw")
  a.forEach(elm=>{
    delete elm._id 
    delete elm.email
    delete elm.key
    delete elm.password
  })
  a.forEach(elm=>{
    channelnames = Object.keys(elm) 
  })
console.log(channelnames)
return channelnames
} catch (err) {
    console.log("err", err);
    return false;
  }
};

//superadminallchannelsfetch
const allchannelnames = async (c) => {
  try {
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    var Mykeys = [];
    const a = await db.collection('channelmsg').find({}).toArray();
    a.forEach((element) => {
      if(element.channelname){
        Mykeys.push(element.channelname)
      }
    });
    Mykeys.sort();
    console.log(Mykeys, 'fromnewdatabase')
    return Mykeys;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const fetchchannelmessage = async (c , email) => {
  try {
    let msgkey 
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    let others = []
    let specific = []
    let obj ={}
    let allmessages = {}
    const db = await client.db(databaseName);
    const res = await db.collection('channelmsg').find({channel : c}).toArray();
    const arr = await db.collection('useraccess').find({email : email}).toArray();
    arr.forEach(elm=>{
      if(elm.key){
        msgkey = elm.key
      }
    })
    res.forEach((elm) => {
      obj = {}
       if (elm.key === msgkey) {
        obj['id'] = elm._id
        obj['message'] = elm.message 
        specific.push(obj)
       }
       else{
        obj['id'] = elm._id
        obj['message'] = elm.message
        others.push(obj) 
       }
      })
        allmessages['others']= others
         allmessages['specific']= specific
    //   }
    //   mes.push(obj)
    // });
    // console.log(mes ,"frombd");
    // return mes;
    // return res.filter(m=>m.message).map(m=>({id:m._id,message:m.message}))
    console.log(allmessages , "from fetchchannel messsage")
    return allmessages
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const fetchchannelacs = async (cname, gmail) => {
  try {
    let obj = {
      [cname] : ""
    }
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    let arr = [];
    const db = await client.db(databaseName);
    const res = await db.collection('useraccess').find({email : gmail}).toArray();
    res.forEach((ele) => {
      delete ele.email
      delete ele._id
      if(ele.password){
        delete ele.password
      }
      let s = ele[cname];
      console.log(s,'0check')
      let g = s.toString();
      let l = g.split(" ");
      l.forEach((element) => {
        arr.push(element);
      });
    });
    console.log(arr);
    return arr;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const messageupdate = async (id, newvalue) => {
  try {
    console.log(id, "from message update" )
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const res = await db.collection('channelmsg').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          message: newvalue,
        },
      }
    );
    console.log(res.modifiedCount);
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const messagedelete = async (id) => {
  try {
    console.log(id , "from message delete")
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const res = await db
      .collection('channelmsg')
      .deleteOne({ _id: new ObjectId(id) });
    console.log("field deleted");
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const messagecreatembd = async (messagedata, collection, email) => {
  try {
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const arr = await db.collection('useraccess').find({email : email}).toArray()
    let Key
    arr.forEach(elm=>{
      if(elm.key){
        Key = elm.key 
      }
    })
    await db.collection('channelmsg').insertOne({channel : collection, message: messagedata , key:Key });
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const inviteuserswithacs = async (mainobj) => {
  try {
    let flag = false
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db("internproject");
    const check = await db.collection('useraccess').find({}).toArray()
    check.forEach(elm=>{
      if(elm.email === mainobj.email){
        flag = true
      }
    })
    if(flag){
      return "Duplicateemail"
    }
    const res = await db.collection('useraccess').insertOne(mainobj);
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

//for getting all the emails with access in inviteusers
const allmails = async()=>{
  try {
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    let gmails = [];
    let mykeys = [];
    let obj = {
      mails : [],
      access : []
  };
    const a = await db.collection('useraccess').find({}).toArray();
    a.forEach(async (element) => {
      gmails.push(element.email);
      delete element.email
      delete element.password
      mykeys.push(element)
    });
    obj['mails']= gmails
    obj['access']= mykeys
    console.log(obj , 'romdb')
    return obj
  }

catch (err) {
    console.log("err", err);
    return false;
  }
}

//edit user
const edituseracs = async (emailId, mainobj) => {
  try {
    console.log(mainobj,'fromedituserdb')
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    const arr = await db.collection('useraccess').find({email : emailId}).toArray()
    arr.forEach(elm=>{
      if(elm.key){
      mainobj['key'] = elm.key
      }
      if(elm.password){
      mainobj['password'] = elm.password
      }
    })
    await db.collection('useraccess').deleteOne({email : emailId})
    await db.collection('useraccess').insertOne(mainobj)
    return true
  } catch (err) {
    console.log("err", err);
    return false;
  }
};


//get all channel and created by details
const allchannel = async()=>{
  try {
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    let channelnames = [];
    let mainarr = []
    let obj = {}
    const a = await db.collection('channelmsg').find({}).toArray();
    a.forEach(async (element) => {
      if(element.channelname){
      channelnames.push(element.channelname);
      }
    });
    console.log(channelnames , "romb")
for(let arr of channelnames){
  const b = await db.collection('channelmsg').find({channelname : arr}).toArray()
    for(let doc of b ){
     obj = {
        channelname : '',
        email : '',
        date : ''
    }
        obj.channelname = doc.channelname,
        obj.email = doc.email,
        obj.date = doc.date
        }
        mainarr.push(obj)
    }
    console.log(mainarr, "checckingdb")
    return mainarr
  }

catch (err) {
    console.log("err", err);
    return false;
  }



}

const deletechannel = async (channeln) => {
  console.log(channeln, '1st check')
  let myobj = {
    [channeln] : ""
  };
  try {
    console.log(myobj)
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    let db = await client.db(databaseName);
    await db.collection('channelmsg').deleteMany({channelname : channeln})
    await db.collection('channelmsg').deleteMany({channel : channeln})
    await db.collection('useraccess').updateMany({},{$unset :myobj})
    return true
  } catch (err) {
    console.log("err", err);
    return false;
  }
};



module.exports = {  
  signuppost,
  logincheck,
  createchannel,
  fetchchannel,
  fetchchannelmessage,
  fetchchannelacs,
  messageupdate,
  messagedelete,
  messagecreatembd,
  inviteuserswithacs,
  allchannelnames,
  allmails,
  edituseracs,
  allchannel,
  deletechannel
};
