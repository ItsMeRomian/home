<template>
  <Head v-if="data">
    <Title>{{ data.name }} - Romian Tairovski</Title>
    <Meta name="description" :content="data.description" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="data.name + ' - Romian Tairovski'" />
    <Meta name="twitter:description" :content="data.description" />
    <Meta name="twitter:image" :content="data.image" />
    <Meta name="og:image" :content="data.image" />
  </Head>
  <Body class="triangle" />
  <Menu />

  <div class="flex flex-col mx-14 pt-14 md:pt-0 min-h-[90vh]">
    <div class="container mx-auto max-w-[1024px]" v-if="data && data.name">
      <div
        class="flex flex-col items-center md:flex-row gap-4 mb-12 md:my-12 text-center md:text-left"
      >
        <h1 class="text-4xl grow font-bold text-wrap">{{ data.name }}</h1>
        <div>
          <a
            class="bg-secondary px-8 py-4 rounded-sm mr-2 hover:bg-primary text-md font-extrabold uppercase inline-flex items-center justify-center flex-row"
            v-for="item in data?.actions"
            :key="item.name"
            :href="item.link"
            target="_BLANK"
          >
            {{ item.name }}
            <Icon
              name="ic:sharp-arrow-forward-ios"
              class="hover:text-blueaccent"
            />
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <span class="p-4 rounded-sm">
          <b class="uppercase">Idea</b>
          <br />
          <hr class="my-2 border-blueaccent" />
          {{ data?.description }}
          <br />
          <br />
          <b class="uppercase">Technology</b><br />
          <hr class="my-2 border-blueaccent" />
          <ul>
            <li v-for="item of data?.stack">
              {{ item }}
            </li>
          </ul>
        </span>
        <img
          :src="'/' + data?.image"
          class="w-full rounded-sm"
          alt="Project Image"
        />
      </div>
      <div class=" py-4 px-8 rounded-sm my-4">
        <p class="">
          <ClientOnly>
            <span v-html="data?.summary" class="inner-story"> </span>
          </ClientOnly>
        </p>
      </div>
    </div>
    <div
      v-else
      class="container mx-auto max-w-[1024px] p-4 rounded-sm bg-secondary text-center"
    >
      <h1 class="text-4xl grow font-bold">404</h1>
      <p>This project does not exist.</p>
    </div>
    <div class="mt-auto">
      <Footer v-if="data" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch(`/api/project/${useRoute().params.id}`);
</script>
<style>
body.triangle {
  background: url("/imgs/download.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
}
@media (max-width: 768px) {
  body.triangle {
    background-size: 70%;
  }
}
.inner-story > p {
  margin-bottom: 0.5rem;
}
</style>
