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

  <div class="mx-14 flex min-h-[90vh] flex-col pt-14 md:pt-0">
    <div class="container mx-auto max-w-[1024px]" v-if="data && data.name">
      <div
        class="mb-12 flex flex-col items-center gap-4 text-center md:my-12 md:flex-row md:text-left"
      >
        <h1 class="grow text-wrap text-4xl font-bold">{{ data.name }}</h1>
        <div>
          <a
            class="text-md mr-2 inline-flex flex-row items-center justify-center rounded-sm bg-secondary px-8 py-4 font-extrabold uppercase hover:bg-primary"
            v-for="item in data?.actions"
            :key="item.name"
            :href="item.link"
            target="_BLANK"
          >
            {{ item.name }}
            <Icon name="ic:sharp-arrow-forward-ios" class="hover:text-blueaccent" />
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <span class="rounded-sm p-4">
          <b class="uppercase">Idea</b>
          <br />
          <hr class="border-blueaccent my-2" />
          {{ data?.description }}
          <br />
          <br />
          <b class="uppercase">Technology</b><br />
          <hr class="border-blueaccent my-2" />
          <ul>
            <li v-for="item of data?.stack">
              {{ item }}
            </li>
          </ul>
        </span>
        <img :src="'/' + data?.image" class="w-full rounded-sm" alt="Project Image" />
      </div>
      <div class="my-4 rounded-sm px-8 py-4">
        <p class="">
          <ClientOnly>
            <span v-html="data?.summary" class="inner-story"> </span>
          </ClientOnly>
        </p>
      </div>
    </div>
    <div v-else class="container mx-auto max-w-[1024px] rounded-sm bg-secondary p-4 text-center">
      <h1 class="grow text-4xl font-bold">404</h1>
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
