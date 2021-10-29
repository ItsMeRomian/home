<template>
  <div class="row text-start my-5 project">
    <div class="col-md-6 col-12 p-3 mb-md-5 rounded project-image" style="background: var(--trimary)">
      <img :src="data.image" class="img-fluid" alt="Project Image" />
    </div>
    <div class="col-md-6 col-12 p-3 mt-md-5 rounded project-text" style="background: var(--secondary)">
      <h1 class="project-title text-right">{{ data.name }}</h1>
      <p class="text-right project-date">{{ data.date }}</p>
      <p class="project-desc text-right">{{ data.desc }}<br /><br /></p>
      <span class="buttons-left">
        <a class="btn btn-success mx-1" v-for="item in data.actions" :key="item.name" :href="item.link" target="_BLANK">{{ item.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectFlipped",
  props: ["data"]
};
</script>

<style scoped></style>
