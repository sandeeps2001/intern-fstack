<script setup>
import midd from '~/composables/midd';
const d = midd()
console.log(d)
const logoutfunction = async()=>{
    let {data : cook } = await useFetch('/api/logoutsuperadmin',{
     method: 'GET', 
      })
      if(cook.value){
        navigateTo('/')
      }

}

</script>

<template>
    <div v-if="d">
    <button class = "logout" @click="logoutfunction()">LOGOUT</button>
    <invite/>
    </div>
</template>
<style>
.logout{
    float: right;
}
</style>

