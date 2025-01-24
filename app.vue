<template>
  <div class="text-text bg-primary">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  const { initialize } = useGtag();
  onMounted(() => {
    initialize();
  });
</script>
