<template>
  <div
    class="contact-form"
    :class="{ 'contact-form-dark-theme': $store.state.darkThemeActive }"
    id="contact-form"
  >
    <div v-if="showForm" class="form-container">
      <h2 style="text-align: center">Get in touch</h2>
      <form ref="form" @submit.prevent="onSubmit">
        <label for="name">Name</label>
        <br />
        <input type="text" name="user_name" id="name" />
        <br />
        <label for="email">Email</label>
        <br />
        <input type="email" name="user_email" id="email" />
        <br />
        <label for="message">Write a message</label>
        <br />
        <textarea name="message" id="message"></textarea>
        <br />
        <div class="btn-container">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
    <div v-else class="sent-message">
      <h3>Message Sent</h3>
      <p>Thanks for reaching out! I will get back to you as soon as I can.</p>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  data() {
    return {
      showForm: true,
    };
  },
  methods: {
    onSubmit() {
      emailjs
        .sendForm(
          "service_wxyk1e4",
          "contact-form",
          this.$refs.form,
          "8JalONMpcU2JQEZB3"
        )
        .then(
          // eslint-disable-next-line no-unused-vars
          (_result) => {
            this.showForm = false;
          }
        );
    },
  },
};
</script>

<style scoped>
.contact-form {
  /* margin-bottom: 1em; */
  /* box-shadow: 25px 25px 0 -7px #cecece; */
  display: flex;
  justify-content: center;
  border-top: solid 2px #4f9292;
  /* border-radius: 10px; */
  width: 100%;
  padding: 5px 5px 1em 5px;
  background: #63b7b7;
  color: white;
}

.form-container {
  width: 25%;
}

h2 {
  font-size: x-large;
}

label {
  font-size: large;
}

input,
textarea {
  border: solid 2px #4f9292;
  border-radius: 5px;
  width: 100%;
  height: 2em;
  font-size: medium;
  font-family: inherit;
}

textarea {
  height: 4em;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.submit-btn {
  border: solid 2px #4f9292;
  border-radius: 5px;
  width: 50%;
  height: 2em;
  background: #faf9f6;
  font-size: medium;
  font-family: inherit;
}

.sent-message {
  padding: 5px;
}

.contact-form-dark-theme {
  transition: background-color 500ms, color 500ms;
  box-shadow: 0 0 0 0;
  border-top: solid 2px #376767;
  border-bottom: solid 2px #376767;
  background-color: #1b1212;
  text-shadow: 0 0 1px #faf9f6;
  color: white;
}

@media (max-width: 768px) {
  .form-container {
    width: 70%;
  }
}
</style>
