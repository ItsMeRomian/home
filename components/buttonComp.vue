<template>
  <span
    class="duration-50 cursor-pointer rounded-md px-4 py-3 text-xl font-bold shadow-xl transition-all"
    :class="props.light ? 'bg-button hover:bg-button/50' : 'bg-button hover:bg-button/50'"
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
