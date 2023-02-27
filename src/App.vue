<template>
  <NavBar />
  <router-view />
  <footer
    :class="{ 'footer-dark-theme': $store.state.darkThemeActive }"
    id="footer"
  >
    <span>Copyright 2023 RT Alexander</span> |
    <span>Contact: rtalexa1@gmail.com</span>
    <p v-if="$route.path === '/met' || $route.path === '/math_visualizer'">
      Vue.js icon by Icon Mafia on
      <a href="https://iconscout.com/">IconScout</a>
    </p>
    <p v-if="$route.path === '/divy_up' || $route.path === '/met'">
      Ruby on Rails icon by Jagathish Saravanan on
      <a href="https://iconscout.com/">IconScout</a>
    </p>
    <p v-if="$route.path === '/met'">
      Firebase icon by Icon 54 on
      <a href="https://iconscout.com/">IconScout</a>
    </p>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
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
  width: 100%;
  min-height: 100%;
  font-size: x-large;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

@media (max-width: 992px) {
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

@media (max-width: 992px) {
  body {
    font-size: medium;
  }

  footer {
    font-size: small;
  }
}
</style>
