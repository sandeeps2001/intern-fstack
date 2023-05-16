<script setup>
// let authenticated
let gmail
definePageMeta({
    middleware : 'superadmin'
  })
let {data : cookie } = await useFetch('/api/authhandle/cookiegetter',{
     method: 'GET', 
      })
      if(cookie.value.SAemail){
    //    authenticated = true
       gmail = cookie.value.SAemail
      }
    //   else{
    //     navigateTo('/')
    //   }
const deletechannel = async(chname)=>{
    let {data : afterdelete} = await useFetch(`/api/delete/${chname}`, {
    method: 'DELETE'
})

if(afterdelete.value === true){
    window.location.reload()
}
}

let triggermodal = ref('')
let {data : allchannel , refresh } = await useFetch('/api/fetch/allchannels',{
    method: 'GET', 
    })
    console.log(allchannel.value)

let allchannelarray = ref(allchannel.value)
const createchannel = ()=>{
triggermodal.value  =  true
} 

const inviteuserspage = ()=>{
    navigateTo('/superadmin/inviteusers/')
}

const cname = ref('');
const createchannelpage = async () =>{
    if (!cname.value){
        alert('enter all credentials required')
        return
    }
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
const da = new Date();
let date = da.getDate() 
let month = months[d.getMonth()];
const fdate = `${date}`+ 'th' +' ' + `${month}`
let resp = await $fetch('/api/create/newchannel', {
    method: 'POST',
    body:{
       c : cname.value,
       d : fdate,
       e : gmail
    },
    
})
console.log(resp , "fromcreatingchannel")
if (resp === true){
    console.log("channel created")
    window.location.reload()
    triggermodal.value = false
}
else if(resp === "alreadyExists"){ 
    alert('duplicate channel name')
}
else{
    console.log("failed")
    alert('error creating channel')
}
}
const logoutfunction = async()=>{
    let {data : cookie } = await useFetch('/api/authhandle/logoutsuperadmin',{
     method: 'GET', 
      })
      if(cookie.value){
        navigateTo('/')
      }

}
</script>


<template>
     <div class = "main" v-show="!triggermodal">
        <button class = "logout" @click="logoutfunction()">LOGOUT</button>
        <div class = "nav" >
<button class = "inviteuserspage" @click="inviteuserspage()"> <h1>invite users</h1> </button>
<button class = "createchannelpage"> <h1>create channel </h1> </button>
<!-- <button class="createchannelbutton" ><span class ="j" @click="inviteusers()">inviteusers</span></button> -->
 <button class="createchannelbutton" ><span class ="j" @click="createchannel()">createchannel</span></button>
    </div>
    <table>
        <tr>
    <th><h2>ChannlName</h2></th>
    <th><h2>Created By</h2></th>
    <th><h2>Created At</h2></th>
    <th><h2>Action</h2></th>   
  </tr>
  <tr v-for="j in allchannelarray">
    <td>{{j.channelname }}</td>
    <td>{{j.email }}</td>
    <td>{{j.date }}</td>
    <td><button class="buttondelete" @click="deletechannel(j.channelname) ,refresh()">delete</button></td>
  </tr>
    </table>
    </div>
    <div class = "channelcontainer" v-show="triggermodal">
        <h2> create channel</h2>
        <input class = "channelname" type="text" placeholder="channelname" v-model="cname"  required>
        <button class = 'buttons' @click= "createchannelpage()">createchannel</button>
    </div>
</template>


<style lang="scss" scoped>


.cd{
    display: block;
    height: 50px;
    width: 40px;
}

td {
  border: 1px solid black;
font-size: x-large;

}
table th{
    border: 1px solid black;
}
table{
    width: 50%;
    margin-left: 400px;
    margin-top: 50px;
}
.channels:focus {
    background-color: white;
}

.inviteuserseditbutton{
    cursor:pointer;
}

.submit{
cursor: pointer;
margin-left: 1200px;
padding: 10px;
color: white;
font-size: larger;
background-color: blue;
}
/* .ccon{
    display: flex;
    margin-left: 750px;
    margin-top: 30px;
    
} */
.container{
    margin-top: 200px;
    padding-left: 800px;
}

.containeredit{
    margin-top: 100px;
    padding-left: 500px;
}
input[type = text]{
width :30%;
padding : 20px;
box-sizing: border-box;
margin-top: 50px;
display: flex;
}

/* input[type = checkbox]{
            transform : scale(2);
                } */

.submit{
margin-top: 50px;
}


.createchannelbutton{
    font-size: larger;
    margin-top: 200px;
    width: 200px;
    height: 40px;
    margin-left: 200px;
    position: absolute;
    background-color: blue;
 :hover{
    color: aliceblue;
 }
}

  .inviteuserspage{
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 600px;
  margin-top: 150px;
  :hover{
  color: blue ;
  }
  }
.nav{
    border: 2px solid black;
    width: auto;
    height: auto;
}
  .createchannelpage{
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 80px;
  :hover{
  color: blue ;
  }
  }

  .channelcontainer{
  margin-left:  700px;
  margin-top: 200px;
}
.channelname{
    width: 200px;
    height: 50px;
}
.buttons{
    background-color: blue;
    cursor: pointer;
    font-size: large;
    margin-left: 120px;
    margin-top: 30px;
    width: 180px;
    height: 40px;
    text-align: center;
    color: aliceblue;
}
.j{
    color: white;
    text-transform: uppercase;
    font-weight: bold;
}
.createchannelpage{
    :hover {
        color: blue;
    }
}

.logout{
    float:right;
}
</style>