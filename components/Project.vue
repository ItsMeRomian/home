<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 w-full text-left mb-5 rounded-xl group"
    v-if="data.name"
  >
    <div
      :class="{
        'order-2 md:translate-x-[-.25rem] md:translate-y-[-.05rem]': flip,
        'md:translate-x-[.25rem] md:translate-y-[.05rem]': !flip,
      }"
      class="relative p-4 flex flex-col rounded-md z-10 shadow-lg md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:transition-all md:duration-200 bg-secondary"
      @click="() => router.push(data.read)"
    >
      <div
        class="grow flex flex-col gap-1 md:gap-2"
        :class="{ 'md:text-right md:ml-5': flip }"
      >
        <h1 class="text-3xl font-bold" :class="{ 'mr-10': flip }">
          {{ data.name }}
        </h1>
        <p class="italic">{{ data.date }}</p>
        <p class="font-light">{{ data.description }}</p>
      </div>
      <div class="absolute top-0 right-0 p-4">
        <NuxtLink :to="data.read">
          <Icon name="mdi:arrow-top-right" class="mx-auto text-3xl" />
        </NuxtLink>
        <NuxtLink
          :to="button.link"
          v-for="button in data.actions"
          :key="button.link"
        >
          <Icon :name="`mdi:${button.name}`" class="mx-auto text-3xl" />
        </NuxtLink>
      </div>
    </div>
    <div
      :class="{
        'md:translate-x-[-.75rem] md:translate-y-[-.25rem]': !flip,
        'md:translate-x-[.75rem] md:translate-y-[.25rem]': flip,
      }"
      class="z-20 hidden md:block md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:transition-all md:duration-200"
    >
      <img
        :src="data.image"
        class="w-full h-full rounded-md"
        :alt="props.data.slug"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Project } from "~/server/api/project/[id]";
const router = useRouter();
const props = defineProps<{ data: Project; flip: Boolean }>();
</script>
