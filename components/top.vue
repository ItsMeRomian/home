<template>
  <div class="flex flex-col h-[100vh] intro">
    <div class="flex grow mx-4">
      <div class="content self-center">
        <p class="text-2xl">Hey, I'm</p>
        <h1 class="text-6xl mb-2 font-semibold">Romian Tairovski</h1>
        <p class="text-3xl font-light">STUDENT SOFTWARE DEVELOPER</p>
        <icons />
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
