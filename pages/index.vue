<template>
  <Head>
    <Title>Romian Tairovski - Developer</Title>
    <Meta name="description" content="Software developer from the Netherlands." />
    <Meta name="twitter:title" :content="'Romian Tairovski'" />
    <Meta name="twitter:description" content="Software developer from the Netherlands." />
  </Head>
  <Top />
  <div class="container mx-auto max-w-[1444px]">
    <div class="projects mx-1 mb-20 text-center lg:mx-0">
      <h2 class="mb-10 text-4xl font-extrabold" id="projects">Projects</h2>
      <div v-if="projects" class="flex flex-col gap-5 text-left">
        <template v-for="project in projects.slice(0, 4)">
          <Project :data="project" />
          <UiDivider class="mx-auto my-0 w-3/4" />
        </template>
        <UiButton
          @click="() => (more = true)"
          text="More"
          v-if="!more"
          :class="{ 'mt-10': !more }"
          class="mx-auto"
        />
        <template v-if="more" v-for="project in projects.slice(4)">
          <Project :data="project" />
        </template>
      </div>
    </div>
  </div>
  <div class="w-full">
    <h2 class="my-2 text-center text-4xl font-bold">Send me a message</h2>
    <ClientOnly fallback-tag="span" fallback="Loading...">
      <Contact />
    </ClientOnly>
  </div>
  <Footer />
</template>

<script setup lang="ts">
  const more = ref(false);
  const { data: projects } = useFetch("/api/projects");
</script>
