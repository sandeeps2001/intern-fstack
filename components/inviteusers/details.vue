<script setup>
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
let res = await $fetch('/api/fetchchannels', {
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
</script>




<template>
    {{ channelaccess.channel.read }}
        <input class = "name" type="text" placeholder="name" v-model="name" required>
        <input class = "email" type="text" placeholder="email" v-model="email"  required>
        <p class = "p"> AVAILABLE CHANNELS </p>
        <button class = "channels" v-for="channel in res" @click="fetching(channel)">
        <div class = "cd">
        <h1> {{channel}} </h1>
        
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
    <button class = "submit" @click="submit()">submit</button>
</template>

<style scoped>

.t{
    margin-left: 20px;
}
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
.ccon{
    display: flex;
    margin-left: 750px;
    margin-top: 30px;
    
}
.container{
    margin-top: 200px;
    margin-left: 650px;
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
.t{
    margin-left: 20px;
}

</style> 
