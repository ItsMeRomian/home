<script setup lang="ts">
  const props = defineProps<{
    center?: boolean;
  }>();
  const icons = [
    {
      name: "simple-icons:github",
      link: "https://github.com/itsmeromian",
      event: "github",
    },
    {
      name: "simple-icons:linkedin",
      link: "https://www.linkedin.com/in/romiantairovski",
      event: "linkedin",
    },
    {
      name: "simple-icons:x",
      link: "https://twitter.com/itsmeromian",
      event: "twitter",
    },
  ];
</script>
<template>
  <div class="flex gap-3 text-3xl" :class="{ 'justify-center': props.center }">
    <NuxtLink
      target="_blank"
      v-for="icon in icons"
      :key="icon.name"
      :href="icon.link"
      data-umami-event="Social Icon Click"
      :data-umami-event-value="icon.event"
    >
      <Icon
        :name="icon.name"
        class="text-primary/90 transition-all duration-75 hover:text-primary"
      />
    </NuxtLink>
  </div>
</template>
