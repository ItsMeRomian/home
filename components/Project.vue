<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 w-full text-left mb-10 rounded-xl group"
    v-if="data.name"
  >
    <div
      :class="{
        'order-2 md:translate-x-[-.75rem] md:translate-y-[-.25rem]': flip,
        'md:translate-x-[.75rem] md:translate-y-[.25rem]': !flip,
      }"
      class="p-4 flex flex-col rounded-lg z-10 shadow-lg md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:transition-all md:duration-200 bg-secondary"
    >
      <div
        class="grow flex flex-col gap-1 md:gap-2"
        :class="{ 'text-right md:ml-5': flip }"
      >
        <h1 class="text-4xl font-bold">{{ data.name }}</h1>
        <p class="italic">{{ data.date }}</p>
        <p class="font-light">{{ data.description }}</p>
      </div>
      <span
        class="mt-5 md:mt-10 flex flex-row gap-2"
        :class="{ 'justify-end': flip }"
      >
        <ButtonComp
          v-for="item in data.actions"
          :key="item.name"
          :href="item.link"
          :title="item.name"
          target="_BLANK"
          :light="true"
        >
          {{ item.name }}
        </ButtonComp>
        <button-comp
          :light="true"
          title="Read More"
          :action="() => $router.push(data.read)"
        />
      </span>
    </div>
    <div
      :class="{
        'md:translate-x-[-.75rem] md:translate-y-[-.25rem]': !flip,
        'md:translate-x-[.75rem] md:translate-y-[.25rem]': flip,
      }"
      class="z-20 hidden md:block md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:transition-all md:duration-200"
    >
      <img :src="data.image" class="w-full h-full rounded-lg " :alt="props.data.slug" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/server/api/project/[id]";

const props = defineProps<{ data: Project; flip: Boolean }>();
</script>
