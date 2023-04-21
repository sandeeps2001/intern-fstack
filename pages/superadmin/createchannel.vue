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
let date = da.getDate() 
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
    <div class = "container">
        <h2> create channel</h2>
        <input class = "channelname" type="text" placeholder="channelname" v-model="cname"  required>
        <button class = 'buttons' @click= "cchannel()" >createchannel</button>
    </div>
</template>

<style scoped>
.container{
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
    margin-left: 120px;
    margin-top: 30px;
    width: auto;
    height: auto;
    text-align: center;
    color: aliceblue;
}

</style>