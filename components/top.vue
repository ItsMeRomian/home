<template>
  <div class="flex h-[100vh] flex-col" id="intro">
    <div class="mx-auto flex w-min grow md:mx-20">
      <div class="flex flex-col self-center">
        <p class="mb-2 text-2xl">Hey, I'm</p>
        <h1 class="text-6xl font-semibold">Romian Tairovski</h1>
        <p class="mb-8 text-3xl font-light md:whitespace-nowrap">
          <span class="whitespace-nowrap">STUDENT SOFTWARE</span> DEVELOPER
        </p>
        <IconList />
      </div>
    </div>
    <div class="mb-10 w-full text-center">
      <RouterLink to="/#projects">
        <Icon name="material-symbols:arrow-drop-down-circle" class="mx-auto text-6xl" />
      </RouterLink>
    </div>
  </div>
</template>
