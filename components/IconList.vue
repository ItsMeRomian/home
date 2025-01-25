<script setup lang="ts">
  const props = defineProps<{
    center?: boolean;
  }>();
  const icons = [
    {
      name: "uil:github",
      link: "https://github.com/itsmeromian",
    },
    {
      name: "uil:linkedin",
      link: "https://www.linkedin.com/in/romiantairovski",
    },
    {
      name: "simple-icons:x",
      link: "https://twitter.com/itsmeromian",
    },
  ];
</script>
<template>
  <div class="flex gap-1 text-4xl" :class="{ 'justify-center': props.center }">
    <NuxtLink target="_BLANK" v-for="icon in icons" :key="icon.name" :to="icon.link">
      <Icon
        :name="icon.name"
        class="text-primary/90 transition-all duration-75 hover:text-primary"
      />
    </NuxtLink>
  </div>
</template>
