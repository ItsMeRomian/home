<template>
  <div
    class="grid grid-cols-1 w-full text-left mb-10 shadow-xl md:grid-cols-2"
    v-if="data.name"
  >
    <div
      class="p-4 flex flex-col rounded-lg bg-secondary z-10 md:translate-x-[1rem] md:translate-y-[0.5rem] md:hover:translate-x-0 md:hover:translate-y-0 md:transition-all md:duration-300 shadow-lg"
    >
      <div class="text grow">
        <h1 class="text-4xl font-bold">{{ data.name }}</h1>
        <p class="text-left project-date italic mb-2">{{ data.date }}</p>
        <p class="project-desc font-light text-left">{{ data.description }}</p>
      </div>
      <span class="buttons pb-2 mt-10 flex flex-row gap-2">
        <button-comp
          v-for="item in data.actions"
          :key="item.name"
          :href="item.link"
          :title="item.name"
          target="_BLANK"
          :light="true"
        >
          {{ item.name }}
        </button-comp>
        <button-comp
          :light="true"
          title="Read More"
          :action="() => $router.push(data.read)"
        />
      </span>
    </div>
    <div class="bg-trimary z-20 rounded-lg shadow-xl hidden md:block">
      <img :src="data.image" class="w-full h-full p-5" alt="Project Image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/server/api/project/[id]";

const props = defineProps<{ data: Project }>();
</script>
