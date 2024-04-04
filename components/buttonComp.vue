<template>
  <span
    class="text-xl font-bold py-3 px-4 rounded-md cursor-pointer shadow-xl"
    :class="props.light ? 'bg-blueaccent ' : 'bg-secondary  hover:bg-black'"
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
