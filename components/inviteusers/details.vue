
<script setup>
const read = ref('')
const write = ref('')
const del = ref('')
const name = ref('')
const email = ref('')
const channelname = ref('')
function fetching(s){
    channelname.value = s
}
const obj = {
    emailID : email.value,
    channels : 
    {
       name : 'A',
       access : []

    }
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
    <!-- <div class = 'container'>
        <h1>invite user</h1>
    
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</div> -->

<!-- 
        {{ read }}
        {{ write }}
        {{ del }}
        <input class = "name" type="text" placeholder="name"  v-model="name" required>
        <input class = "email" type="text" placeholder="email" v-model="email"  required>
        <p class = "p"> AVAILABLE CHANNELS </p>
        <button class = "channels" v-for="size in res" @click="fetching(size)">
        <div class = "cd">
        <h1> {{size}} </h1>
        </div>
        </button>
        <div>
        <label> read</label>
        <input type = "checkbox" value="read" v-model="read"  >     
        <label > write</label>   
        <input type = "checkbox" value="write" v-model="write" >
        <label>delete</label>
        <input type = "checkbox" value="delete" v-model="del"  >
        </div>
        </div>
    <button class = "submit">submit</button> -->
</template>

<style scoped>

.t{
    margin-left: 20px;
}
.cd{
    height: 50px;
    width: 40px;
}
.channels:focus {
    background-color: white;
}

.submit{
cursor: pointer;
margin-left: 1200px;
padding: 10px;
color: white;
font-size: larger;
background-color: blue;
}
.ccon{
    display: flex;
    margin-left: 750px;
    margin-top: 30px;
    
}
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
