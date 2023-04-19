<script setup>
const inviteusers = () =>{
navigateTo('/superadmin/second/');
}
const createchannel = ()=>{
  navigateTo('/superadmin/createchannel/');
}
</script>

<template>
    <div class = "nav">
<button class = "iuser" > <h1>invite users</h1> </button>
<button class = "cchannel" @click = "createchannel()"> <h1>create channel </h1> </button>
<button class="ruser"><span class ="j" @click="inviteusers()">inviteusers</span></button>
</div>

</template>


<style lang="scss" scoped>
.ruser{
    font-size: larger;
    margin-top: 200px;
    width: 200px;
    height: 40px;
    margin-left: 200px;
    position: absolute;
    background-color: blue;
 :hover{
    color: aliceblue;
 }
}

  .iuser{
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 600px;
  margin-top: 150px;
  :hover{
  color: blue ;
  }
  }
.nav{
    border: 2px solid black;
    width: auto;
    height: auto;
}
  .cchannel{
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 80px;
  :hover{
  color: blue ;
  }
  }
</style>