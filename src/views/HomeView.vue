<template>
  <div
    class="home"
    :class="{ 'home-dark-theme': $store.state.darkThemeActive }"
  >
    <AboutMe />
    <div class="section-break"></div>
    <ProjectsDisplay />
    <div class="section-break"></div>
    <ContactForm />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import ProjectsDisplay from "../components/ProjectsDisplay.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    ProjectsDisplay,
    ContactForm,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 500ms;
  background-color: #faf9f6;
}

.home-dark-theme {
  background-color: #1b1212;
}

.section-break {
  height: 2em;
}
</style>
