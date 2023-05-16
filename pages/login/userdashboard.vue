<script setup>
 definePageMeta({
    middleware : 'user'
  })
// let authentication = false
let Usergmail
let {data : cookie } = await useFetch('/api/authhandle/logincookiegetter',{
     method: 'GET', 
      })
      if(cookie.value.loginemail){
     Usergmail = cookie.value.loginemail
      }
    //   else{
    //     navigateTo('/login')
    //   }

const router = useRouter()
function fetching(channelname){
    navigateTo(`/channel/${channelname}`)
}
let availablechannels = await $fetch('/api/fetch/fetchchannels', {
    method: 'POST',
    body:{
       e : Usergmail
    }, 
})
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
       <p class = p> AVAILABLE CHANNELS </p>
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