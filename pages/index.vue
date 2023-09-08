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
  <top />
  <div class="container mx-auto my-10 max-w-[1024px]">
    <div class="projects text-center mx-4 lg:mx-0">
      <h2 class="text-4xl font-extrabold" id="projects">Projects</h2>
      <hr class="mx-5 my-4" />
      <div v-if="projects">
        <Inlineproject :data="projects[0]" />
        <Inlineprojectflipped :data="projects[1]" />
        <Inlineproject :data="projects[2]" />
        <Inlineprojectflipped :data="projects[3]" />
        <button-comp
          :action="() => (more = true)"
          title="More"
          v-if="!more"
        ></button-comp>
        <template v-if="more">
          <Inlineproject :data="projects[4]" />
          <Inlineprojectflipped :data="projects[5]" />
          <Inlineproject :data="projects[6]" />
          <Inlineprojectflipped :data="projects[7]" />
          <Inlineproject :data="projects[8]" />
        </template>
      </div>
    </div>
    <div class="contact text-center mt-10">
      <h2 class="contact-title text-4xl font-bold my-2">Send me a message</h2>
      <hr class="divider" />
      <ClientOnly><contact /></ClientOnly>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const more = ref(false);
const { data: projects } = useFetch("/api/projects");
</script>

<style>
.intro {
  background-image: url("/imgs/download.svg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  background-size: contain;
}
</style>
