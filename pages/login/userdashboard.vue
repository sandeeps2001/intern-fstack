<script setup>
const router = useRouter()
function fetching(s){
    navigateTo(`/channel/${s}`)
}
const em = getemail()
const gmail = em.value
let res = await $fetch('/api/fetchchannels', {
    method: 'POST',
    body:{
       e : gmail
    }, 
})
</script>  

<template>
    <div>
       <p class = p> AVAILABLE CHANNELS </p>
    </div>
    <button class = "channels" v-for="size in res" @click="fetching(size)">
        <h1> {{size}} </h1>
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
</style>