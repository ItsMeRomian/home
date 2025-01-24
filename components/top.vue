<template>
  <ClientOnly>
    <Backdrop />
  </ClientOnly>
  <div
    class="flex h-[100vh] flex-col bg-[url('/imgs/triangle.svg')] bg-contain bg-right-top bg-no-repeat"
    id="intro"
  >
    <div class="mx-auto flex w-min grow md:mx-20">
      <div class="content self-center">
        <p class="text-2xl">Hey, I'm</p>
        <h1 class="text-6xl font-semibold">Romian Tairovski</h1>
        <p class="my-2 text-3xl font-light md:whitespace-nowrap">
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
