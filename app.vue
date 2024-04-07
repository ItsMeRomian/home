<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const { initialize } = useGtag();
onMounted(() => {
  initialize();
});
</script>
