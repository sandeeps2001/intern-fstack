<template>
<div class=" check">
    <input type="checkbox" id="vehicle1" name="read" value="read" class="t">
      <label for="vehicle1"> read</label>
      <input type="checkbox" id="vehicle2" name="write" value="write" class="t">
      <label for="vehicle2"> write</label>
      <input type="checkbox" id="vehicle3" name="delete" value="delete" class="t">
      <label for="vehicle3"> delete</label>
    </div>
    <button class = "submit">submit</button>
    </template>

    <style scoped>
    .t{
    margin-left: 20px;
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
</style>