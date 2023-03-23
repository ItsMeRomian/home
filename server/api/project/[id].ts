export default defineEventHandler((event) => {
  return projects.find((project) => project.slug === event.context.params?.id);
});

export interface Project {
  slug: string;
  date: string;
  description: string;
  stack: string[];
  read: string;
  features?: string[];
  summary?: string;
  actions?: {
    name: string;
    link: string;
  }[];
  image?: string;
  name?: string;
  desc?: string;
}

export const projects = [
  {
    name: "Lotte Schmidt 🕵🏼‍♀️",
    slug: "lotte-schmidt",
    date: "January 2022",
    description:
      "A website where my girlfriend can post her latest articles. Using Nuxt3, Firebase Auth, Firestore and Storage.",
    stack: ["Nuxt3", "TipTap", "Firebase", "Vercel"],
    read: "/projects/lotte-schmidt",
    features: [
      "Server Side Rendered (SSR)",
      "Optimalised for SEO",
      "Easy to use text editor using TipTap",
      "Easy image, file and audio uploading",
    ],
    summary:
      "<p>I am excited to share with you a website I recently created for a journalist who wanted a platform to post her latest articles. I used Nuxt3, Firebase, and Vercel to bring her vision to life.</p><p>Nuxt3 is a powerful framework for building fast, modern web applications. It offers server-side rendering (SSR) capabilities, which means that the initial page load is faster and more efficient because the server sends a pre-rendered HTML page to the client. This makes the website more accessible and improves its search engine optimization (SEO).</p><p>Firebase is a cloud-based platform that provides a range of tools and services for building web and mobile applications. I used Firebase Authentication to handle user authentication and Firebase Realtime Database to store the journalist's articles. This allowed the journalist to easily manage her content and keep her readers up to date with her latest work.</p><p>The website is hosted on Vercel, a cloud platform for static and JAMstack websites. Vercel provides fast and reliable hosting, automatic SSL certificates, and built-in deployment workflows. This ensures that the website is always up and running, and that the journalist's readers can access her articles quickly and easily.</p><p>Overall, I am proud of the website I created for the journalist. It is a fast, efficient, and user-friendly platform that showcases her work and connects her with her audience. If you're interested in creating a similar website for your own content, please feel free to reach out to me for more information. Thank you for your attention!</p>",
    actions: [
      {
        name: "Visit",
        link: "https://lotteschmidt.com",
      },
    ],
    image: "imgs/LotteSchmidt.png",
  },

  {
    name: "Ristorante Lorenzo 🍕",
    slug: "ristorante-lorenzo",
    date: "October 2021",
    description: "The website of a Italian Restaurant located in Emmen",
    stack: ["Nuxt", "Tailwind", "Firebase"],
    read: "/projects/ristorante-lorenzo",
    features: [
      "High SEO ranking",
      "Static site generation",
      "Easy to use reservation form",
    ],
    summary:
      "<p>I'm excited to share with you my latest project: a website for a local Italian restaurant in Emmen called Ristorante Lorenzo. The website showcases the menu, the location, the opening hours and the contact details of the restaurant. It is also possible to make a reservation via the website.</p><p>The website was built using Nuxt 2, a framework for Vue that allows for server-side rendering and static site generation. This improves the performance and SEO of the website, as well as simplifying the deployment process.</p><p>I also used Tailwind CSS, a utility-first CSS framework that helps to create responsive and consistent designs without writing custom CSS. Tailwind CSS provides a lot of classes that can be applied to HTML elements to style them according to a predefined design system.</p><p>For the backend, I used Firebase, a platform that offers various services such as authentication, database, storage and hosting. Firebase makes it easy to integrate these features into the website without having to write complex server-side code or manage servers.</p><p>Before coding the website, I designed it first in Figma, a collaborative design tool that allows to create wireframes, mockups and prototypes. Figma helps to visualize how the website will look like and get feedback from clients and users.</p><p>You can check out the website here: <a href='https://ristorantelorenzo.nl' class='font-blue-400'>https://ristorantelorenzo.nl</a> I hope you like it and feel free to contact me if you have any questions or comments about this project.</p>",
    actions: [
      {
        name: "Visit",
        link: "https://ristorantelorenzo.nl/",
      },
    ],
    image: "imgs/RistoranteLorenzo.jpg",
  },
  {
    name: "TipTopIbiza 🏠",
    slug: "tiptopibiza",
    date: "Januari 2020",
    read: "/projects/tiptopibiza",
    description: "Website of a Spanish property management company.",
    stack: ["Nuxt", "Bootstrap", "Hostgator"],
    features: ["High SEO ranking", "Static site generation"],
    summary:
      "<p>I'm excited to share with you my latest project: a website for a home management company located in Ibiza, Spain. The company offers various services for homeowners and renters in the island, such as cleaning, maintenance, security and concierge. The website showcases these services in a clear and attractive way, with icons, images and descriptions. It also has some testimonials from satisfied customers who have used the company's services before. And of course, it has a contact form where potential clients can get in touch with the company and request a quote.</p> <p>The website is built with Vue 3, Typescript and bootstrap. Vue 3 is a modern and powerful framework for creating reactive and dynamic web applications. Bootstrap is a popular CSS framework that provides responsive and consistent design elements. I chose these technologies because they are fast, reliable and easy to work with. The website is also optimized for performance and accessibility. It uses lazy loading to reduce the initial loading time and improve the user experience. The website is fully responsive and adapts to different screen sizes and devices. </p> <p>I'm very proud of how the website turned out and I hope you like it too. You can check it out here: https://tiptopibiza.com/.</p>",
    actions: [
      {
        name: "Visit",
        link: "https://tiptopibiza.com/",
      },
    ],
    image: "imgs/TipTopIbiza.jpg",
  },

  {
    name: "FreeFlexr 💪",
    slug: "freeflexr",
    date: "September 2020",
    read: "/projects/freeflexr",
    description: "One Place to manage all your freeflexing jobs.",
    stack: [
      "Angular 15",
      "Material",
      "Firebase",
      "Hasura",
      "PostgreSQL",
      "Heroku",
    ],
    features: [
      "Connect your accounts from various freelance platforms",
      "Automatically syncs your data",
      "See all your jobs in one dashboard",
      "Filter jobs by date, status, client or platform",
      "Generate reports and invoices with just a few clicks",
    ],
    summary:
      "<p>Hello everyone,</p> <p>I'm excited to share with you a project that I've been working on for the past few months: FreeFlexr.</p> <p>FreeFlexr is a tool for freelancers who want to keep track of their jobs and income across different platforms. As a freelancer myself, I know how hard it can be to manage multiple gigs from different apps, such as Youngones, Temper, Jobner and others. Working with a spreadsheet is outdated and can be a headache.</p> <p>That's why I created FreeFlexr: an online tool that lets you connect your accounts from various freelance platforms and automatically syncs your data. You can see all your jobs in one dashboard, filter them by date, status, client or platform. You can also generate reports and invoices with just a few clicks. And the best part is: FreeFlexr is completely free to use!</p> <p>FreeFlexr is built with modern web technologies that ensure a fast and responsive user interface. The frontend is coded in Angular 14 and Material Design components. The backend is powered by Hasura GraphQL engine that connects to a PostgreSQL database hosted on Heroku. The app also uses Firebase for authentication and storage.</p> <p>You can follow the development here: https://github.com/itsmeromian/freeflexr</p> <p>I hope you find it useful and I'd love to hear your feedback and suggestions.</p> <p>Thanks for reading!</p>",
    actions: [
      {
        name: "Github",
        link: "https://github.com/itsmeromian/freeflexr",
      },
    ],
    image: "imgs/FreeFlexr.jpg",
  },
  {
    name: "SupermarketRadio 📻",
    slug: "jumboradio",
    date: "May 2021",
    read: "/projects/jumboradio",
    description: "A frontend for a known Dutch Supermarket Radio Stream.",
    stack: ["Nuxt", "Tailwind", "Firebase"],
    features: [""],
    summary: "",
    actions: [
      {
        name: "Github",
        link: "https://github.com/itsmeromian/JumboRadio",
      },
    ],
    image: "imgs/JumboRadio.jpg",
  },
  {
    name: "DynaHotel 🏨",
    slug: "dynahotel",
    date: "August 2019",
    read: "/projects/dynahotel",
    stack: ["TS"],
    features: [""],
    summary: "",
    description: "a bootstrap theme for BrainCMS.",
    actions: [
      {
        name: "Github",
        link: "https://github.com/ItsMeRomian/DynaHotel",
      },
    ],
    image: "imgs/DynaHotel.jpg",
  },
  {
    name: "ModTools 🛠️",
    slug: "modtools",
    date: "August 2019",
    read: "/projects/modtools",
    stack: ["TS"],
    features: [""],
    summary: "",
    description: "An allround admin environment for habbo retro's owners.",
    actions: [
      {
        name: "Github",
        link: "https://github.com/ItsMeRomian/ModTools",
      },
    ],
    image: "imgs/ModTools.jpg",
  },
  {
    name: "FriendlyTapirs 💻",
    slug: "friendlytapirs",
    read: "/projects/friendlytapirs",
    date: "April 2019",
    stack: ["TS"],
    features: [""],
    summary: "",
    description: "A webdesign company ran with friends.",
    actions: [
      {
        name: "Github",
        link: "https://github.com/ItsMeRomian/FriendlyTapirs",
      },
      {
        name: "Website",
        link: "https://friendlytapirs.com",
      },
    ],
    image: "imgs/FriendlyTapirs.jpg",
  },
  {
    name: "Pasta 🍝",
    slug: "pasta",
    read: "/projects/pasta",
    date: "July 2021",
    stack: ["TS"],
    features: [""],
    summary: "",
    description: "A place to paste code snippets or text.",
    actions: [
      {
        name: "Github",
        link: "https://github.com/ItsMeRomian/Pasta",
      },
      {
        name: "Website",
        link: "https://pasta.dyna.host",
      },
    ],
    image: "imgs/pasta.jpg",
  },
];
