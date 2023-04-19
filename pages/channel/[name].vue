<script setup>
const router = useRouter()
const d = router.currentRoute.value.params
const c = d.name 
const login = async () =>{
let res = await $fetch('/api/loginserver', {
    method: 'POST',
    body:{
       e : email.value,
       p : password.value
    }
})
if (res === true){
    navigateTo('/login/userdashboard/');
}

if(res === false){
resp.value = "invalid user"
}
}

</script>
<template>
    <div>
    
    </div>
</template>