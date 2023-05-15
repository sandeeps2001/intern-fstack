<script setup>
const email = ref('');
const resp = ref('');
const password = ref('');
const login = async () =>{
    if (!email.value || !password.value){
        alert('enter all credentials required')
        return
    }
let res = await $fetch('/api/authhandle/loginserver', {
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
    <div class = 'container'>
        <div class = 'inv'>{{ resp }}</div>
        <h2> Login Page</h2>
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
.inv{
    color: red;
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