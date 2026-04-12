<template>
  <div class="mb-4 flex flex-row bg-secondary p-4 md:p-5">
    <span class="grow text-center text-2xl font-extrabold md:text-left">
      <NuxtLink
        to="/"
        class="hover:text-blueaccent transition-all duration-75"
        data-umami-event="Logo Click"
      >
        tairov.ski 👨🏽‍💻
      </NuxtLink>
    </span>
    <div class="hidden self-center text-sm font-extrabold uppercase md:block">
      <NuxtLink
        to="/"
        class="hover:text-blueaccent transition-all duration-75"
        data-umami-event="Menu click"
        data-umami-event-value="Home"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/#projects"
        class="hover:text-blueaccent mx-5 transition-all duration-75"
        data-umami-event="Menu click"
        data-umami-event-value="Projects"
        >Projects</NuxtLink
      >
      <NuxtLink
        to="/#contact"
        class="hover:text-blueaccent transition-all duration-75"
        data-umami-event="Menu click"
        data-umami-event-value="Contact"
        >Contact</NuxtLink
      >
    </div>
  </div>
</template>
