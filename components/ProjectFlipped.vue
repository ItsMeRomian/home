<template>
  <div class="row text-start my-5">
    <div class="col-md-6 col-12 p-3 mb-md-5 rounded" style="background: var(--trimary)">
      <img :src="data.image" class="img-fluid" style="aspect-ratio: 1" alt="Project Image">
    </div>
    <div class="col-md-6 col-12 p-3 mt-md-5 rounded" style="background: var(--secondary)">
      <h1 class="project-title text-right">{{data.name}}</h1>
      <p class="project-desc text-right">{{data.desc}}</p>
      <span class="align-items-end" v-for="item in data.actions" :key="item.name">
                <a class="btn btn-success" :href="item.link">{{item.name}}</a>
                <span class="mx-1"/>
            </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectFlipped",
    props: ['data']
  }
</script>

<style scoped>
</style>
