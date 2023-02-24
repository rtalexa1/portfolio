<template>
  <NavBar />
  <router-view />
  <footer
    :class="{ 'footer-dark-theme': $store.state.darkThemeActive }"
    id="footer"
  >
    <span>Copyright 2023 RT Alexander</span> |
    <span>Contact: rtalexa1@gmail.com</span>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  // methods: {
  //   activateDarkTheme() {
  //     const body = document.getElementsByTagName("body")[0];
  //     body.classList.add("dark-theme");
  //     this.activateAboutMeDarkTheme();
  //     this.activateProjectsDarkTheme();
  //     this.activateContactDarkTheme();
  //     this.activateScreenshotsDarkTheme();
  //     this.activateFooterDarkTheme();
  //     localStorage.setItem("theme", "dark");
  //   },
  //   deactivateDarkTheme() {
  //     const body = document.getElementsByTagName("body")[0];
  //     body.classList.remove("dark-theme");
  //     this.deactivateAboutMeDarkTheme();
  //     this.deactivateProjectsDarkTheme();
  //     this.deactivateContactDarkTheme();
  //     this.deactivateScreenshotsDarkTheme();
  //     this.deactivateFooterDarkTheme();
  //     localStorage.setItem("theme", "light");
  //   },
  //   activateAboutMeDarkTheme() {
  //     const photoContainer = document.getElementById("photo-container");
  //     photoContainer.style.borderColor = "#376767";
  //     photoContainer.style.backgroundColor = "#376767";

  //     const aboutMeText = document.getElementById("about-me-text");
  //     aboutMeText.classList.add("text-dark-theme");
  //   },
  //   deactivateAboutMeDarkTheme() {
  //     const photoContainer = document.getElementById("photo-container");
  //     photoContainer.style.borderColor = "#63b7b7";
  //     photoContainer.style.backgroundColor = "#63b7b7";

  //     const aboutMeText = document.getElementById("about-me-text");
  //     aboutMeText.classList.remove("text-dark-theme");
  //   },
  //   activateProjectsDarkTheme() {
  //     const title = document.getElementById("projects-title");
  //     title.style.color = "white";
  //     title.style.filter = "drop-shadow(0 0 2px #faf9f6)";

  //     const titles = document.getElementsByClassName("project-title");
  //     for (let i = 0; i < titles.length; i++) {
  //       titles[i].classList.add("text-dark-theme");
  //       // To-do: Add text shadow to h2's
  //       // titles[i].innerText.style.filter = "drop-shadow(0 0 2px #faf9f6)";
  //     }

  //     const synopses = document.getElementsByClassName("project-synopsis");
  //     for (let i = 0; i < synopses.length; i++) {
  //       synopses[i].classList.add("text-dark-theme");
  //     }
  //   },
  //   deactivateProjectsDarkTheme() {
  //     const title = document.getElementById("projects-title");
  //     title.style.color = "#63b7b7";

  //     const titles = document.getElementsByClassName("project-title");
  //     for (let i = 0; i < titles.length; i++) {
  //       titles[i].classList.remove("text-dark-theme");
  //     }

  //     const synopses = document.getElementsByClassName("project-synopsis");
  //     for (let i = 0; i < synopses.length; i++) {
  //       synopses[i].classList.remove("text-dark-theme");
  //     }
  //   },
  //   activateContactDarkTheme() {
  //     const contactForm = document.getElementById("contact-form");
  //     contactForm.classList.add("contact-form-dark-theme");
  //   },
  //   deactivateContactDarkTheme() {
  //     const contactForm = document.getElementById("contact-form");
  //     contactForm.classList.remove("contact-form-dark-theme");
  //   },
  //   activateScreenshotsDarkTheme() {
  //     const exitTicketScreenshot = document.getElementById(
  //       "exit-ticket-screenshot"
  //     );
  //     exitTicketScreenshot.classList.add("exit-ticket-screenshot-dark-theme");

  //     const mathVizScreenshot = document.getElementById("math-viz-screenshot");
  //     mathVizScreenshot.classList.add("math-viz-screenshot-dark-theme");

  //     const divyUpScreenshot = document.getElementById("divy-up-screenshot");
  //     divyUpScreenshot.classList.add("divy-up-screenshot-dark-theme");
  //   },
  //   deactivateScreenshotsDarkTheme() {
  //     const exitTicketScreenshot = document.getElementById(
  //       "exit-ticket-screenshot"
  //     );
  //     exitTicketScreenshot.classList.remove(
  //       "exit-ticket-screenshot-dark-theme"
  //     );

  //     const mathVizScreenshot = document.getElementById("math-viz-screenshot");
  //     mathVizScreenshot.classList.remove("math-viz-screenshot-dark-theme");

  //     const divyUpScreenshot = document.getElementById("divy-up-screenshot");
  //     divyUpScreenshot.classList.remove("divy-up-screenshot-dark-theme");
  //   },
  //   activateFooterDarkTheme() {
  //     const footer = document.getElementById("footer");
  //     footer.style.background = "#1b1212";
  //     footer.style.color = "#faf9f6";
  //   },
  //   deactivateFooterDarkTheme() {
  //     const footer = document.getElementById("footer");
  //     footer.style.background = "#faf9f6";
  //     footer.style.color = "#1b1212";
  //   },
  // },
  // updated() {
  //   if (localStorage.theme === undefined) {
  //     localStorage.setItem("theme", "light");
  //     this.deactivateDarkTheme();
  //   } else if (localStorage.theme === "dark") {
  //     this.activateDarkTheme();
  //   }
  // },
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
  font-size: x-large;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
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

footer {
  padding: 2px 10px;
  background: #faf9f6;
  font-size: medium;
  text-align: center;
}

.footer-dark-theme {
  background: #1b1212;
  color: #faf9f6;
}

@media (max-width: 768px) {
  body {
    font-size: medium;
  }

  footer {
    font-size: small;
  }
}
</style>
