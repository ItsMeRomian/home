<template>
  <div class="mx-auto max-w-screen-xl">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  const { initialize } = useGtag();
  onMounted(() => {
    initialize();
    localStorage.currentTheme = "dark";
    document.documentElement.classList.toggle(
      "dark",
      localStorage.currentTheme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
</script>
