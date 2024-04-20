export default defineEventHandler((event) => {
  return projects.find((project) => project.slug === event.context.params?.id);
});

export interface Project {
  slug: string;
  title?: string;
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
    name: "Local-Lightshot-Server 📸",
    slug: "locallightshotserver",
    date: "April 2024",
    description:
      "A local server for lightshot. Made with bun. Imitates the prntscr.com api",
    stack: ["Bun", "Docker", "Lightshot"],
    read: "/projects/locallightshotserver",
    features: [
      "API",
      "Local"
    ],
    summary:
      "A local server for lightshot. Made with bun (in 50 lines lol). <br> Imitates the http://upload.prntscr.com/upload/ api",
    actions: [
      {
        name: "Github",
        link: "https://github.com/itsmeromian/local-lightshot-server",
      }
    ],
    image: "imgs/lightshot.jpg",
  },
  {
    name: "MCDash 🤖",
    slug: "mcdash",
    date: "Februari 2024",
    description:
      "Minecraft server dashboard for managing your server and players.",
    stack: ["Nuxt3", "NuxtUI", "Postgres", "Docker"],
    read: "/projects/mcdash",
    features: [
      "Server Side Rendered (SSR)",
      "API",
      "Host alongside the Minecraft server",
    ],
    summary:
      "A simple Minecraft server dashboard. Using Nuxt3, ServerTap, NuxtUI. Made to be running ON the machine that runs the minecraft server, so the ServerTap port does not have to be exposed. Kinda only looks good on mobile.",
    actions: [
      {
        name: "Github",
        link: "https://github.com/itsmeromian/mcdash",
      }
    ],
    image: "imgs/mcdash.jpg",
  },
  {
    name: "Shortr 🚀",
    slug: "shortr",
    date: "April 2024",
    description:
      "A URL shortener that allows users to create short links. Allows anyone to check where the link goes and who opened it.",
    stack: ["Nuxt3", "NuxtUI", "Postgres", "Docker"],
    read: "/projects/shortr",
    features: [
      "Server Side Rendered (SSR)",
      "API",
      "Analytics"
    ],
    summary:
      "<p>Welcome to Shortr, a URL shortener that allows you to create short links and track their performance. With Shortr, you can easily shorten long URLs into short, easy-to-share links. You can also track the number of clicks, the location of the users, and the devices they are using to access your links. </p> <p class='uppercase font-bold'>How It Works</p> <p>Shortr is built with Nuxt3, a modern web framework that allows for server-side rendering (SSR) of web pages. This improves the performance and SEO of the website, as well as simplifying the deployment process. The frontend of the website is designed with NuxtUI, a component library that provides pre-designed elements for building user interfaces. The backend of the website is powered by a PostgreSQL database that stores the links and analytics data. Read the Github page to learn how to quickly set this up on your own domain.</p> <p>Thank you for reading :) <br /><br />",
    actions: [
      {
        name: "Github",
        link: "https://github.com/itsmeromian/Shortr",
      }
    ],
    image: "imgs/Shortr.jpg",
  },
  {
    name: "Journalist CMS 📰",
    slug: "journalist-crm",
    date: "January 2022",
    description:
      "A CMS where a local journalist publishes her latest articles. Using Nuxt3, Firebase Auth, Firestore and Storage.",
    stack: ["Nuxt3", "TipTap", "Firebase", "Vercel"],
    read: "/projects/journalist-crm",
    features: [
      "Server Side Rendered (SSR)",
      "Optimalised SEO",
      "Easy to use text editor using TipTap",
      "Easy image, file and audio uploading",
    ],
    summary:
      "<p>Welcome to the website of a journalist who writes about various topics and shares her insights with her readers. </p> <p class='uppercase font-bold'>How It Works</p> <p>This website is powered by Nuxt3, a framework that allows for server-side rendering (SSR) of web pages. This means that the pages are pre-rendered on the server and sent to the browser as HTML, which improves the performance, accessibility, and SEO of the website.</p> <p>The content of the website is stored in Firebase, a cloud platform that provides authentication, database, and storage services. Firebase Authentication handles the login and registration of users, Firebase Realtime Database stores the articles written by Annemiek, and Firebase Storage hosts the images and other media files.</p> <p>The website is deployed on Vercel, a cloud platform that specializes in hosting static and JAMstack websites. Vercel offers fast and reliable hosting, automatic SSL certificates, and continuous integration and delivery (CI/CD) workflows. This ensures that the website is always online and updated with the latest content.</p> <p class='uppercase font-bold'>Why It Matters</p> <p>This website is more than just a showcase of Annemiek\'s work. It is also a way for her to connect with her audience and share her opinions and perspectives on various issues. I've created a website that is easy to manage, update, and access for both Annemiek and her readers.</p> <p>If you are interested in creating a similar website for your own content, or if you have any questions or feedback, please feel free to contact me. I   would love to hear from you and help you with your web development needs. Thank you for reading! <br /><br /> <p>Here are some screenshots from the admin page:</p><img src='/imgs/journalistcrm-admin1.jpg'/><br/><img src='/imgs/journalistcrm-admin2.jpg'/>",
    actions: [],
    image: "imgs/JournalistCRM.jpg",
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
      "<p> This is the website of a local italian restaurant located in Emmen. It showcases the menu of the restaurant, the opening hours and contact details. The website also includes a reservation form.</p> <p class='uppercase font-bold'>How It Works</p><p>The website was built using Nuxt 3, a framework for Vue that allows for server-side rendering and static site generation. This improves the performance and SEO of the website, as well as simplifying the deployment process.</p> <p>I also used Tailwind CSS and NuxtUI.</p><p>For the backend, I used Firebase and VercelKV. This allows the owners of the restaurant to change any details on the page using a admin dashboard.</p><p>Before coding the website, I designed it first in Figma, a collaborative design tool that allows to create wireframes, mockups and prototypes. Figma helps to visualize how the website will look like and get feedback from clients and users.</p><p class='uppercase font-bold'>Check it out</p><p> <a href='https://ristorantelorenzo.nl' style='color: #5270e1; text-decoration: underline;'>https://ristorantelorenzo.nl</a> I hope you like it and feel free to contact me if you have any questions or comments about this project.</p>",
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
    name: "Supermarket_Radio 📻",
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
