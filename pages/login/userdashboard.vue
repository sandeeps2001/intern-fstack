<script setup>
let authentication = false
let Usergmail
let {data : cookie } = await useFetch('/api/logincookiegetter',{
     method: 'GET', 
      })
      if(cookie.value.loginemail){
        authentication = true
     Usergmail = cookie.value.loginemail
      }
      else{
        navigateTo('/login')
      }

const router = useRouter()
function fetching(s){
    navigateTo(`/channel/${s}`)
}
let availablechannels = await $fetch('/api/fetchchannels', {
    method: 'POST',
    body:{
       e : Usergmail
    }, 
})
const logoutfunction = async()=>{
    let {data : cookie } = await useFetch('/api/logout',{
     method: 'GET', 
      })
      if(cookie.value){
        navigateTo('/login')
      }

}
</script>  

<template>
    <div v-if="authentication">
        <button class = "logout" @click="logoutfunction()">LOGOUT</button>
       <p class = p> AVAILABLE CHANNELS </p>
    </div>
    <button class = "channels" v-for="channel in availablechannels" @click="fetching(channel)">
        <div class = "channellayout">
        <h1>{{channel}}</h1>
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
.channellayout{
    width:200px;
    height: 200px;
    
}
</style>