<template>
  <Head>
    <Title>Romian Tairovski - Developer</Title>
    <Meta
      name="description"
      content="Software developer from the Netherlands."
    />
    <Meta name="twitter:title" :content="'Romian Tairovski'" />
    <Meta
      name="twitter:description"
      content="Software developer from the Netherlands."
    />
  </Head>
  <Top />
  <div class="container mx-auto max-w-[1444px]">
    <div class="projects text-center mb-20 lg:mx-0 mx-1">
      <h2 class="text-4xl font-extrabold mb-10" id="projects">Projects</h2>
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
  <div class="text-center mx-0 md:py-10 py-5 bg-secondary shadow-inner">
    <h2 class="text-4xl font-bold my-2">Send me a message</h2>
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
