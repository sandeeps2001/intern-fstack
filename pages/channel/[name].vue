<script setup>
let LoggedInEmail
 definePageMeta({
    middleware : 'user'
  })
// let authentication = false
let {data : cookie } = await useFetch('/api/authhandle/logincookiegetter',{
     method: 'GET', 
      })
if(cookie.value.loginemail){
    // authentication = true
    LoggedInEmail = cookie.value.loginemail 
}
// else{
// navigateTo('/login')
// }
const router = useRouter()
let flag = ref('')
let Editmessage = ref('')
let messageid = ref('')
let read = ref('')
let  edit = ref('')
let  del = ref('')
let writter = ref('')
let EditMessageModal = ref('')
let createpostemodeal= ref('')
let PostNewmessage = ref('')
const routeURL = router.currentRoute.value.params
const ChannelName = routeURL.name  
console.log("inside dynamic")
let acs = await $fetch('/api/fetch/accesschannel', {
    method: 'POST',
    body:{
       cname : ChannelName,
       gmail : LoggedInEmail
    }
});
 
acs.forEach(element => {
    console.log(element)
   if(element === 'read'){
    read.value = true
   }
   if(element === 'write'){
    edit.value = true
   }
   if(element === 'delete') {
     del.value  = true
   }
});


let {data : WholeChannelMessage} = await useFetch('/api/create/channelmsg', {
    method: 'POST',
    body:{
       cname : ChannelName
    }
});

console.log(WholeChannelMessage.value.specific , "specific")
console.log(WholeChannelMessage.value.others , "others")
if(WholeChannelMessage.value.specific && read){
    flag.value = true
}
if(!read && edit && del){
  writter.value = true
}
function editmodal(id , message){
EditMessageModal.value = true
messageid.value = id
Editmessage.value = message
}

const editmodalupdate = async ()=>{
if (!Editmessage.value){
return 
}
let update = await $fetch('/api/edit/messageupdate', {
    method: 'POST',
    body:{
        id : messageid.value,
        newvalue : Editmessage.value,
    }
});
if (update === true){
    console.log("changes succesfull")
    Editmessage.value = null
    EditMessageModal.value = false
    window.location.reload()

}
else{
 console.log('unable to make changes')
}
}


const deleteFunction = async (_id)=>{
let del = await $fetch('/api/delete/messagedelete', {
    method: 'POST',
    body:{
        id : _id,
    }
});
if (del === true){
    console.log("deleted succesfully")
    window.location.reload()
}
else{
 console.log('unable to delete')
}
}

const createpostmodal = () => {
createpostemodeal.value = true
}


const createpost = async()=>{
    console.log(PostNewmessage.value)
    if(!PostNewmessage.value){
        createpostemodeal.value = false
        return
    }
    let {data :create} = await useFetch('/api/create/messagecreate', {
    method: 'POST',
    body:{
        messagedata : PostNewmessage.value,
        collection: ChannelName
    }
});
if(create.value === true){
    console.log("post created")
    createpostemodeal.value = false
    window.location.reload()
}
else{
console.log("post not created")
createpostemodeal.value = false
}
}
const logoutfunction = async()=>{
    let {data : cookie } = await useFetch('/api/authhandle/logout',{
     method: 'GET', 
      })
      if(cookie.value){
        navigateTo('/login')
      }

}

</script>
<template>
    <div class ="background">
    <button class = "logout" @click="logoutfunction()">LOGOUT</button>
    <div v-if="writter">
 <button v-show="edit" @click="createpostmodal()">create post</button>
    </div>
    <div v-else>
        <div v-show="!EditMessageModal">
    <div class= "head">channel -  {{ ChannelName }}</div>
    <div class = "parent" v-show="read"> 
    <div class = "othermessages" >
        <h1 class="channelmessages">CHANNEL MESSAGES</h1>
    <div v-show = "flag"  v-for="obj in WholeChannelMessage.others">
        <div class="messages">
        <h2>{{obj.message}}</h2>
        </div>
    </div>
    </div>
    <div class = "specificmessages">
    <h1 class = "yourmessages">YOUR MESSAGES</h1>
    <div v-show = "read" v-for="obj in WholeChannelMessage.specific">
        <div class="messages">
        <h2>{{obj.message}}</h2>
        <div v-show="!EditMessageModal">
    <button class = "edit" v-show="edit" @click ="editmodal(obj.id,obj.message)"> edit </button>
    <button class = "del" v-show="del" @click ="deleteFunction(obj.id)"> delete </button>
    </div>
    </div>
    </div>
        </div>
        </div>
        <div class = 'send'  v-show="edit">
            <input type= "text" class=" sendbox" v-model="PostNewmessage">
            <button class = "sendbutton" @click = "createpost()"> send </button>
            </div>
        </div>
    <div class = "emodalc" v-show="EditMessageModal">
  <input class = "inp"  type="text" placeholder="type here...." v-model="Editmessage">
  <br><br><button class="submit" @click = "editmodalupdate()"> submit </button>
    </div>
    <div class = "writepost" v-show="createpostemodeal">
  <input class = "inputpost"  type="text" placeholder="type here...." v-model="PostNewmessage">
  <br><br><button class="submitpost" @click = "createpost()"> submit </button>
    </div>
    </div>
    </div>
</template>


<style scoped >
*{
    padding: 0;
    margin: 0;
}
.head{
    text-align: center;
    font-size: 3em;
    text-transform : uppercase;
    background-color: rgb(0, 0, 0);
    color: white;
}
.submit{
    color: rgb(255, 255, 255);
    font-weight: bolder;
    text-transform: capitalize;
    width : 120px;
    height: 40px;
    background-color: blue;
}
.background{
    background: url("../../static/1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    width: 100vw;
    height: 100vh;
}
.edit{
    width:60px;
    height: 30px;
    margin-top: 20px;
    color:rgb(255, 255, 255);
    background-color: rgb(47, 0, 216);

}
.del{
    width:60px;
    height: 30px;
margin-top: 20px;
color:rgb(255, 253, 253);
    background-color: rgb(255, 0, 0);
    margin-right: 10px;
}
.channelmessages{
    text-align:center;
    align-items: center;
border-bottom-style :double ;
border-color:rgb(0, 0, 0);
}
h1.channelmessages {
    color: white;
    background-color: black;
    font-style: italic;
    font-family: cursive
}
h1.yourmessages {
    color: white;
    background-color: black;
    font-style: italic;
    font-family: cursive
}
.yourmessages{
    text-align:center;
border-bottom-style :double ;
border-color:rgb(0, 0, 0);
}
.parent{
    margin-top: 50px;
    margin-left: 350px;
    display: flex;
}
.send{
    margin-left: 350px;
 display: flex;
}
.sendbutton{
    font-size: larger;
    font-weight: bold;
    color: rgb(0, 0, 0);
    margin-top: 40px ;
    height : 50px;
    border : none;
    width: 80px;
    margin-left: 10px;
    background: rgb(46, 228, 22);
}
.messages{
    justify-content: space-between;
    display: flex;
    border-bottom: 2px solid black;
    text-align: center;
}
.messages h2{
    margin : 20px 50px;
    word-break: break-all;
    
}
.sendbox{
    margin-top: 40px ;
    width: 72%;
    height : 50px;
}
.othermessages{
    color: rgb(0, 0, 0);
    font-size: larger;
background-color: rgba(193, 226, 245, 0.5);
display: flex;
width : 600px;
flex-direction: column;
border: 2px solid black;
font-weight: bold;
}
.specificmessages{
  
background-color:  rgba(139, 231, 136, 0.377);
margin-left: 110px; 
font-size: larger; 
flex-direction: column;  
display: flex;
width : 600px;
border: 2px solid black;
font-weight: bolder;
}
.logout{
    float: right;
    height: 55px;
    width: 80px;

}
.emodalc{
    background-color: rgb(12, 226, 12);
    margin-left: 800px;
    width: 300px;
    height: 300px;
}
.inp{
    margin-top: 80px;
    margin-left: 20px;
    padding: 20px;
}
.submit{
    margin-left: 20px;
}
.inputpost{
    margin-top: 80px;
    margin-left: 20px;
    padding: 20px;
}
.submitpost{
    margin-left: 20px;
}
.writepost{
    background-color: blue;
    margin-left: 700px;
    width: 300px;
    height: 300px;
}

</style>