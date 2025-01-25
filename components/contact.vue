<template>
  <form @submit.prevent="onSubmit()">
    <UiCard class="border-none">
      <template #content>
        <UiCardContent class="relative mx-auto flex max-w-screen-sm flex-col gap-3">
          <icon
            name="uil:check"
            class="absolute left-1/2 top-1/2 z-10 mx-auto -translate-y-[50%] translate-x-[-50%] text-8xl"
            v-if="state === 'Sent!'"
          />
          <div class="flex flex-col gap-2" v-for="field in fields">
            <UiLabel :for="field.name" :class="{ 'opacity-50': state !== 'Send' }">{{
              field.placeholder
            }}</UiLabel>
            <UiInput
              v-if="field.fieldType === 'input'"
              :disabled="state !== 'Send'"
              :id="field.name"
              required
              :type="field.type"
              :aria-label="field.name"
              v-model="data[field.name as keyof typeof data]"
            />
            <UiTextarea
              :disabled="state !== 'Send'"
              v-else-if="field.fieldType === 'textarea'"
              :id="field.name"
              required
              :aria-label="field.name"
              v-model="data.message"
            />
          </div>
          <UiButton type="submit" id="submit" :disabled="state !== 'Send'">
            {{ state }}
          </UiButton>
        </UiCardContent>
      </template>
    </UiCard>
  </form>
</template>

<script setup lang="ts">
  import { faker } from "@faker-js/faker";
  import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
  import type { IReCaptchaComposition } from "vue-recaptcha-v3";

  const enviroment = useRuntimeConfig();
  const { gtag } = useGtag();

  const state = ref<"Send" | "Sent!" | ":(" | "Sending...">("Send");

  const noFake = false;

  const data = ref(
    enviroment.public.prod === "true" || noFake
      ? ref({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
      : ref({
          firstName: faker.person.firstName(),
          email: faker.internet.email(),
          message: faker.lorem.paragraph(),
        })
  );
  let recaptchaInstance: IReCaptchaComposition;

  const fields = ref([
    {
      name: "firstName",
      type: "text",
      fieldType: "input",
      placeholder: "Naam",
      required: true,
    },
    {
      name: "email",
      type: "email",
      fieldType: "input",
      placeholder: "Email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      fieldType: "textarea",
      placeholder: "Message",
      required: true,
    },
  ]);

  onMounted(() => {
    const { vueApp } = useNuxtApp();
    vueApp.use(VueReCaptcha, {
      siteKey: "6Lf4HgAdAAAAAP6hP8Ao3bwrtT1zvmLF-GPH6G6H",
      loaderOptions: {
        autoHideBadge: true,
      },
    });
    recaptchaInstance = useReCaptcha() as IReCaptchaComposition;
  });
  const getToken = async () => {
    await recaptchaInstance.recaptchaLoaded();
    return await recaptchaInstance.executeRecaptcha("login");
  };

  const onSubmit = async () => {
    state.value = "Sending...";
    try {
      const { data: res } = await useFetch("/api/sendDiscord", {
        method: "POST",
        body: {
          firstName: data.value.firstName,
          lastName: "",
          message: data.value.message,
          email: data.value.email,
          token: await getToken(),
        },
      });
      if ((res.value && res.value.m) === "OK") {
        state.value = "Sent!";
        gtag("event", "send_form_1");
      } else {
        state.value = ":(";
      }
      console.log(res.value);
    } catch (error) {
      state.value = ":(";
      console.log("sendMessage error:", error);
    }
  };
</script>
