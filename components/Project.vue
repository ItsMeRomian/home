<template>
  <UiCard class="border-none" v-if="data.name">
    <template #content>
      <UiCardContent @click="() => router.push(data.read)">
        <div class="flex flex-col gap-5 md:flex-row">
          <div class="shrink-0">
            <img
              class="aspect-video cursor-pointer rounded-lg object-cover shadow md:h-[250px]"
              :src="data.image"
              :alt="props.data.slug"
            />
          </div>
          <div class="flex h-auto flex-col">
            <p class="mb-2 cursor-pointer text-sm font-semibold text-primary">{{ data.date }}</p>
            <h1 class="mb-2 cursor-pointer text-xl font-semibold lg:text-2xl">
              {{ data.name }}
            </h1>
            <p class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground">
              {{ data.description }}
            </p>
            <div class="mb-2 mt-auto">
              <NuxtLink :to="button.link" v-for="button in data.actions" :key="button.link">
                <Icon :name="`mdi:${button.icon}`" class="mx-auto text-3xl" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </UiCardContent>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import type { Project } from "~/server/api/project/[id]";

  const router = useRouter();
  const props = defineProps<{ data: Project }>();
</script>
