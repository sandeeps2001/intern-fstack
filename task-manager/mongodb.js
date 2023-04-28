const { NULL } = require("sass");
//superadmin
const dbc = async () => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "loyalytics";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    const s = await db
      .collection("cred")
      .findOne({ _id: new ObjectId("6436abb0f4a169a7d4499ace") });
    return s;
  } catch (err) {
    console.log("err", err);
  }
};
//signup
const signuppost = async (e, p) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "loyalytics";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    const res = await db.collection("test").insertOne({
      email: `${e}`,
      password: `${p}`,
    });
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};
//login
const logincheck = async (e, p) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "loyalytics";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    const lresult = await db
      .collection("test")
      .findOne({ email: `${e}`, password: `${p}` });
    console.log(lresult);
    return lresult;
  } catch (err) {
    console.log("err", err);
  }
};

//create channel
const createchannel = async (c, d, e) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "channel";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    const res = await db.collection(`${c}`).insertOne({
      channelname: `${c}`,
      email: `${e}`,
      date: `${d}`,
    });
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const fetchchannel = async (e) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "acs";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    var Mykeys = [];
    const a = await db
      .collection(e)
      .find()
      .forEach(function (doc) {
        for (var key in doc) {
          if (Mykeys.indexOf(key) === -1) {
            Mykeys.push(key);
          }
        }
      });
    Mykeys.shift();
    console.log(Mykeys);
    return Mykeys;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};
const fetchchanneldata = async (c) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "channel";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    var Mykeys = [];
    const a = await db.collection(`${c}`);
    a.forEach((element) => {
      Mykeys.push(element.name);
    });
    return Mykeys;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};
const allchannelnames = async (c) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "channel";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    var Mykeys = [];
    const a = await db.listCollections().toArray();
    a.forEach((element) => {
      Mykeys.push(element.name);
    });
    Mykeys.sort();
    return Mykeys;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const fetchchannelmessage = async (c) => {
  try {
    mes = [];
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "channel";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("channel");
    const res = await db.collection(c).find({}).toArray();
    res.forEach((elm) => {
      if (elm.message) {
        mes.push(elm.message);
      }
    });
    console.log(mes);
    return mes;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const fetchchannelacs = async (cname, gmail) => {
  try {
    let arr = [];
    let b = `${cname}`;
    let myobj = {
      _id: 0,
      [b]: 1,
    };
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017"; 
    const databaseName = "acs";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("acs");
    const res = await db
      .collection(`${gmail}`)
      .find({}, { projection: myobj })
      .toArray();
    res.forEach((ele) => {
      let s = Object.values(ele);
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

const messageupdate = async (oldvalue, newvalue, collection) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "acs";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("channel");
    const res = await db.collection(`${collection}`).updateOne(
      { message: oldvalue },
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

const messagedelete = async (value, collection) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "acs";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("channel");
    const res = await db
      .collection(`${collection}`)
      .deleteOne({ message: value });
    console.log("field deleted");
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const messagecreatembd = async (messagedata, collection) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("channel");
    console.log(collection);
    console.log(messagedata);
    const res = await db
      .collection(`${collection}`)
      .insertOne({ message: `${messagedata}` });
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const inviteuserswithacs = async (email, mainobj) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db("acs");
    const res = await db.collection(`${email}`).insertOne(mainobj);
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

const allmails = async()=>{
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "acs";
    const client = await MongoClient.connect(connectionURL, {
      useUnifiedTopology: true,
    });
    const db = await client.db(databaseName);
    let gmails = [];
    let mykeys = [];
    let obj = {
      mails : [],
      access : []
  };
    const a = await db.listCollections().toArray();
    a.forEach(async (element) => {
      gmails.push(element.name);
    });
    for(let arr of gmails){
      const b = await db.collection(arr).find().toArray()
        for(let doc of b ){
            mykeys.push(doc)
        }
    }
    obj['mails']= gmails
    obj['access']= mykeys
        //     console.log(doc)
        //         if (mykeys.indexOf(doc) === -1) {
        //           mykeys.push(doc);
        //         }
        //       }
        //       mykeys.shift();

        //     }
        //     console.log(mykeys)
        // }
    
    //   obj["email"] = arr;
    //   obj["access"] = mykeys;
    //   mainobj["data"] = obj;
    //   mykeys = [];
    //   gkeys.push(obj);
    //   console.log(gkeys);
    // });
    return obj

  }

catch (err) {
    console.log("err", err);
    return false;
  }



}
// const getuserswithacs = async(c)=> {
//     try{
//         const {MongoClient, ObjectId} = require('mongodb')
//         const connectionURL = 'mongodb://127.0.0.1:27017'
//         const databaseName = 'acs';
//         const client = await MongoClient.connect(connectionURL,{useUnifiedTopology:true});
//         const db = await client.db(databaseName);
//         let mainobj = {}
//         let gmails = []
//         let mykeys = []

//      const a = await db.listCollections().toArray()
//      a.forEach(element => {
//                gmails.push(element.name)
//      })
//      gmails.map(async(arr) => {
//         let obj= {}
//      const b = await db.collection(arr).find().forEach(function(doc) {
//         for(var key in doc) {
//             if(mykeys.indexOf(key) === -1) {
//                 mykeys.push(key);
//                 mykeys.shift()
//             }
//         }
//     })
//     obj['email'] = arr
//     obj['access'] = mykeys
//     mainobj['data'] = obj
//     mykeys = []
//     console.log(mainobj)
//         });
//                 }
//                 catch(err){
//                     console.log('err',err)
//                     return false
//                 }

//             }

//edit user
const edituseracs = async (email, mainobj) => {
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db("acs");
    await db.collection(`${email}`).drop()
    await db.collection(`${email}`).insertOne(mainobj)
    return true
  } catch (err) {
    console.log("err", err);
    return false;
  }
};



const allchannel = async()=>{
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const databaseName = "channel";
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    const db = await client.db(databaseName);
    let channelnames = [];
    let mainarr = []
    const a = await db.listCollections().toArray();
    a.forEach(async (element) => {
      channelnames.push(element.name);
    });
    console.log(channelnames)
for(let arr of channelnames){
  const b = await db.collection(arr).find().toArray()
    for(let doc of b ){
      let obj = {
        channelname : '',
        email : '',
        date : ''
    }
        obj.channelname = doc.channelname,
        obj.email = doc.email,
        obj.date = doc.date
     mainarr.push(obj)
        }
    }
    console.log(mainarr)
        //     console.log(doc)
        //         if (mykeys.indexOf(doc) === -1) {
        //           mykeys.push(doc);
        //         }
        //       }
        //       mykeys.shift();

        //     }
        //     console.log(mykeys)
        // }
    
    //   obj["email"] = arr;
    //   obj["access"] = mykeys;
    //   mainobj["data"] = obj;
    //   mykeys = [];
    //   gkeys.push(obj);
    //   console.log(gkeys);
    // });
    return mainarr

  }

catch (err) {
    console.log("err", err);
    return false;
  }



}

const deletechannel = async (channelname) => {
  let b = `${channelname}`;
  let myobj = {
    [b]: "",
  };
 let gmails = []
  try {
    const { MongoClient, ObjectId } = require("mongodb");
    const connectionURL = "mongodb://127.0.0.1:27017";
    const client = await MongoClient.connect(connectionURL, {useUnifiedTopology: true,});
    let db = await client.db("channel");
    await db.collection(`${channelname}`).drop()
    db = await client.db("acs");
    const d = await db.listCollections().toArray();
    d.forEach(async (element) => {
      gmails.push(element.name);
    });
    for(let doc of gmails){
      await db.collection(`${doc}`).updateOne({},{$unset : myobj})
    }
    return true
  } catch (err) {
    console.log("err", err);
    return false;
  }
};



module.exports = {
  dbc,
  signuppost,
  logincheck,
  createchannel,
  fetchchannel,
  fetchchanneldata,
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
  //    getuserswithacs
};
