<script setup>
// let authenticated = false
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
let triggermodal = ref('')
let name = ref('')
let email = ref('')
let editusers = ref('')
let UnformattedUserAccess = []
let UserAccess = []
let ObjectArrayforUsers = {}
let invitedusers = ref([])
let channelname = ref('')
let read = ref('')
let write= ref('')
let del = ref('')
let firstinviteuser = ref('')
 let channelaccess = {
    channel:{}
 }
 let{data : res , refresh : refreshchannelacess } = await useFetch('/api/fetch/fetchallchanels', {
     method: 'GET',
 })
 
 let {data : allchannel , refresh } = await useFetch('/api/fetch/allchannels',{
    method: 'GET', 
    })

let onlychannelnames = allchannel.value 

 res.value.forEach(elm=>{
     channelaccess.channel[elm] = {
     read : false,
     write: false,
     del :  false
 }
 })


 const submitiu = async () =>{
  if(!email.value){
    return
}
let invitestatus = await $fetch('/api/create/inviteuserswithacs', {
    method: 'POST',
    body:{
       e : email.value,
       arr : res.value,
       obj : channelaccess
    },
    
})
if (invitestatus === true){
    console.log("channel Access created")
    window.location.reload()
    firstinviteuser.value = false
    triggermodal.value = false
}
if (invitestatus === "Duplicateemail"){
    alert('User EMAIL Already Exists')
} 
else{
    console.log("failed")
}
}


 const editchannelemail = ref('')
 let permission = ref('')
 function editUserAccess(editchannelemailID , permissions){
    permission.value = permissions
    onlychannelnames.forEach(channelnamef=>{
        console.log(channelnamef.channelname , "from inside foreach")
    if(permission.value[channelnamef.channelname]){
    let arrayaccess = permission.value[channelnamef.channelname].split(" ")
    arrayaccess.forEach(elm =>{
    if(elm === "read"){
        channelaccess.channel[channelnamef.channelname].read = true
    }
    if(elm === "write"){
        channelaccess.channel[channelnamef.channelname].write = true
    }
    if(elm === "delete"){
        channelaccess.channel[channelnamef.channelname].del = true
    }
    })
   } 
})  
console.log(permissions , "fromfrontend2")
 editusers.value = true
 triggermodal.value = true
 editchannelemail.value = editchannelemailID

 }
let {data : WholeUserData , refresh : refresh2} = await useFetch('/api/fetch/allmails', {
     method: 'GET', 
 })
 let permissions = []
 console.log(WholeUserData.value, "from frontend")
 let AllEmailsOfUsers = WholeUserData.value.mails
 for(let i = 0 ; i<WholeUserData.value.access.length ; i++){
 delete WholeUserData.value.access[i]._id
 delete WholeUserData.value.access[i].key
 UnformattedUserAccess.push(Object.keys(WholeUserData.value.access[i]))
 permissions.push(WholeUserData.value.access[i])
 }
 UnformattedUserAccess.forEach(elm=>{
     UserAccess.push(elm.toString())
 })
 //console.log(UnformattedUserAccess[0].toString())
 
 
 AllEmailsOfUsers.forEach((elm , index)=> {
     ObjectArrayforUsers = {}
 ObjectArrayforUsers['email'] = elm
 ObjectArrayforUsers['UserAccess'] = UserAccess[index]
 ObjectArrayforUsers['permissions'] = permissions[index]
 invitedusers.value.push(ObjectArrayforUsers)
 })

 

 function fetching(channelnamef){
    channelname.value = channelnamef
   read.value = channelaccess.channel[channelnamef].read 
   write.value = channelaccess.channel[channelnamef].write
   del.value = channelaccess.channel[channelnamef].del
}


   function readchecklistener(event){
      channelaccess.channel[channelname.value].read = event
 }
 function writechecklistener(event){
      channelaccess.channel[channelname.value].write = event
 }
 function delchecklistener(event){
      channelaccess.channel[channelname.value].del = event
 }

 const inviteusers = async()=>{
triggermodal.value = true
firstinviteuser.value = true
 }

 const editsubmit = async ()=> {

let afteredit = await $fetch('/api/edit/editusersacs', {
    method: 'POST',
    body:{
       e : editchannelemail.value,
       arr : res.value,
       obj : channelaccess
    },
    
})
if (afteredit === true){
    console.log("channel edit successfull")
    window.location.reload()
    editusers.value = false
}
else{
    console.log("failed")
}
}

const createchannelpage = ()=>{
    navigateTo('/superadmin/createchannel/')
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
<button class = "inviteuserspage"> <h1>invite users</h1> </button>
<button class = "channelpage" @click = "createchannelpage()"> <h1>create channel </h1> </button>
<button class="InviteUsersButton" ><span class ="j" @click="inviteusers()">inviteusers</span></button>
<!-- <button class="InviteUsersButton" ><span class ="j" @click="createchannel()">createchannel</span></button> -->
    </div>
    <div class="ivnviteddetails">
     <table>
     <tr>
     <th><h2>Email</h2></th>
     <th><h2>Channel Access</h2></th>
     <th><h2>Action</h2></th>   
   </tr>
   <tr v-for="i in invitedusers">
     <td>{{i.email}}</td>
     <td>{{i.UserAccess}}</td>
     <td><button class = "inviteuserseditbutton" @click="editUserAccess(i.email , i.permissions)" >edit</button></td>
   </tr>
 
     </table>
     </div>
    </div>
     <div class="ivmodal" v-show="editusers">
       <div class = "containeredit">
         <h1>Edit User</h1>
         <p class = "p"><h2>AVAILABLE CHANNELS </h2></p>
         <div class = "cd">
         <button class = "channels" v-for="channel in res" @click="fetching(channel)">
         <div class = "channelshow">{{channel}}</div>
        </button> 
        </div>
         <div>
             <div class = "cb" v-show="channelname">
         <label class = "G"> read </label>
         <input type = "checkbox" value="read" v-model= "read" @change="readchecklistener($event.target._modelValue)" >     
      <label class = "G"> write</label>   
         <input type = "checkbox" value="write" v-model="write" @change="writechecklistener($event.target._modelValue)"   >
         <label class = "G">delete</label>
         <input type = "checkbox" value="delete" v-model="del" @change="delchecklistener($event.target._modelValue)" > 
         </div>
         </div>
         <button class = "submit" @click="editsubmit()">submit</button>
     </div>
     </div>
     <div class=" iv modal" v-show="firstinviteuser">
      <div class = "container">
        <h1>Invite Users</h1>
        <input class = "name" type="text" placeholder="name" v-model="name" required>
        <input class = "email" type="text" placeholder="email" v-model="email"  required>
        <p class = "p"><h2>AVAILABLE CHANNELS </h2></p>
        <div class = "cd">
        <button class = "channels" v-for="channel in res" @click="fetching(channel)">
        <h1>{{channel}}</h1>
    </button>
        </div>
        <div>
            <div class = "cb" v-show="channelname">
        <label class = "G"> read </label>
        <input type = "checkbox" value="read" v-model= "read" @change="readchecklistener($event.target._modelValue)" >     
     <label class = "G"> write</label>   
        <input type = "checkbox" value="write" v-model="write" @change="writechecklistener($event.target._modelValue)"   >
        <label class = "G">delete</label>
        <input type = "checkbox" value="delete" v-model="del" @change="delchecklistener($event.target._modelValue)" > 
        </div>
        </div>
           <button class = "submit" @click="submitiu()">submit</button>
    </div>
    </div>
</template>


<style lang="scss" scoped>
.cd{
    display: flex;
    
}
.channels{
    margin-left: 20px;
}
.channelshow{
    height: 50px;
    font-size: x-large;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
margin-left: 600px;
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
    margin-top: 100px;
    padding-left: 650px;
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


.InviteUsersButton{
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
padding-right: 10px;
  padding-left: 10px;
  border: 2px solid black;
  cursor: pointer;
  background: none;
  padding-right: 10px;
  padding-left: 10px;
  border: 2px solid black;
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
    background-color: lightgrey;
}
  .channelpage{
  padding-right: 10px;
  padding-left: 10px;
  border: 2px solid black;
  cursor: pointer;
  background: none;
  margin-left: 80px;
  :hover{
  color: blue ;
  }
  }

  .channelcontainer{
  margin-left:  300px;
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
.logout{
    float:right
}
</style>
