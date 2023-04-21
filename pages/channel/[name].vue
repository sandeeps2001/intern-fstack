<script setup>
const router = useRouter()
const d = router.currentRoute.value.params
const c = d.name  
let res = await $fetch('/api/channelmsg', {
    method: 'POST',
    body:{
       cname : c
    }
});
</script>
<template>
    <div>
        {{ c }}
    <div class="messages" v-for="d in res">
        {{ d }}
    <button > edit </button>
    <button> delete </button>
    </div>
    </div>
</template>


<style setup>
.messages{
width : max-width;
height : 100px;
border: 2px solid black;
}

</style>