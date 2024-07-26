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
  <div class="container mx-auto my-10 max-w-[1024px]">
    <div class="projects text-center mx-4 lg:mx-0">
      <h2 class="text-4xl font-extrabold mb-20" id="projects">Projects</h2>
      <div v-if="projects">
        <template v-for="(project, i) in projects.slice(0, 4)">
          <Project :data="project" :flip="!!(i % 2)" />
        </template>
        <ButtonComp
          :action="() => (more = true)"
          title="More"
          v-if="!more"
        ></ButtonComp>
        <template v-if="more" v-for="(project, i) in projects.slice(4)">
          <Project :data="project" :flip="!!(i % 2)" />
        </template>
      </div>
    </div>
    <div class="text-center mt-10 mx-4 md:mx-0">
      <h2 class="text-4xl font-bold my-2">Send me a message</h2>
      <ClientOnly fallback-tag="span" fallback="Loading contact form...">
        <Contact />
      </ClientOnly>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const more = ref(false);
const { data: projects } = useFetch("/api/projects");
</script>
