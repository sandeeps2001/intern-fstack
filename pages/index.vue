<script setup>
  const config = useRuntimeConfig();

</script>
<template>
    <div>
      {{ config.public.dbUser }}
      <Superadmin />
    </div>
  </template>
  
