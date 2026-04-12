<template>
  <div class="flex h-[100vh] flex-col" id="intro">
    <div class="mx-auto flex w-min grow md:mx-20">
      <div class="flex flex-col self-center px-4">
        <p class="mb-2 text-2xl">Hey, I'm</p>
        <h1 class="whitespace-nowrap text-4xl font-semibold md:text-6xl">Romian Tairovski</h1>
        <p class="mb-8 text-xl font-light md:whitespace-nowrap md:text-3xl">SOFTWARE DEVELOPER</p>
        <IconList />
      </div>
    </div>
    <div class="mb-10 w-full text-center">
      <a href="/#projects" data-umami-event="Scroll To Projects Click">
        <Icon name="material-symbols:arrow-drop-down-circle" class="mx-auto text-6xl" />
      </a>
    </div>
  </div>
</template>
