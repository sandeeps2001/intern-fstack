<script setup>
const oib = ref('')
const ocb = ref('')
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
const rese = reactive({
    a:{
        l: {
            k:0
        }
    }
});
// let invited = await $fetch('/api/getinviteuserswithacs', {
//     method: 'POST',
//     body:{
//        e : email.value,
//     },
    
// })

let channelaccess = {
   channel:{}
}


const em = getemail()
const gmail = em.value
let {data: res, refresh: lol} = await useFetch('/api/fetchallchanels', {
    method: 'POST',
    body:{
       e : gmail
    }, 
})
lol()
res.forEach(elm=>{
    channelaccess.channel[elm] = {
    read : false,
    write: false,
    del :  false
}
})

const inviteuserspage = () =>{
ocb.value = false
oib.value = true
}
const inviteusers = () =>{
oib.value = false
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
oib.value = true

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
    ocb.value = true
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
  ocb.value = false
  cc.value = true
  on.value = true
}

function createchannelpage(){
    oib.value =false
    ocb.value = true
}
</script>

<template>
    <div class = "nav" v-show="!on">
<button class = "iuser" @click="inviteuserspage()"> <h1>invite users</h1> </button>
<button class = "cchannel" @click = "createchannelpage()"> <h1>create channel </h1> </button>
<button class="ruser" v-show="oib"><span class ="j" @click="inviteusers()">inviteusers</span></button>
<button class="ruser" v-show="ocb"><span class ="j" @click="createchannel()">createchannel</span></button>
    </div>
    <div class="ivnviteddetails" v-show="oib">
    <table>
    <tr>
    <th><h2>Email</h2></th>
    <th><h2>Access</h2></th>
    <th><h2>Action</h2></th>   
  </tr>
  <tr>
    <td><p class="c"></p></td>
    <td><p class="c"></p></td>
    <td><p class="c"></p></td>
  </tr>

    </table>
    </div>
    <div class="ivnviteddetails" v-show="ocb">
    <table>
        <tr>
    <th><h2>ChannlName</h2></th>
    <th><h2>Created By</h2></th>
    <th><h2>Created At</h2></th>
    <th><h2>Action</h2></th>   
  </tr>
  <tr>
    <td><p class="c"></p></td>
    <td><p class="c"></p></td>
    <td><p class="c"></p></td>
    <td><p class="c"></p></td>
  </tr>

    </table>
    </div>

    <div class=" iv modal" v-show="iu">
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
    display: block;
    height: 50px;
    width: 40px;
}

table, th, td {
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
.j{
    color: white;
    text-transform: uppercase;
    font-weight: bold;
}
</style>