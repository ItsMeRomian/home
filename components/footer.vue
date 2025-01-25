<template>
  <div class="mt-4 flex flex-col gap-4 py-4 text-center md:mt-40">
    <UiDivider class="mx-auto w-1/4" />
    <div class="my-8 flex w-full flex-col gap-4">
      <IconList :center="true" />
      <p>&copy; Romian Tairovski {{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>
