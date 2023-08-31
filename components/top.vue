<template>
  <div class="flex flex-col h-[100vh] intro">
    <div class="flex grow mx-4">
      <div class="content self-center">
        <p class="text-2xl">Hey, I'm</p>
        <h1 class="text-6xl mb-2 font-semibold">Romian Tairovski</h1>
        <p class="text-3xl font-light">STUDENT SOFTWARE DEVELOPER</p>
        <span class="text-4xl">
          <NuxtLink to="https://github.com/itsmeromian" target="_BLANK">
            <Icon name="uil:github" class="hover:text-blueaccent" />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/romiantairovski"
            target="_BLANK"
          >
            <Icon class="mx-2 hover:text-blueaccent" name="uil:linkedin" />
          </NuxtLink>
          <NuxtLink to="https://twitter.com/itsmeromian" target="_BLANK">
            <Icon name="simple-icons:x" class="hover:text-blueaccent p-0.5" />
          </NuxtLink>
        </span>
      </div>
    </div>
    <div class="w-full text-center mb-2">
      <RouterLink to="/#projects">
        <Icon
          name="material-symbols:arrow-drop-down-circle"
          class="mx-auto text-6xl"
        />
      </RouterLink>
    </div>
  </div>
</template>
