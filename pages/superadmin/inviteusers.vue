<script setup>
import midd from '~/composables/midd';
const d = midd()
</script>

<template>
    <div v-if="d">
        <Invite/>
    </div>
</template>