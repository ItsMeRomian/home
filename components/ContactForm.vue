<template>
  <form @submit.prevent="onSubmit()">
    <div class="row pb-4 pt-3 px-4 rounded" style="background: var(--secondary)">
      <div class="col-md-6 col-12">
        <input type="text" class="form-control form-control-lg" aria-label="First name" placeholder="First Name" v-model="data.firstName">
      </div>
      <div class="col-md-6 col-12 mt-md-0 mt-3">
        <input type="text" class="form-control form-control-lg" aria-label="Last name"  placeholder="Last Name" v-model="data.lastName">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="col p-3 rounded" style="background: var(--secondary)">
          <input type="text" class="form-control form-control-lg" aria-label="Last name"  placeholder="Your Email" v-model="data.email">
        </div>
        <div class="col mt-3">
          <button class="btn btn-success w-100 p-3 submit-button">{{state}}</button>
        </div>
      </div>
      <div class="col">
        <div class="col p-3 rounded h-100" style="background: var(--secondary)">
          <textarea class="form-control" aria-label="With textarea" placeholder="Your Message" v-model="data.message"></textarea>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
  export default {
    name: "ContactForm",
    data() {
      return {
        state: "Submit",
        messageSend: false,
        data: {
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }
      }
    },
    async mounted() {
      try {
        await this.$recaptcha.init()
      } catch (e) {
        console.error(e);
      }
    },
    methods: {
      async onSubmit() {
        this.state = "Please wait..."
        try {
          const token = await this.$recaptcha.execute('sendMessage')
          console.log('ReCaptcha token:', token)
          const response = await this.$http.$get('http://localhost:5000/itsmeromian/us-central1/sendMessage?' +
            'firstName=' + this.data.firstName +
            '&email=' + this.data.email +
            '&message=' + this.data.message +
            '&lastName=' + this.data.lastName +
            '&token=' + token)
          if (response.success) {
            this.messageSend = true
            this.state = "Message send!"
            console.log(response)
          } else {
            console.error(response)
            if (response.error === "missing") {
              this.state = "Something went wrong...";
            }
            if (response.error === "captcha") {
              this.state = "Captcha Fail, serverSide";
            }
          }
        } catch (error) {
          this.state = "Sorry, ReCaptcha Fail..."
          console.log('sendMessage error:', error)
        }
      }
    }
  }
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
    font-family: Roboto,sans-serif;
    font-weight: 900;
    color: var(--text)
  }
  .form-text {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text)
  }
</style>
