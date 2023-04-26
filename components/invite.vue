<script setup>
const on = ref('')
const iu = ref('')
const cc = ref('')
const trigger = ref('')
const read = ref('')
const write = ref('')
const del = ref('')
const v = true
const c = ref('')
const name = ref('')
const email = ref('')
let channelname = ref('')
let channelaccess = {
   channel:{}
}


const em = getemail()
const gmail = em.value
let res = await $fetch('/api/fetchallchanels', {
    method: 'POST',
    body:{
       e : gmail
    }, 
})

res.forEach(elm=>{
    channelaccess.channel[elm] = {
    read : false,
    write: false,
    del :  false
}
})

const inviteusers = () =>{
on.value = true
iu.value = true
}
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
console.log(channelaccess)
console.log(channelaccess.channel.A)


const submitiu = async () =>{
  if(!email.value){
    trigger.value = true
    return
}
else{
  trigger.value = false
}
on.value = false
iu.value = false

let dress = await $fetch('/api/inviteuserswithacs', {
    method: 'POST',
    body:{
       e : email.value,
       arr : res,
       obj : channelaccess
    },
    
})
if (dress === true){
    console.log("channel access created")
}
else{
    console.log("failed")
}
}


//create channel
import { getemail } from '~/composables/superadmin';

const cname = ref('');
console.log(cname)
const cchannel = async () =>{
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
const em = getemail()
const gmail = em.value
let bus = await $fetch('/api/newchannel', {
    method: 'POST',
    body:{
       c : cname.value,
       d : fdate,
       e : gmail
    },
    
})
if (bus === true){
    console.log("database created")
    on.value = false
    cc.value = false
}
else{
    console.log("failed")
}
}
function createchannel(){
  cc.value = true
  on.value = true
}
</script>

<template>
    <div class = "nav" v-show="!on">
<button class = "iuser" > <h1>invite users</h1> </button>
<button class = "cchannel" @click = "createchannel()"> <h1>create channel </h1> </button>
<button class="ruser"><span class ="j" @click="inviteusers()">inviteusers</span></button>
    </div>
    <div class=" iv modal" v-show="iu">
      <div class = "container">
        <h1>Invite Users</h1>
        <input class = "name" type="text" placeholder="name" v-model="name" required>
        <input class = "email" type="text" placeholder="email" v-model="email"  required>
        <p class = "p"> AVAILABLE CHANNELS </p>
        <button class = "channels" v-for="channel in res" @click="fetching(channel)">
        <div class = "cd">
        <h1>{{channel}}</h1>
        </div>
        </button>
        <div>
            <div v-show="channelname">
        <label> read</label>
        <input type = "checkbox" value="true" v-model= "read" @change="readchecklistener($event.target._modelValue)" >     
     <label > write</label>   
        <input type = "checkbox" value="write" v-model="write" @change="writechecklistener($event.target._modelValue)"   >
        <label>delete</label>
        <input type = "checkbox" value="delete" v-model="del" @change="delchecklistener($event.target._modelValue)" > 
        </div>
        </div>
    </div>
    <button class = "submit" @click="submitiu()">submit</button>
    </div>
    <div class = "channelcontainer" v-show="cc">
        <h2> create channel</h2>
        <input class = "channelname" type="text" placeholder="channelname" v-model="cname"  required>
        <button class = 'buttons' @click= "cchannel()" >createchannel</button>
    </div>

</template>


<style lang="scss" scoped>

.cd{
    height: 50px;
    width: 40px;
}
.channels:focus {
    background-color: white;
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

.ruser{
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

  .iuser{
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
  .cchannel{
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
</style>