<template>
  <div class="row text-start my-5 project">
    <div class="col-md-6 col-12 p-3 mt-5 rounded project-text" style="background: var(--secondary)">
      <h1 class="project-title text-left">{{ data.name }}</h1>
      <p class="text-left project-date">{{ data.date }}</p>
      <p class="project-desc text-left">{{ data.desc }}</p>
      <span class="buttons">
        <a class="btn btn-success mx-1" v-for="item in data.actions" :key="item.name" :href="item.link">{{ item.name }}</a>
        <!--          <a class="btn btn-success" :href="data.readMore">Read More</a>-->
      </span>
    </div>
    <div class="col-md-6 col-12 p-3 mb-5 rounded project-image" style="background: var(--trimary)">
      <img :src="data.image" class="img-fluid" style="aspect-ratio: 1" alt="Project Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["data"]
};
</script>

<style>
.project-date {
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 0;
}
.buttons {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}
.buttons-left {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
}
.project-text,
.project-image {
  transition: ease 300ms;
}
.project:hover > .project-text {
  margin-top: 0 !important;
}
.project:hover > .project-image {
  margin-bottom: 0 !important;
}

@media (max-width: 768px) {
  .project-title {
    /*Alleen kleine schermen*/
    font-size: 2.5rem !important;
  }
}
.project-title {
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: var(--text);
  margin-bottom: 0;
}
.project-desc {
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 2rem;
  color: var(--text);
}
</style>
