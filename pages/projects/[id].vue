<template>
  <Head>
    <Title>{{ data.name }} - Romian Tairovski</Title>
    <Meta name="description" :content="data.description" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="data?.title + ' - Romian Tairovski'" />
    <Meta name="twitter:description" :content="data.description" />
    <Meta name="twitter:image" :content="data.image" />
    <Meta name="og:image" :content="data.image" />
  </Head>
  <Body class="triangle" />
  <Menu />
  <div class="container mx-auto max-w-[1024px] p-4" v-if="data.name">
    <div class="flex flex-row my-12">
      <h1 class="text-4xl grow font-bold">{{ data.name }}</h1>
      <div class="">
        <a
          class="bg-secondary text-egg px-4 py-2 rounded-sm mr-2"
          v-for="item in data?.actions"
          :key="item.name"
          :href="item.link"
          target="_BLANK"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <span class="p-4 rounded-sm">
        <b class="uppercase">Idea</b><br />
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
    <div class="bg-secondary py-4 px-8 rounded-sm my-4">
      <p class="text-justify">
        <ClientOnly
          ><span v-html="data?.summary" class="inner-story"></span
        ></ClientOnly>
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
  <Footer />
</template>
<script setup lang="ts">
const { data } = await useFetch(`/api/project/${useRoute().params.id}`);
console.log(data.value);
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
