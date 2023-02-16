<template>
  <nav>
    <h1>RT Alexander</h1>
    <!-- <a href="#about-me">About Me</a> -->
    <!-- link to about me section -->
    <!-- link to projects -->
    <!-- link to contact form -->
  </nav>
  <router-link to="/">Home</router-link>
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
  background-color: white;
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
  border: 2px solid navy;
  width: 100%;
  height: 5em;
  padding: 1em;
  font-family: "Bungee Shade", cursive;
}
</style>
