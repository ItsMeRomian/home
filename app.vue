<template>
  <div class="bg-primary text-text">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const { initialize } = useGtag();
onMounted(() => {
  initialize();
});
</script>
