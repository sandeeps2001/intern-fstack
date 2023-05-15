<script setup>
let authentication = false
let {data : cookie } = await useFetch('/api/userget/logincookiegetter',{
     method: 'GET', 
      })
if(cookie.value.loginemail){
    authentication = true
}
else{
navigateTo('/login')
}

let LoggedInEmail = cookie.value.loginemail 
const router = useRouter()
let Editmessage = ref('')
let read = ref('')
let  edit = ref('')
let  del = ref('')
let writter = ref('')
let EditMessageModal = ref('')
let datachange = ref('')
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


let WholeChannelMessage = await $fetch('/api/create/channelmsg', {
    method: 'POST',
    body:{
       cname : ChannelName
    }
});
if(!read && edit && del){
  writter.value = true
}
function editmodal(message){
EditMessageModal.value = true
datachange.value = message
}

const editmodalupdate = async ()=>{
if (!Editmessage.value){
return 
}
let update = await $fetch('/api/edit/messageupdate', {
    method: 'POST',
    body:{
        oldvalue : datachange.value,
        newvalue : Editmessage.value,
        collection: ChannelName
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


const deleteFunction = async (message)=>{
let del = await $fetch('/api/delete/messagedelete', {
    method: 'POST',
    body:{
        value : message,
        collection: ChannelName
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
    let create = await $fetch('/api/create/messagecreate', {
    method: 'POST',
    body:{
        messagedata : PostNewmessage.value,
        collection: ChannelName
    }
});
if(create === true){
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
    <button class = "logout" @click="logoutfunction()">LOGOUT</button>
    <div v-show="authentication">
    <div v-if="writter">
    <button>CREATE POST</button>
    </div>
    <div v-else>
        <div v-show="!EditMessageModal">
    <h1>channel {{ ChannelName }}</h1>
    <button v-show="edit" @click="createpostmodal()">create post</button> 
    <div v-show = "read" class="messages" v-for="message in WholeChannelMessage">
        <h3>{{message}}</h3>
        <div v-show="!EditMessageModal">
    <button v-show="edit" @click ="editmodal(message)"> edit </button>
    <button v-show="del" @click ="deleteFunction(message)"> delete </button>
    </div>
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


<style setup>
.messages{
display: flexbox;
width : max-width;
height : 100px;
border: 2px solid black;
}

.logout{
    float: right;
}
.emodalc{
    background-color: blue;
    margin-left: 700px;
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