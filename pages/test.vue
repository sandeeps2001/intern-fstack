<script setup>
let res  = ref('')
let {data : cook } = await useFetch('/api/create/newchannel',{
    method: 'POST', 
    body:{
    c:'',
    d: '31st may',
    e:'sandy4adhi@gmail.com'
    }
    })
     res.value = cook.value

console.log(res.value)
</script>
<template>
    <div>
{{ res }}
    </div>
</template>