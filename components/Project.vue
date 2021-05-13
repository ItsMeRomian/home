<template>
  <div class="row text-start my-5">
    <div class="col-md-6 col-12 p-3 mt-5 rounded" style="background: var(--secondary)">
      <h1 class="project-title text-left">{{data.name}}</h1>
      <p class="project-desc text-left">{{data.desc}}</p>
      <span class="align-items-end" v-for="item in data.actions" :key="item.name">
                <a class="btn btn-success" :href="item.link">{{item.name}}</a>
                <span class="mx-1"/>
            </span>
    </div>
    <div class="col-md-6 col-12 p-3 mb-5 rounded" style="background: var(--trimary)">
      <img :src="data.image" class="img-fluid" style="aspect-ratio: 1" alt="Project Image">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Project',
    props: ['data']
  }
</script>

<style>
  @media (max-width: 768px) {
    .project-title {
      /*Alleen kleine schermen*/
      font-size: 2.5rem!important;
    }
  }
  .project-title {
    font-family: 'Heebo', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    color: var(--text)
  }
  .project-desc {
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-size: 2rem;
    color: var(--text)
  }
</style>
