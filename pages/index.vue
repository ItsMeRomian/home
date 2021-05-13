<template>
  <div class="h-100">
    <div class="container-fluid h-100 intro">
      <Menu/>
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
                            <i class="bi bi-github"></i>
                            <i class="bi bi-linkedin mx-4"></i>
                            <i class="bi bi-twitter"></i>
                        </span>
            </div>
          </div>
        </div>
        <div class="col">
          <!--                <div class="head d-flex align-items-center" style="height: 40vh; margin-top: 20vh;border:solid">-->
          <!--                    <div class="">-->
          <!--                        Hi, I'm Anurag Hazra, a passionate self-taught frontEnd web developer from India, currently working at timeless.co as a FrontEnd engineer. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and function correctly. I am especially focusing on Reactjs.-->
          <!--                        I'm also a certified graphic designer from "Ramakrishna Mission Shilpamandira". I also do Graphic and UI designing. Since I love both programming and designing, I'm also interested in creating program-->
          <!--                    </div>-->
          <!--                </div>-->
        </div>

      </div>
    </div>
    <div class="container">
      <div class="projects text-center">
        <h2 class="projects">My Projects</h2>
        <hr class="mx-5">
        <project :data="this.projects['0']"/>
        <project-flipped :data="this.projects['1']"/>
        <project :data="this.projects['2']"/>
        <project-flipped :data="this.projects['3']"/>
        <project :data="this.projects['4']"/>
      </div>
      <div class="contact text-center">
        <h2 class="contact-title">Send me a message</h2>
        <hr class="divider">
        <ContactForm/>
      </div>
    </div>
    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col">
          <p class="text-center">&copy; Romian Tairovski 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import ContactForm from "../components/ContactForm";
  import ProjectFlipped from "../components/ProjectFlipped";
  import Project from "../components/Project";
  import Menu from "../components/Menu";

  export default {
    name: 'App',
    components: {ContactForm, ProjectFlipped, Project, Menu},
    data() {
      return {
        projects: {
          0: {
            name: "FreeFlexr",
            desc: "One Place to manage all your freeflexing jobs.",
            actions: {
              0: {
                name: "Github",
                link: "https://github.com/itsmeromian/freeflexr",
              },
              1: {
                name: "Join",
                link: "https://FreeFlexr.io/",
              },
            },
            image: require('@/assets/FreeFlexr.png')
          },
          1: {
            name: "TipTopIbiza",
            desc: "Website of a Spanish property management company.",
            actions: {
              0: {
                name: "Github",
                link: "https://github.com/itsmeromian/freeflexr",
              },
              1: {
                name: "Join",
                link: "https://FreeFlexr.io/",
              },
            },
            image: require('@/assets/tiptopibiza.jpg')
          },
          2: {
            name: "DynaFools",
            desc: "a bootstrap theme for BrainCMS",
            actions: {
              0: {
                name: "Github",
                link: "https://github.com/ItsMeRomian/DynaHotel",
              },
              1: {
                name: "Checkout",
                link: "https://dynafools.live/",
              },
            },
            image: require('@/assets/dynafools.jpg')
          },
          3: {
            name: "ModTools",
            desc: "An allround admin environment for habbo retro's owners.",
            actions: {
              0: {
                name: "Github",
                link: "https://github.com/ItsMeRomian/ModTools",
              },
            },
            image: require('@/assets/modtools.jpg')
          },
          4: {
            name: "FriendlyTapirs",
            desc: "A webdesign company ran with friends.",
            actions: {
              0: {
                name: "Github",
                link: "https://github.com/ItsMeRomian/FriendlyTapirs",
              },
              1: {
                name: "Website",
                link: "friendlytapirs.com",
              },
            },
            image: require('@/assets/friendlytapirs.jpg')
          },
        }
      }
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    background: #191919;
    color: #F8F8F8;
  }
  :root {
    --primary: #191919;
    --secondary: #232323;
    --trimary: #303030;
    --text: #F8F8F8;
    --egg: #F6F0DF;
    --green: #049F76
  }
  hr {
    border-top: 1px solid var(--egg);
  }
  .intro {
    background-image: url('assets/download.svg');
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: top;
    background-size: contain;
  }
  h2.projects {
    font-size: 4rem;
    font-family: 'Heebo', sans-serif;
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
    font-family: 'Heebo', sans-serif;
    font-weight: bold;
  }
  .hi {
    font-size: 1.5rem
  }
  .name {
    font-size: 3.5rem;
  }
  .lead {
    font-size: 2.5rem
  }
</style>
