<script setup>
import midd from '~/composables/midd';
const d = midd()
console.log(d)
</script>

<template>
    <div v-if="d">
    <invite/>
    </div>
</template>

