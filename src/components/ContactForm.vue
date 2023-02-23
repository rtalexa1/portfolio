<template>
  <div class="contact-form" id="contact-form">
    <h2 style="text-align: center">Want to talk?</h2>
    <form @submit.prevent="onSubmit">
      <label for="name">Name</label>
      <br />
      <input v-model="name" type="text" />
      <br />
      <label for="email">Email</label>
      <br />
      <input v-model="email" type="text" />
      <br />
      <label for="message">Write a message</label>
      <br />
      <textarea v-model="message" id="message">What's on your mind?</textarea>
      <br />
      <div class="btn-container">
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.name + this.email + this.message);
    },
  },
};
</script>

<style scoped>
.contact-form {
  margin-bottom: 1em;
  box-shadow: 25px 25px 0 -7px #cecece;
  border: solid 2px #4f9292;
  border-radius: 10px;
  width: 30%;
  padding: 5px;
  background: #63b7b7;
  color: white;
}

input,
textarea {
  border: solid 2px #4f9292;
  border-radius: 5px;
  width: 100%;
  height: 2em;
  font-size: large;
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
  font-size: large;
  font-family: inherit;
}

.text-dark-theme {
  box-shadow: 0 0 0 0;
  border: solid 2px #376767;
  background-color: #4f9292;
  color: white;
}
</style>
