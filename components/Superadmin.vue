<script setup>
const email = ref('');
const password = ref('');
const login = async () =>{
let {data : res} = await useFetch('/api/auth',{
    method: 'POST',
    body:{
       e : email.value,
       p : password.value
    }
})
console.log(res.value)
if (res){
    const uemail = getemail()
    uemail.value = email.value
    navigateTo('/superadmin/second/')
}
else{
    navigateTo('/')
}
}
</script>
<template>
    <div>
    <div class = 'container'>
        <h2> Super Admin Login</h2>
        <input class = "email" type="text" placeholder="email" name ='email' v-model="email"  required>
        <input class = "password" type="text" placeholder="password" name ='password' v-model="password"  required>
        <button @click="login()" class="login"> login </button> 
    </div>
</div>
</template>

<style scoped>
input[type = text]{
width :30%;
padding : 20px;
box-sizing: border-box;
margin-top: 50px;
display: flex;
}
.container{
  margin-left:  700px;
  margin-top: 200px;
}
.login{
    background-color: blue;
    cursor: pointer;
    margin-left: 120px;
    margin-top: 30px;
    width: 100px;
    height: 40px;
    text-align: center;
    color: aliceblue;
}
</style>