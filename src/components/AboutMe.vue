<template>
  <div class="about-me-container" id="about-me">
    <div class="photo-container" id="photo-container">
      <img
        src="../assets/IMG_20200412_161025_2.png"
        alt="RT picture"
        class="about-me-pic"
      />
    </div>
    <p class="about-me-text" id="about-me-text">
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
  border: solid 2px #faf9f6;
  border-radius: 50%;
  height: 8em;
  width: 8em;
  background-color: #faf9f6;
}

.about-me-pic {
  clip-path: circle(50%);
  width: 7.5em;
  height: 7.5em;
}

.about-me-text {
  position: relative;
  right: 35px;
  margin-right: 5px;
  box-shadow: 25px 25px 0 -7px #cecece;
  border: solid 2px #4f9292;
  border-radius: 0 10px 10px 0;
  width: 80%;
  max-height: 10em;
  padding: 1em 1em 1em 4em;
  font-size: x-large;
  background-color: #63b7b7;
  color: white;
}

.text-dark-theme {
  box-shadow: 0 0 0 0;
  border: solid 2px #376767;
  background-color: #4f9292;
  color: white;
}
</style>
