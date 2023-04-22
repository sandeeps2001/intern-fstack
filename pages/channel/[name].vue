<script setup>
const router = useRouter()
let read = false
let  edit = false
let  del = false
let writter = false

const d = router.currentRoute.value.params
const c = d.name  
console.log("inside dynamic")
const email = loginemail()
let acs = await $fetch('/api/accesschannel', {
    method: 'POST',
    body:{
       cname : c,
       gmail : email.value
    }
});
console.log(acs)
acs.forEach(element => {
 let s =  Object.values(element)
 g = s.toString()
                        });
// acs.forEach(element => {
//    if(element === 'read'){
//     read = true
//    }
//    if(element === 'edit'){
//     edit = true
//    }
//    if(element === 'delete') {
//      del  = true
//    }
// });


let res = await $fetch('/api/channelmsg', {
    method: 'POST',
    body:{
       cname : c
    }
});
if(!read && edit && del){
  writter = true
}
</script>
<template>
    <div v-if="writter">
    <button>CREATE POST</button>
    </div>
    <div v-else>
    <h1>channel {{ c }} </h1>
    <button v-show="edit">create post</button> 
    <div v-show = "read" class="messages" v-for="d in res">
        <h3>{{ d }}</h3>
    <button v-show="edit"> edit </button>
    <button v-show="del"  > delete </button>
    </div>
    </div>
</template>


<style setup>
.messages{
width : max-width;
height : 100px;
border: 2px solid black;
}

</style>