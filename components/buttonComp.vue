<template>
  <span
    class="text-xl font-bold py-3 px-4 rounded-md cursor-pointer shadow-xl transition-all duration-50"
    :class="
      props.light
        ? 'bg-trimary/50 hover:bg-trimary/80'
        : 'bg-secondary  hover:bg-secondary/50'
    "
    @click="() => props.action && props.action()"
  >
    <a v-if="props.href" :href="props.href" target="_blank">
      {{ props.title }}
    </a>
    <template v-else>
      {{ props.title }}
    </template>
  </span>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  action?: () => void;
  href?: string;
  light?: boolean;
}>();
</script>
