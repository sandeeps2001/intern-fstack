
<script setup>
const useChannelaccess = () => useState("channel", () => { })
const v = true
const c = ref('')
const read = ref('')
const write = ref('')
const del = ref('')
const name = ref('')
const email = ref('')
const channelname = ref('')
function fetching(channel){
    channelname.value = s
    c.value = channel
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
const hello  = useChannelaccess()
console.log(hello)
console.log(res,)
</script>




<template>
        
        {{ read }}
        {{ write }}
        {{ del }}
        <input class = "name" type="text" placeholder="name" v-model="name" required>
        <input class = "email" type="text" placeholder="email" v-model="email"  required>
        <p class = "p"> AVAILABLE CHANNELS </p>
        <button class = "channels" v-for="channel in res" @click="fetching(channel)">
        <div class = "cd">
        <h1> {{channel}} </h1>
        </div>
        </button>
        <div>
        <label> read</label>
        <input type = "checkbox" value="read" checked = "true" v-model="c.read"  >     
        <label > write</label>   
        <input type = "checkbox" value="write" v-model="write" >
        <label>delete</label>
        <input type = "checkbox" value="delete" v-model="del"  >
        </div>
    <button class = "submit">submit</button>
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
