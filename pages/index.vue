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
      <div v-if="projects">
        <template v-for="(project, i) in projects.slice(0, 4)">
          <Project :data="project" :flip="!!(i % 2)" />
        </template>
        <div :class="{ 'mt-10': !more }">
          <ButtonComp :action="() => (more = true)" title="More" v-if="!more" />
        </div>
        <template v-if="more" v-for="(project, i) in projects.slice(4)">
          <Project :data="project" :flip="!!(i % 2)" />
        </template>
      </div>
    </div>
  </div>
  <div class="mx-0 bg-secondary py-5 text-center shadow-inner md:py-10">
    <h2 class="my-2 text-4xl font-bold">Send me a message</h2>
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
