<template>
  <nav>
    <h1>RT Alexander</h1>
    <div class="nav-links">
      <router-link to="/" v-if="$route.path !== '/'">Home</router-link>
      <span v-if="$route.path !== '/'"> | </span>
      <a href="about-me">About Me</a> | <a href="#projects">Projects</a> |
      <a href="contact-form">Contact</a>
    </div>
    <div class="toggle-buttons">
      <font-awesome-icon
        icon="fa-solid fa-toggle-off"
        size="xl"
        style="color: #1b1212"
      />
      <font-awesome-icon
        icon="fa-solid fa-toggle-on"
        size="xl"
        style="color: #faf9f6"
      />
    </div>
  </nav>
  <router-view />
</template>

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

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5em;
  padding: 1em;
  font-family: "Bungee Shade", cursive;
  background-color: #faf9f6;
  color: #1b1212;
}

.nav-links {
  margin-left: 3em;
  font-family: "Roboto", sans-serif;
}
</style>
