<template>
  <div class="home">
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
}

.section-break {
  height: 3em;
}
</style>
