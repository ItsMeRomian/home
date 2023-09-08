<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 w-full text-left mb-10 shadow-xl"
    v-if="data"
  >
    <div
      class="hidden lg:block bg-trimary z-10 translate-x-[1rem] translate-y-[0.5rem] hover:translate-x-0 hover:translate-y-0 transition-all duration-300 rounded-lg"
    >
      <img :src="data.image" class="w-full h-full p-4" alt="Project Image" />
    </div>
    <div
      class="p-4 flex flex-col rounded-lg bg-secondary z-20 transition-all duration-300 shadow-lg"
    >
      <div class="text grow">
        <h1 class="text-4xl font-bold">{{ data.name }}</h1>
        <p class="text-left project-date italic mb-2">{{ data.date }}</p>
        <p class="project-desc font-light text-left">{{ data.description }}</p>
      </div>
      <span
        class="buttons pb-2 text-left lg:text-end mt-10 flex gap-2 flex-row-reverse"
      >
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
  </div>
</template>

<script setup lang="ts">
import { Project } from "~~/server/api/project/[id]";

const props = defineProps<{ data: Project }>();
</script>
