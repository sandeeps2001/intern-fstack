<script setup>
let authenticated = false
let {data : cookie } = await useFetch('/api/cookiegetter',{
     method: 'GET', 
      })
      if(cookie.value.SAemail){
       authenticated = true
      }
      else{
        navigateTo('/')
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
 let{data : res , refresh : refreshchannelacess } = await useFetch('/api/fetchallchanels', {
     method: 'GET',
 })
 
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
firstinviteuser.value = false
triggermodal.value = false
let dress = await $fetch('/api/inviteuserswithacs', {
    method: 'POST',
    body:{
       e : email.value,
       arr : res.value,
       obj : channelaccess
    },
    
})
if (dress === true){
    console.log("channel Access created")
    window.location.reload()
}
else{
    console.log("failed")
}
}


 const editchannelemail = ref('')
 function editUserAccess(editchannel){
 editusers.value = true
 triggermodal.value = true
 editchannelemail.value = editchannel
 }
let {data : WholeUserData , refresh : refresh2} = await useFetch('/api/allmails', {
     method: 'GET', 
 })
 let AllEmailsOfUsers = WholeUserData.value.mails
 for(let i = 0 ; i<WholeUserData.value.access.length ; i++){
 delete WholeUserData.value.access[i]._id
 UnformattedUserAccess.push(Object.keys(WholeUserData.value.access[i]))
 }
 UnformattedUserAccess.forEach(elm=>{
     UserAccess.push(elm.toString())
 })
 //console.log(UnformattedUserAccess[0].toString())
 
 
 AllEmailsOfUsers.forEach((elm , index)=> {
     ObjectArrayforUsers = {}
 ObjectArrayforUsers['email'] = elm
 ObjectArrayforUsers['UnformattedUserAccess'] = UserAccess[index]
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

let afteredit = await $fetch('/api/editusersacs', {
    method: 'POST',
    body:{
       e : editchannelemail.value,
       arr : res.value,
       obj : channelaccess
    },
    
})
if (afteredit === true){
    console.log("channel edit successfull")
    editusers.value = false
    window.location.reload()
}
else{
    console.log("failed")
}
}

const createchannelpage = ()=>{
    navigateTo('/superadmin/createchannel/')
}
const logoutfunction = async()=>{
    let {data : cookie } = await useFetch('/api/logoutsuperadmin',{
     method: 'GET', 
      })
      if(cookie.value){
        navigateTo('/')
      }

}
</script>

<template>
    <div v-show="authenticated">  
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
     <th><h2>UnformattedUserAccess</h2></th>
     <th><h2>Action</h2></th>   
   </tr>
   <tr v-for="i in invitedusers">
     <td>{{i.email}}</td>
     <td>{{i.UnformattedUserAccess}}</td>
     <td><button class = "inviteuserseditbutton" @click="editUserAccess(i.email)" >edit</button></td>
   </tr>
 
     </table>
     </div>
    </div>
     <div class="ivmodal" v-show="editusers">
       <div class = "containeredit">
         <h1>Edit User</h1>
         <p class = "p"><h2>AVAILABLE CHANNELS </h2></p>
         <button class = "channels" v-for="channel in res" @click="fetching(channel)">
         <div class = "cd">
         <h1>{{channel}}</h1>
         </div>
         </button>
         <div>
             <div class = "cb" v-show="channelname">
         <label class = "G"> read </label>
         <input type = "checkbox" value="true" v-model= "read" @change="readchecklistener($event.target._modelValue)" >     
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
        <button class = "channels" v-for="channel in res" @click="fetching(channel)">
        <div class = "cd">
        <h1>{{channel}}</h1>
        </div>
        </button>
        <div>
            <div class = "cb" v-show="channelname">
        <label class = "G"> read </label>
        <input type = "checkbox" value="true" v-model= "read" @change="readchecklistener($event.target._modelValue)" >     
     <label class = "G"> write</label>   
        <input type = "checkbox" value="write" v-model="write" @change="writechecklistener($event.target._modelValue)"   >
        <label class = "G">delete</label>
        <input type = "checkbox" value="delete" v-model="del" @change="delchecklistener($event.target._modelValue)" > 
        </div>
        </div>
           <button class = "submit" @click="submitiu()">submit</button>
    </div>
    </div>
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
  .channelpage{
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
