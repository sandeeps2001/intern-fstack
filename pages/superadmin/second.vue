<script setup>
definePageMeta({
middleware: 'security'
})
</script>
<template>
    {{ auth }}
    <invite/>
</template>

