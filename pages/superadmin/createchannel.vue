<script setup>
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
var date = da.getDate() 
let month = months[d.getMonth()];
const fdate = `${date}`+ 'th' +' ' + `${month}`
const em = getemail()
const gmail = em.value
let res = await $fetch('/api/newchannel', {
    method: 'POST',
    body:{
       c : cname.value,
       d : fdate,
       e : gmail
    },
    
})
if (res === true){
    console.log("database created")
}
else{
    console.log("failed")
}
}

</script>
<template>
    <div>
        <h2> create channel</h2>
        <input class = "channelname" type="text" placeholder="channelname" v-model="cname"  required>
        <button class = 'button' @click= "cchannel()" >createchannel</button>
    </div>
</template>