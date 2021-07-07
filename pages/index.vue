<template>
  <div class="h-100">
    <div class="container-fluid h-100 intro">
      <div class="row h-100" style="height: 100vh!important;">
        <div class="col h-100">
          <div class="head h-100 d-flex align-items-center">
            <div class="mr-5">
              <p class="hi">Hey, I'm</p>
              <h1 class="name">Romian Tairovski</h1>
              <p class="lead">
                STUDENT SOFTWARE DEVELOPER
              </p>
              <span style="font-size: 2rem;">
                <i class="bi bi-github" @click="goTo('https://github.com/itsmeromian')"></i>
                <i class="bi bi-linkedin mx-4" @click="goTo('https://www.linkedin.com/in/romiantairovski')"></i>
                <i class="bi bi-twitter" @click="goTo('https://twitter.com/itsmeromian')"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="projects text-center">
        <h2 class="projects">My Projects</h2>
        <hr class="mx-5" />
        <project :data="this.projects['0']" />
        <project-flipped :data="this.projects['1']" />
        <project :data="this.projects['2']" />
        <project-flipped :data="this.projects['6']" />
        <project :data="this.projects['4']" />
        <project-flipped :data="this.projects['5']" />
        <project :data="this.projects['3']" />
      </div>
      <div class="contact text-center">
        <h2 class="contact-title">Send me a message</h2>
        <hr class="divider" />
        <ContactForm />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
import ProjectFlipped from "../components/ProjectFlipped";
import Project from "../components/Project";
import { mapMutations } from "vuex";

export default {
  name: "App",
  head() {
    return {
      link: [{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" }]
    };
  },
  components: { ContactForm, ProjectFlipped, Project },
  data() {
    return {
      projects: this.$store.state.projects.projects
    };
  },
  methods: {
    goTo(location) {
      window.location.href = location;
    }
  }
};
</script>

<style>
.bi {
  cursor: pointer;
}
hr {
  border-top: 1px solid var(--egg);
}
.intro {
  background-image: url("assets/download.svg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  background-size: contain;
}
h2.projects {
  font-size: 4rem;
  font-family: "Heebo", sans-serif;
  color: var(--text);
  font-weight: bold;
}
.divider {
  height: 0.2em;
  color: var(--egg);
  opacity: 1;
}
.contact-title {
  font-size: 4rem;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
}
.hi {
  font-size: 1.5rem;
}
.name {
  font-size: 3.5rem;
}
.lead {
  font-size: 2.5rem;
}
</style>
