<template>
  <nav>
    <h1 class="name">RT Alexander</h1>
    <div class="nav-links">
      <!-- <router-link to="/" v-if="$route.path !== '/'">Home</router-link>
      <span v-if="$route.path !== '/'"> | </span>
      <a href="about-me">About Me</a> | <a href="#projects">Projects</a> |
      <a href="contact-form">Contact</a> -->
    </div>
    <div class="toggle-buttons">
      <span v-if="theme === 'light'"
        >Dark theme
        <font-awesome-icon
          id="on-button"
          icon="fa-solid fa-toggle-off"
          size="xl"
          style="color: #1b1212; cursor: pointer"
          @click="toggleTheme"
      /></span>
      <span v-else-if="theme === 'dark'"
        >Light theme
        <font-awesome-icon
          id="off-button"
          icon="fa-solid fa-toggle-on"
          size="xl"
          style="color: #faf9f6; cursor: pointer"
          @click="toggleTheme"
      /></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      theme: "light",
    };
  },
  emits: ["activateDarkTheme", "deactivateDarkTheme"],
  methods: {
    toggleTheme() {
      this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
    },
  },
  updated() {
    const navBar = document.getElementsByTagName("nav")[0];
    // const onButton = document.getElementById("on-button");
    // const offButton = document.getElementById("off-button");
    if (this.theme === "dark") {
      navBar.classList.add("dark-theme");
      this.$emit("activateDarkTheme");
      // onButton.classList.add("fade-out");
      // offButton.classList.add("fade-in");
    } else {
      navBar.classList.remove("dark-theme");
      this.$emit("deactivateDarkTheme");
      // onButton.classList.add("fade-in");
      // offButton.classList.add("fade-out");
    }
  },
};
</script>

<style>
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
  transition: background-color 500ms, color 500ms;
}

.name {
  width: 40%;
}

.nav-links {
  margin-left: 3em;
  width: 40%;
  font-family: "Roboto", sans-serif;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-family: "Roboto", sans-serif;
}

.dark-theme {
  background-color: #1b1212;
  color: #faf9f6;
  transition: background-color 500ms, color 500ms;
}

.fade-out {
  animation-name: fadeout;
  animation-duration: 100ms;
}

@keyframes fadeout {
  from {
    opacity: 100%;
  }

  to {
    opacity: 0%;
  }
}

.fade-in {
  animation-name: fadein;
  animation-duration: 100ms;
}

@keyframes fadein {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}
</style>
