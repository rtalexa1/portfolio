<template>
  <div class="contact-form" id="contact-form">
    <h2>Want to talk?</h2>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
div {
  border: 2px solid navy;
}

.contact-form {
  margin-bottom: 1em;
  box-shadow: 25px 25px 0 -7px #cecece;
  border: solid 2px #4f9292;
  border-radius: 10px;
  width: 50%;
  padding: 5px;
  background: #63b7b7;
  color: white;
}

.text-dark-theme {
  box-shadow: 0 0 0 0;
  border: solid 2px #376767;
  background-color: #4f9292;
  color: white;
}
</style>
