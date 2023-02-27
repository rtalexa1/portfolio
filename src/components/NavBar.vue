<template>
  <nav id="nav" :class="{ 'nav-dark-theme': $store.state.darkThemeActive }">
    <h1
      class="name"
      :class="{ 'name-dark-theme': $store.state.darkThemeActive }"
    >
      RT Alexander
    </h1>
    <div class="spacer"></div>
    <div class="toggle-buttons">
      <span v-if="!$store.state.darkThemeActive"
        >Dark theme
        <font-awesome-icon
          id="on-button"
          icon="fa-solid fa-toggle-off"
          size="xl"
          style="color: #1b1212; cursor: pointer"
          @click="$store.commit('toggleTheme')"
      /></span>
      <span
        v-else-if="$store.state.darkThemeActive"
        style="filter: drop-shadow(0 0 5px #faf9f6)"
        >Light theme
        <font-awesome-icon
          id="off-button"
          class="off-button"
          icon="fa-solid fa-toggle-on"
          size="xl"
          style="color: #faf9f6; cursor: pointer"
          @click="$store.commit('toggleTheme')"
      /></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
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

.nav-dark-theme {
  background-color: #1b1212;
  color: #faf9f6;
  transition: background-color 500ms, color 500ms;
}

.name {
  width: 50%;
}

.name-dark-theme {
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 5px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #faf9f6,
      0 0 80px #faf9f6, 0 0 90px #faf9f6, 0 0 100px #faf9f6, 0 0 150px #faf9f6;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-family: "Roboto", sans-serif;
}

.off-button {
  filter: drop-shadow(0 0 2px #faf9f6);
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

.spacer {
  margin-left: 3em;
  width: 30%;
}

@media (max-width: 768px) {
  .name {
    width: 70%;
  }

  .spacer {
    width: 0%;
  }

  .toggle-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
    width: 30%;
    font-size: x-small;
  }
}
</style>
