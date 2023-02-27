<template>
  <h1
    class="project-view-title"
    :class="{ 'project-view-title-dark-theme': $store.state.darkThemeActive }"
  >
    Math Visualizer
  </h1>
  <div class="back-link">
    <RouterLink to="/" class="back-link">Back</RouterLink>
  </div>
  <div
    class="project column-display"
    :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
  >
    <div class="project-text math-viz-text">
      <p>
        As a teacher, I saw many of my fifth graders struggle with long
        division. Although each step of the process is relatively simple, I
        think the sheer magnitude of the problems overwhelmed students. I
        created this app to help students see that division is not so bad when
        broken up into smaller steps.
      </p>
      <!-- <br /> -->
      <img
        src="../assets/images/math_visualizer_screenshots/MathVisualizerScreenshot1.jpg"
        alt="long division problem"
        class="mv-screenshot"
        :class="{
          'mv-screenshot-dark-theme': $store.state.darkThemeActive,
        }"
      />
      <p>
        I once again chose Vue for this project because I enjoy using the
        framework, and I wanted to get some more practice with it. This project
        highlighted what has been a consistent theme throughout my time
        programming: nothing is as simple as it seems. What was a very simple
        concept in my head turned out to be rather complex and required me to
        use JavaScript in ways that I had not used it up to that point,
        specifically in manipulating the DOM. My eagerness to dive right into
        new projects can come back to haunt me when I encounter an obstacle that
        I probably could have foreseen with a little more planning. That is
        something that I plan to be more mindful of in the future.
      </p>
      <br />
      <figure>
        <figcaption>Technologies Used</figcaption>
        <ul>
          <li>
            <span
              ><img
                src="../assets/images/icons/vuejs.png"
                alt="Vue.js icon"
                class="tech-icon"
            /></span>
            Vue.js
          </li>
          <li>
            <span
              ><img
                src="../assets/images/icons/vuejs.png"
                alt="Vue.js icon"
                class="tech-icon"
            /></span>
            Vuex
          </li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "MathVisualizerProjectView",
  created() {
    scroll(0, 0);
  },
};
</script>

<style>
.mv-screenshot {
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid;
  height: 275px;
  width: 502px;
}

.mv-screenshot-dark-theme {
  filter: brightness(70%);
  filter: grayscale(20%);
  filter: drop-shadow(0 0 1em #c185fd);
}

.math-viz-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}

@media (max-width: 992px) {
  .mv-screenshot {
    width: 85%;
    height: 47%;
  }

  .math-viz-text {
    width: 85%;
    padding: 10px;
  }
}
</style>
