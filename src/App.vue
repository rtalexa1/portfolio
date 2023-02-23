<template>
  <NavBar
    @activate-dark-theme="activateDarkTheme"
    @deactivate-dark-theme="deactivateDarkTheme"
  />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  methods: {
    activateDarkTheme() {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("dark-theme");
      this.activateAboutMeDarkTheme();
      this.activateProjectsDarkTheme();
      this.activateContactDarkTheme();
      this.activateScreenshotsDarkTheme();
      localStorage.setItem("theme", "dark");
    },
    deactivateDarkTheme() {
      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("dark-theme");
      this.deactivateAboutMeDarkTheme();
      this.deactivateProjectsDarkTheme();
      this.deactivateContactDarkTheme();
      this.deactivateScreenshotsDarkTheme();
      localStorage.setItem("theme", "light");
    },
    activateAboutMeDarkTheme() {
      const photoContainer = document.getElementById("photo-container");
      photoContainer.style.borderColor = "#376767";
      photoContainer.style.backgroundColor = "#376767";

      const aboutMeText = document.getElementById("about-me-text");
      aboutMeText.classList.add("text-dark-theme");
    },
    deactivateAboutMeDarkTheme() {
      const photoContainer = document.getElementById("photo-container");
      photoContainer.style.borderColor = "#63b7b7";
      photoContainer.style.backgroundColor = "#63b7b7";

      const aboutMeText = document.getElementById("about-me-text");
      aboutMeText.classList.remove("text-dark-theme");
    },
    activateProjectsDarkTheme() {
      const title = document.getElementById("projects-title");
      title.style.color = "white";
      title.style.filter = "(0 0 2px #faf9f6)";

      const titles = document.getElementsByClassName("project-title");
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.add("text-dark-theme");
      }

      const synopses = document.getElementsByClassName("project-synopsis");
      for (let i = 0; i < synopses.length; i++) {
        synopses[i].classList.add("text-dark-theme");
      }
    },
    deactivateProjectsDarkTheme() {
      const title = document.getElementById("projects-title");
      title.style.color = "#63b7b7";

      const titles = document.getElementsByClassName("project-title");
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove("text-dark-theme");
      }

      const synopses = document.getElementsByClassName("project-synopsis");
      for (let i = 0; i < synopses.length; i++) {
        synopses[i].classList.remove("text-dark-theme");
      }
    },
    activateContactDarkTheme() {
      const contactForm = document.getElementById("contact-form");
      contactForm.classList.add("text-dark-theme");
    },
    deactivateContactDarkTheme() {
      const contactForm = document.getElementById("contact-form");
      contactForm.classList.remove("text-dark-theme");
    },
    activateScreenshotsDarkTheme() {
      const exitTicketScreenshot = document.getElementById(
        "exit-ticket-screenshot"
      );
      exitTicketScreenshot.classList.add("exit-ticket-screenshot-dark-theme");

      const mathVizScreenshot = document.getElementById("math-viz-screenshot");
      mathVizScreenshot.classList.add("math-viz-screenshot-dark-theme");

      const divyUpScreenshot = document.getElementById("divy-up-screenshot");
      divyUpScreenshot.classList.add("divy-up-screenshot-dark-theme");
    },
    deactivateScreenshotsDarkTheme() {
      const exitTicketScreenshot = document.getElementById(
        "exit-ticket-screenshot"
      );
      exitTicketScreenshot.classList.remove(
        "exit-ticket-screenshot-dark-theme"
      );

      const mathVizScreenshot = document.getElementById("math-viz-screenshot");
      mathVizScreenshot.classList.remove("math-viz-screenshot-dark-theme");

      const divyUpScreenshot = document.getElementById("divy-up-screenshot");
      divyUpScreenshot.classList.remove("divy-up-screenshot-dark-theme");
    },
  },
  updated() {
    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "light");
      this.deactivateDarkTheme();
    } else if (localStorage.theme === "dark") {
      this.activateDarkTheme();
    }
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100%;
  background-color: #faf9f6;
  font-size: x-large;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  transition: background-color 500ms;
}

@media (max-width: 768px) {
  body {
    font-size: medium;
  }
}

html {
  overflow-y: scroll;
  height: 100%;
}

h1,
h2,
h3 {
  font-weight: 300;
}
</style>
