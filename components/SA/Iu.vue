<script setup>
const email = ref('');
const name = ref('');
</script>
<template>
    <div>
        <div class = 'container'>
        <h1>invite user</h1>
        <input class = "name" type="text" placeholder="name"  v-model="name"  required>
        <input class = "email" type="text" placeholder="email"  v-model="email"  required>
        </div>
        <div class="btn-group">
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
</div>
<div class=" check">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="t">
  <label for="vehicle1"> read</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" class="t">
  <label for="vehicle2"> write</label>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" class="t">
  <label for="vehicle3"> delete</label>
</div>
<button class = "submit">submit</button>
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
.submit{
cursor: pointer;
margin-left: 1200px;
padding: 10px;
color: white;
font-size: larger;
background-color: blue;
}
.check{
    display: flex;
    margin-left: 750px;
    margin-top: 30px;
    
}
/* input[type = checkbox]{
            transform : scale(2);
                } */
.t{
    margin-left: 20px;
}
.btn-group{
    margin-left: 625px;
    margin-top: 30px;
}
.container{
  margin-left:  700px;
  margin-top: 200px;
}
.btn-group .button {
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

.btn-group .button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

.btn-group .button:hover {
  background-color: grey;
}
</style>