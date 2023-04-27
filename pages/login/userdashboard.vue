<script setup>
const gmail = ref('')
const router = useRouter()
function fetching(s){
    navigateTo(`/channel/${s}`)
}
const em = loginemail()
gmail.value = em.value
let res = await $fetch('/api/fetchchannels', {
    method: 'POST',
    body:{
       e : gmail.value
    }, 
})
</script>  

<template>
    <div>
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

.p{
    font-size :xx-large;
}
.cd{
    width:200px;
    height: 200px;
    
}
</style>