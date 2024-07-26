<template>
  <form
    @submit.prevent="onSubmit()"
    class="bg-secondary p-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[980px] mx-auto my-10 rounded-lg"
  >
    <div class="">
      <input
        id="firstName"
        required
        class="w-full p-2 rounded-md bg-trimary/50 hover:bg-trimary/80 focus:bg-trimary/80 focus:outline-none"
        type="text"
        aria-label="First name"
        placeholder="First Name"
        v-model="data.firstName"
      />
    </div>
    <div>
      <input
        id="lastName"
        required
        class="w-full p-2 rounded-md bg-trimary/50 hover:bg-trimary/80 focus:bg-trimary/80 focus:outline-none"
        type="text"
        aria-label="Last name"
        placeholder="Last Name"
        v-model="data.lastName"
      />
    </div>
    <div>
      <input
        id="email"
        required
        class="w-full p-2 rounded-md bg-trimary/50 hover:bg-trimary/80 focus:bg-trimary/80 focus:outline-none"
        type="email"
        aria-label="Last name"
        placeholder="Your Email"
        v-model="data.email"
      />
    </div>
    <div class="row-span-2">
      <textarea
        id="message"
        required
        class="w-full p-2 rounded-md bg-trimary/50 hover:bg-trimary/80 focus:bg-trimary/80 focus:outline-none min-h-[140px] md:min-h-[200px]"
        aria-label="With textarea"
        placeholder="Your Message"
        v-model="data.message"
      ></textarea>
    </div>
    <div class="s place-self-end w-full">
      <button
        type="submit"
        id="submit"
        class="bg-trimary/50 hover:bg-trimary/80 rounded-md w-full px-2 text-2xl font-bold transition-all duration-50 mt-auto"
        :class="{ 'py-4': state !== 'LOADING', 'py-2': state == 'LOADING' }"
      >
        <Icon
          class="h-12 w-12"
          name="eos-icons:three-dots-loading"
          v-if="state === 'LOADING'"
        />
        <span v-if="state === 'FAILED'">
          Failed
          <Icon name="material-symbols:cancel" />
        </span>
        <span v-if="state === 'READY'">Send</span>
        <span v-if="state === 'SUCCESS'">
          Sent
          <Icon name="material-symbols:check-circle" />
        </span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  type IReCaptchaComposition,
  useReCaptcha,
  VueReCaptcha,
} from "vue-recaptcha-v3";
import { faker } from "@faker-js/faker";
const enviroment = useRuntimeConfig();
const { gtag } = useGtag();

const state = ref<"READY" | "SUCCESS" | "FAILED" | "LOADING">("READY");
const data =
  enviroment.public.prod === "true"
    ? ref({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      })
    : ref({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraph(),
      });
let recaptchaInstance: IReCaptchaComposition;

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
  state.value = "LOADING";
  try {
    const { data: res } = await useFetch("/api/sendDiscord", {
      method: "POST",
      body: {
        firstName: data.value.firstName,
        lastName: data.value.lastName,
        message: data.value.message,
        email: data.value.email,
        token: await getToken(),
      },
    });
    if ((res.value && res.value.m) === "OK") {
      state.value = "SUCCESS";
      gtag("event", "send_form_1");
    } else {
      state.value = "FAILED";
    }
    console.log(res.value);
  } catch (error) {
    state.value = "FAILED";
    console.log("sendMessage error:", error);
  }
};
</script>
