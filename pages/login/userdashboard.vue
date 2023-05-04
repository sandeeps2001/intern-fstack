<script setup>
let d = false
let {data : cook } = await useFetch('/api/logincookiegetter',{
     method: 'GET', 
      })
      if(cook.value.loginemail){
       d = true
      }
      else{
        navigateTo('/login')
      }
      console.log(cook.value)
const gmail = cook.value.loginemail
const router = useRouter()
function fetching(s){
    navigateTo(`/channel/${s}`)
}
let res = await $fetch('/api/fetchchannels', {
    method: 'POST',
    body:{
       e : gmail
    }, 
})
const logoutfunction = async()=>{
    let {data : cook } = await useFetch('/api/logout',{
     method: 'GET', 
      })
      if(cook.value){
        navigateTo('/login')
      }

}
</script>  

<template>
    <div v-if="d">
        <button class = "logout" @click="logoutfunction()">LOGOUT</button>
       <p class = p> AVAILABLE CHANNELS </p>
    </div>
    <button class = "channels" v-for="size in res" @click="fetching(size)">
        <div class = "cd">
        <h1>{{size}}</h1>
        </div>
        </button> 
    </template>
<style scope>
.channels{
    height:  auto;
    width: auto;
    margin-left : 100px
}

.logout{
    float: right;
}

.p{
    font-size :xx-large;
}
.cd{
    width:200px;
    height: 200px;
    
}
</style>