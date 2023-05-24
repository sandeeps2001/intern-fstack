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
let {data : availablechannels} = await useFetch('/api/fetch/fetchchannels', {
    method: 'GET',
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
    <div class ="back">       
        <button class = "logout" @click="logoutfunction()">LOGOUT</button>
       <p class = p> AVAILABLE CHANNELS </p>
       <div class="container">
    <button class = "channels" v-for="channel in availablechannels" @click="fetching(channel)">
        <div class = "channellayout">
        <p class="block1">{{channel}}</p>
        </div>
        </button>
        </div> 
        </div>
    </template>
<style scope>
.container{
    background-color: rgba(159, 114, 201, 0.082);
    display: flex;
    justify-content:space-evenly;
}
.block1{
    font-size: 4em;
}
.channels{
    height:  250px;
    width: auto;
}

.logout{
    float: right;
}

.p{
    font-size : 3em;
}
.channellayout{
    width:200px;
    height: 200px;
    
}
.channellayout:hover{
    color:blue;}
</style>