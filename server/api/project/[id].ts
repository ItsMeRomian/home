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
    icon?: string;
  }[];
  image?: string;
  name?: string;
  desc?: string;
}

export const projects = [
  {
    name: "Findalyse 🔍",
    slug: "findalyse",
    date: "Februari 2026",
    description:
      "Not recommended in ChatGPT, Gemini, or Google AI? Findalyse finds out why, and tells you exactly how to fix it.",
    stack: ["Nuxt3", "Tailwind", "Postgres", "Docker"],
    read: "/projects/findalyse",
    features: [
      "AI Visibility Score",
      "Deep checks",
      "Sector-tailored diagnostics",
      "Branded PDF reports",
    ],
    summary:
      "<p>AI is becoming the front door to every business. When someone asks ChatGPT for a recommendation, you're either in the answer, or you don't exist.</p><p class='uppercase font-bold'>How Findalyse works</p><p><strong>Scan</strong> — Enter any domain. Findalyse crawls the site and runs deep checks across entity data, content quality, trust signals, AI presence, and technical health. Pick a sector: a restaurant gets different checks than a law firm.</p><p><strong>Diagnose</strong> — See exactly what's hurting visibility — specific issues with specific fixes, not vague scores. Broken schema, missing FAQ pages, weak entity signals, content gaps AI can't parse. Every action has a severity, impact rating, and clear explanation.</p><p><strong>Fix &amp; track</strong> — Follow the action plan. Rescan. Watch the score move. Generate branded PDF reports to share with stakeholders: your logo, your colors, scheduled automatically.</p><p class='uppercase font-bold'>Track vs Fix</p><p>Competitor tools tell you IF AI mentions you. Findalyse tells you WHY it doesn't, and gives you the exact action plan to change that.</p>",
    actions: [
      {
        name: "Visit",
        icon: "web",
        link: "https://findalyse.com",
      },
    ],
    image: "imgs/findalyse.png",
  },
  {
    name: "Fail2Ban-Cloudflare-NginxProxyManager 🚫",
    slug: "fail2ban-cloudflare-nginxproxymanager",
    date: "Januari 2026",
    description: "Scripts / Tutorial on how to set up Fail2Ban on a machine running Nginx Proxy Manager that is behind Cloudflare.",
    stack: ["Docker", "Nginx Proxy Manager", "Fail2Ban", "Cloudflare"],
    read: "/projects/fail2ban-cloudflare-nginxproxymanager",
    features: ["Tutorial", "Scripts"],
    summary:
      "Scripts / Tutorial on how to set up Fail2Ban on a machine running Nginx Proxy Manager that is behind Cloudflare.",
    actions: [
      {
        icon: "github",
        name: "Github",
        link: "https://gist.github.com/ItsMeRomian/78c416015500d2d74c83dde905ff3803",
      },
    ],
    image: "imgs/fail2ban.png",
  },
  {
    name: "Lightshot-Server 📸",
    slug: "locallightshotserver",
    date: "April 2024",
    description: "A local server for the screenshot server lightshot. Allows you to make screenshots and upload them to your own file sharing platform. Made with bun. Basicly imitates the prntscr.com api.",
    stack: ["Bun", "Docker", "Lightshot"],
    read: "/projects/locallightshotserver",
    features: ["API", "Local"],
    summary:
      "A local server for lightshot. Made with bun (in 50 lines lol). <br> Imitates the http://upload.prntscr.com/upload/ api",
    actions: [
      {
        icon: "github",
        name: "Github",
        link: "https://github.com/itsmeromian/local-lightshot-server",
      },
    ],
    image: "imgs/lightshot.jpg",
  },
  {
    name: "MCDash 🤖",
    slug: "mcdash",
    date: "Februari 2024",
    description: "Minecraft server dashboard for managing your server and players.",
    stack: ["Nuxt3", "NuxtUI", "Postgres", "Docker"],
    read: "/projects/mcdash",
    features: ["Server Side Rendered (SSR)", "API", "Host alongside the Minecraft server"],
    summary:
      "A simple Minecraft server dashboard. Using Nuxt3, ServerTap, NuxtUI. Made to be running ON the machine that runs the minecraft server, so the ServerTap port does not have to be exposed. Kinda only looks good on mobile.",
    actions: [
      {
        icon: "github",
        name: "Github",
        link: "https://github.com/itsmeromian/mcdash",
      },
    ],
    image: "imgs/mcdash.jpg",
  },
  {
    name: "Ristorante Lorenzo 🍕",
    slug: "ristorante-lorenzo",
    date: "October 2021",
    description: "The website of a Italian Restaurant located in Emmen",
    stack: ["Nuxt", "Tailwind", "Firebase"],
    read: "/projects/ristorante-lorenzo",
    features: ["High SEO ranking", "Static site generation", "Easy to use reservation form"],
    summary:
      "<p> This is the website of a local italian restaurant located in Emmen. It showcases the menu of the restaurant, the opening hours and contact details. The website also includes a reservation form.</p> <p class='uppercase font-bold'>How It Works</p><p>The website was built using Nuxt 3, a framework for Vue that allows for server-side rendering and static site generation. This improves the performance and SEO of the website, as well as simplifying the deployment process.</p> <p>I also used Tailwind CSS and NuxtUI.</p><p>For the backend, I used Firebase and VercelKV. This allows the owners of the restaurant to change any details on the page using a admin dashboard.</p><p>Before coding the website, I designed it first in Figma, a collaborative design tool that allows to create wireframes, mockups and prototypes. Figma helps to visualize how the website will look like and get feedback from clients and users.</p><p class='uppercase font-bold'>Check it out</p><p> <a href='https://ristorantelorenzo.nl' style='color: #5270e1; text-decoration: underline;'>https://ristorantelorenzo.nl</a> I hope you like it and feel free to contact me if you have any questions or comments about this project.</p>",
    actions: [
      {
        name: "Visit",
        icon: "web",
        link: "https://ristorantelorenzo.nl/",
      },
    ],
    image: "imgs/RistoranteLorenzo.jpg",
  },
  {
    name: "WebsiteDigitaal 💻",
    slug: "websitedigitaal",
    read: "/projects/websitedigitaal",
    date: "April 2019",
    stack: ["Wordpress", "PHP", "Timber"],
    features: [""],
    summary: "",
    description: "A webdesign company ran with friends.",
    actions: [
      {
        name: "Website",
        icon: "web",
        link: "https://websitedigitaal.nl",
      },
    ],
    image: "imgs/FriendlyTapirs.jpg",
  },
  {
    name: "Shortr 🚀",
    slug: "shortr",
    date: "April 2024",
    description:
      "A URL shortener that allows users to create short links. Allows anyone to check where the link goes and who opened it.",
    stack: ["Nuxt3", "NuxtUI", "Postgres", "Docker"],
    read: "/projects/shortr",
    features: ["Server Side Rendered (SSR)", "API", "Analytics"],
    summary:
      "<p>Welcome to Shortr, a URL shortener that allows you to create short links and track their performance. With Shortr, you can easily shorten long URLs into short, easy-to-share links. You can also track the number of clicks, the location of the users, and the devices they are using to access your links. </p> <p class='uppercase font-bold'>How It Works</p> <p>Shortr is built with Nuxt3, a modern web framework that allows for server-side rendering (SSR) of web pages. This improves the performance and SEO of the website, as well as simplifying the deployment process. The frontend of the website is designed with NuxtUI, a component library that provides pre-designed elements for building user interfaces. The backend of the website is powered by a PostgreSQL database that stores the links and analytics data. Read the Github page to learn how to quickly set this up on your own domain.</p> <p>Thank you for reading :) <br /><br />",
    actions: [
      {
        icon: "github",
        name: "Github",
        link: "https://github.com/itsmeromian/Shortr",
      },
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
      "",
    actions: [
      {
        icon: "github",
        name: "Github",
        link: "https://github.com/itsmeromian/JournalistCMS",
      },
    ],
    image: "imgs/JournalistCRM.jpg",
  },

  {
    name: "TipTopIbiza 🏠",
    slug: "tiptopibiza",
    date: "Januari 2020",
    read: "/projects/tiptopibiza",
    description: "Website of a Spanish property management company.",
    stack: ["Nuxt", "Bootstrap"],
    features: ["High SEO ranking", "Static site generation"],
    summary:
      "",
    actions: [
      {
        name: "Visit",
        icon: "web",
        link: "https://tiptopibiza.com/",
      },
    ],
    image: "imgs/TipTopIbiza.jpg",
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
        icon: "github",
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
        icon: "github",
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
        icon: "github",
        name: "Github",
        link: "https://github.com/ItsMeRomian/ModTools",
      },
    ],
    image: "imgs/ModTools.jpg",
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
        icon: "github",
        name: "Github",
        link: "https://github.com/ItsMeRomian/Pasta",
      },
      {
        name: "Website",
        icon: "web",
        link: "https://pasta.dyna.host",
      },
    ],
    image: "imgs/pasta.jpg",
  },
];
