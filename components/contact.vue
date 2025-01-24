<template>
  <form
    @submit.prevent="onSubmit()"
    class="mx-auto grid max-w-[980px] grid-cols-1 gap-4 p-10 md:my-10 md:grid-cols-2 md:gap-5 md:rounded-lg md:bg-primary md:shadow-xl"
  >
    <div class="">
      <input
        id="firstName"
        required
        class="bg-trimary/50 hover:bg-trimary/60 focus:bg-trimary/60 placeholder-text w-full rounded-md p-2 focus:outline-none"
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
        class="bg-trimary/50 hover:bg-trimary/60 focus:bg-trimary/60 placeholder-text w-full rounded-md p-2 focus:outline-none"
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
        class="bg-trimary/50 hover:bg-trimary/60 focus:bg-trimary/60 placeholder-text w-full rounded-md p-2 focus:outline-none"
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
        class="bg-trimary/50 hover:bg-trimary/60 focus:bg-trimary/60 placeholder-text min-h-[140px] w-full rounded-md p-2 focus:outline-none md:min-h-[200px]"
        aria-label="With textarea"
        placeholder="Your Message"
        v-model="data.message"
      ></textarea>
    </div>
    <div class="w-full translate-y-[-6px] place-self-end">
      <button
        type="submit"
        id="submit"
        class="bg-trimary/50 hover:bg-trimary/60 duration-50 mt-auto w-full rounded-md px-2 text-2xl font-bold transition-all"
        :class="{ 'py-4': state !== 'LOADING', 'py-2': state == 'LOADING' }"
      >
        <Icon class="h-12 w-12" name="eos-icons:three-dots-loading" v-if="state === 'LOADING'" />
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
  import { faker } from "@faker-js/faker";
  import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
  import type { IReCaptchaComposition } from "vue-recaptcha-v3";

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
