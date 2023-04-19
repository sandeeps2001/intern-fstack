<script setup>

</script>
<template>
<div class="btn-group">
    <button class="channel_button1">Button</button>
    <button class="channel_button2">Button</button>
    <button class="channel_button3">Button</button>
    <button class="channel_button4">Button</button>
  </div>
  </template>

  <style scoped>
  .btn-group{
    margin-left: 625px;
    margin-top: 30px;
}
.btn-group .channel_button1{
  background-color:  white; 
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
}
.btn-group .channel_button2{
  background-color:  white; 
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
}
.btn-group .channel_button3{
  background-color:  white; 
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
}
.btn-group .channel_button4{
  background-color:  white; 
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
}

.channel_button1:focus{
  background-color: blue;
  
}
.channel_button2:focus{
  background-color: blue;
  
}
.channel_button3:focus{
  background-color: blue;
  
}
.channel_button4:focus{
  background-color: blue;
  
}
.btn-group .channel_button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}
</style>