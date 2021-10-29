export const state = () => ({
  projects: [
    {
      name: "Ristorante Lorenzo 🍕",
      date: "October 2021",
      desc: "The website of a Italian Restaurant located in Emmen",
      actions: {
        1: {
          name: "Visit",
          link: "https://ristorantelorenzo.nl/"
        }
      },
      image: require("@/static/RistoranteLorenzo.jpg")
    },
    {
      name: "TipTopIbiza 🏠",
      date: "Januari 2020",
      desc: "Website of a Spanish property management company.",
      actions: {
        1: {
          name: "Visit",
          link: "https://tiptopibiza.com/"
        }
      },
      image: require("@/static/TipTopIbiza.jpg")
    },
    {
      name: "FreeFlexr 💪",
      date: "September 2020",
      desc: "One Place to manage all your freeflexing jobs.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/itsmeromian/freeflexr"
        }
      },
      image: require("@/static/FreeFlexr.jpg")
    },
    {
      name: "SupermarketRadio 📻",
      date: "May 2021",
      desc: "A frontend for a known Dutch Supermarket Radio Stream.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/itsmeromian/JumboRadio"
        }
      },
      image: require("@/static/JumboRadio.jpg")
    },
    {
      name: "DynaHotel 🏨",
      date: "August 2019",
      desc: "a bootstrap theme for BrainCMS.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/ItsMeRomian/DynaHotel"
        }
      },
      image: require("@/static/DynaHotel.jpg")
    },
    {
      name: "ModTools 🛠️",
      date: "August 2019",
      desc: "An allround admin environment for habbo retro's owners.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/ItsMeRomian/ModTools"
        }
      },
      image: require("@/static/ModTools.jpg")
    },
    {
      name: "FriendlyTapirs 💻",
      date: "April 2019",
      desc: "A webdesign company ran with friends.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/ItsMeRomian/FriendlyTapirs"
        },
        1: {
          name: "Website",
          link: "https://friendlytapirs.com",
          disabled: true,
        }
      },
      image: require("@/static/FriendlyTapirs.jpg")
    },
    {
      name: "Pasta 🍝",
      date: "July 2021",
      desc: "A place to paste code snippets or text.",
      actions: {
        0: {
          name: "Github",
          link: "https://github.com/ItsMeRomian/Pasta"
        },
        1: {
          name: "Website",
          link: "https://pasta.dyna.host"
        }
      },
      image: require("@/static/pasta.jpg")
    }
  ]
});
