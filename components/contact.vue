<template>
  <form
    @submit.prevent="onSubmit()"
    class="bg-secondary p-5 grid grid-cols-2 gap-4 max-w-[980px] mx-auto my-10"
  >
    <div class="text-primary">
      <input
        id="firstName"
        required
        class="w-full p-2 rounded-sm text-primary"
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
        class="w-full p-2 rounded-sm text-primary"
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
        class="w-full p-2 rounded-sm text-primary"
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
        class="w-full p-2 rounded-sm text-primary"
        aria-label="With textarea"
        placeholder="Your Message"
        v-model="data.message"
      ></textarea>
    </div>
    <div>
      <button
        class="bg-trimary hover:bg-blueaccent rounded-md w-full px-2 py-4 text-2xl font-bold"
      >
        {{ state }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  IReCaptchaComposition,
  useReCaptcha,
  VueReCaptcha,
} from "vue-recaptcha-v3";

const state = ref("Submit");
const messageSend = ref(false);
const data = ref({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
let recaptchaInstance: IReCaptchaComposition;

onMounted(() => {
  const { vueApp } = useNuxtApp();
  vueApp.use(VueReCaptcha, {
    siteKey: "6Lf4HgAdAAAAAP6hP8Ao3bwrtT1zvmLF-GPH6G6H",
    loaderOptions: {},
  });
  recaptchaInstance = useReCaptcha() as IReCaptchaComposition;
});
const getToken = async () => {
  await recaptchaInstance.recaptchaLoaded();
  return await recaptchaInstance.executeRecaptcha("login");
};

const onSubmit = async () => {
  state.value = "Please wait...";
  try {
    const { data: res } = await useFetch(
      "https://us-central1-itsmeromian.cloudfunctions.net/DynaFoolsContactForm",
      {
        method: "POST",
        body: JSON.stringify({
          firstName: data.value.firstName,
          lastName: data.value.lastName,
          message: data.value.message,
          email: data.value.email,
          token: await getToken(),
        }),
      }
    );
    (res.value as any).success
      ? (state.value = "Message Sent!")
      : (state.value = `Hmm.. ${res.value as any}`);
    console.log(res.value);
  } catch (error) {
    state.value = "Hmm.. Something went wrong";
    console.log("sendMessage error:", error);
  }
};
</script>

<style scoped>
textarea {
  height: 100%;
}
.form-control {
  background: var(--trimary);
  border: none;
  color: var(--text);
  min-height: 3.85rem;
}
.submit-button {
  font-size: 2rem;
  font-family: Roboto, sans-serif;
  font-weight: 900;
  color: var(--text);
}
</style>
