<script setup>
const email = ref('');
const name = ref('');
</script>
<template>
    <div class = 'container'>
        <h1>invite user</h1>
        <input class = "name" type="text" placeholder="name"  v-model="name"  required>
        <input class = "email" type="text" placeholder="email"  v-model="email"  required>
        </div>
</template>

<style scoped>
.container{
    margin-top: 200px;
    margin-left: 650px;
}
input[type = text]{
width :30%;
padding : 20px;
box-sizing: border-box;
margin-top: 50px;
display: flex;
}

/* input[type = checkbox]{
            transform : scale(2);
                } */
.t{
    margin-left: 20px;
}

</style>