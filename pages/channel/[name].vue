<script setup>
const router = useRouter()
let editvalue = ref('')
let read = ref('')
let  edit = ref('')
let  del = ref('')
let writter = ref('')
let emodal = ref('')
let datachange = ref('')
let createpostemodeal= ref('')
let postvalue = ref('')
const k = router.currentRoute.value.params
const c = k.name  
console.log("inside dynamic")
const email = loginemail()
let acs = await $fetch('/api/accesschannel', {
    method: 'POST',
    body:{
       cname : c,
       gmail : email.value
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


let res = await $fetch('/api/channelmsg', {
    method: 'POST',
    body:{
       cname : c
    }
});
if(!read && edit && del){
  writter.value = true
}
function editmodal(d){
emodal.value = true
datachange.value = d
}

const editmodalupdate = async ()=>{
if (!editvalue.value){
return 
}
let update = await $fetch('/api/messageupdate', {
    method: 'POST',
    body:{
        oldvalue : datachange.value,
        newvalue : editvalue.value,
        collection: c
    }
});
if (update === true){
    console.log("changes succesfull")
    editvalue.value = null
    emodal.value = false

}
else{
 console.log('unable to make changes')
}
}


const dlefunc = async (d)=>{
let del = await $fetch('/api/messagedelete', {
    method: 'POST',
    body:{
        value : d,
        collection: c
    }
});
if (del === true){
    console.log("deleted succesfully")
    

}
else{
 console.log('unable to delete')
}
}

const createpostmodal = () => {
createpostemodeal.value = true
}


const createpost = async()=>{
    console.log(postvalue.value)
    if(!postvalue.value){
        createpostemodeal.value = false
        return
    }
    let create = await $fetch('/api/messagecreate', {
    method: 'POST',
    body:{
        messagedata : postvalue.value,
        collection: c
    }
});
if(create === true){
    console.log("post created")
    createpostemodeal.value = false
}
else{
console.log("post not created")
createpostemodeal.value = false
}
}



</script>
<template>
    <div v-if="writter">
    <button>CREATE POST</button>
    </div>
    <div v-else>
        <div v-show="!emodal">
    <h1>channel {{ c }} {{ postvalue }}</h1>
    <button v-show="edit" @click="createpostmodal()">create post</button> 
    <div v-show = "read" class="messages" v-for="d in res">
        <h3>{{d}}</h3>
        <div v-show="!emodal">
    <button v-show="edit" @click ="editmodal(d)"> edit </button>
    <button v-show="del" @click ="dlefunc(d)"> delete </button>
    </div>
    </div>
        </div>
    <div class = "emodalc" v-show="emodal">
  <input class = "inp"  type="text" placeholder="type here...." v-model="editvalue">
  <br><br><button class="submit" @click = "editmodalupdate()"> submit </button>
    </div>
    <div class = "writepost" v-show="createpostemodeal">
  <input class = "inputpost"  type="text" placeholder="type here...." v-model="postvalue">
  <br><br><button class="submitpost" @click = "createpost()"> submit </button>
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