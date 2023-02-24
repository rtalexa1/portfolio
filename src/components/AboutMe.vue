<template>
  <div class="about-me-container" id="about-me">
    <div
      class="photo-container"
      :class="{ 'photo-container-dark-theme': $store.state.darkThemeActive }"
      id="photo-container"
    >
      <img
        src="../assets/images/IMG_20200412_161025_2.png"
        alt="RT picture"
        class="about-me-pic"
      />
    </div>
    <p
      class="about-me-text"
      :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
      id="about-me-text"
    >
      <strong>Hello!</strong> My name is RT, and I love to create intuitive,
      useful websites that make things easier for users. I never considered that
      I could build software from scratch, but as a lifelong language learner,
      it has been a joy learning the languages of programming. I am constantly
      learning new things, and I am excited to put them to use!
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
.about-me-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 11em;
}

.photo-container {
  position: relative;
  z-index: 9999;
  left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 500ms, background-color 500ms;
  border: solid 2px #63b7b7;
  border-radius: 50%;
  height: 8em;
  width: 8em;
  background-color: #63b7b7;
}

.photo-container-dark-theme {
  transition: border 500ms, background-color 500ms;
  border: solid 2px #376767;
  background-color: #376767;
}

.about-me-pic {
  clip-path: circle(50%);
  width: 7.5em;
  height: 7.5em;
}

.about-me-text {
  position: relative;
  right: 35px;
  transition: box-shadow 500ms, border 500ms, background-color 500ms,
    color 500ms;
  margin-right: 5px;
  box-shadow: 25px 25px 0 -7px #cecece;
  border: solid 2px #63b7b7;
  border-radius: 10px;
  width: 80%;
  max-height: 10em;
  padding: 1em 1em 1em 4em;
  font-size: x-large;
  background-color: #eff8f8;
}

.text-dark-theme {
  transition: background-color 500ms, color 500ms;
  box-shadow: 0 0 0 0;
  /* border: solid 2px #376767; */
  background-color: #1b1212;
  text-shadow: 0 0 1px #faf9f6;
  color: white;
}
</style>
