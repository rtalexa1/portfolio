<template>
  <div class="projects-container">
    <h1
      class="projects-title"
      :class="{ 'projects-title-dark-theme': $store.state.darkThemeActive }"
      id="projects-title"
    >
      Projects
    </h1>
    <div
      class="project-title"
      :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
    >
      <h2 :class="{ 'title-dark-theme': $store.state.darkThemeActive }">
        Math Exit Ticket (MET)
      </h2>
      <a
        href="https://math-exit-ticket.vercel.app/#/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
        ><font-awesome-icon
          icon="fa-solid fa-link"
          size="xl"
          style="margin: 0 5px 0 20px; width: 36px; height: 36px"
      /></a>
      <a
        href="https://github.com/rtalexa1/exit-ticket-frontend"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
        ><font-awesome-icon
          icon="fa-brands fa-github"
          size="xl"
          style="margin: 0 0 0 5px"
      /></a>
      <a
        href="https://github.com/rtalexa1/exit-ticket-api"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
        ><font-awesome-icon
          icon="fa-brands fa-github"
          size="xl"
          style="margin: 0 0 0 5px"
      /></a>
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <img
          src="../assets/images/met_screenshots/ExitTicketScreenshot3.jpg"
          alt="Exit Ticket screenshot"
          class="exit-ticket-screenshot"
          :class="{
            'exit-ticket-screenshot-dark-theme': $store.state.darkThemeActive,
          }"
          id="exit-ticket-screenshot"
        />
        <div class="synopsis-and-link">
          <div
            class="project-synopsis"
            :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
          >
            <p>
              Much like software developers test their programs to make sure
              they are working as expected, it is crucial for teachers to be
              able to assess their students' learning to make sure that they are
              mastering academic standards. I created this app to make it
              quicker and easier for teachers to make simple assessments (known
              as "exit tickets") that they can use with their students. Once
              created, these exit tickets can be saved as a PDF or linked to a
              teacher's Google Classroom. I wish something like this existed
              when I was working in the classroom!
            </p>
            <br />
            <RouterLink to="met" class="project-link"
              >Learn more about this project
              <font-awesome-icon icon="fa-solid fa-angles-right"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="project-title"
      :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
    >
      <h2 :class="{ 'title-dark-theme': $store.state.darkThemeActive }">
        Math Visualizer
      </h2>
      <a
        href="https://math-visualizer.vercel.app/#/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
        ><font-awesome-icon
          icon="fa-solid fa-link"
          size="xl"
          style="margin: 0 5px 0 20px"
      /></a>
      <a
        href="https://github.com/rtalexa1/math-visualizer"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
        ><font-awesome-icon
          icon="fa-brands fa-github"
          size="xl"
          style="margin: 0 0 0 5px"
      /></a>
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <div class="synopsis-and-link">
          <div
            class="project-synopsis math-viz-synopsis"
            :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
          >
            <p>
              Visual aids can be incredibly helpful when learning something new,
              especially something involving as many steps as long division.
              This app randomly generates long division problems, then walks the
              user through each of solving the problem, with hints provided
              along the way.
            </p>
            <br />
            <RouterLink to="math_visualizer" class="project-link"
              >Learn more about this project
              <font-awesome-icon icon="fa-solid fa-angles-right"
            /></RouterLink>
          </div>
        </div>
        <img
          src="../assets/images/math_visualizer_screenshots/MathVisualizerScreenshot3.jpg"
          alt="Math Visualizer screenshot"
          class="math-viz-screenshot"
          :class="{
            'math-viz-screenshot-dark-theme': $store.state.darkThemeActive,
          }"
          id="math-viz-screenshot"
        />
      </div>
    </div>
    <div
      class="project-title"
      :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
    >
      <h2 :class="{ 'title-dark-theme': $store.state.darkThemeActive }">
        divyUp (in development)
      </h2>
      <a
        href="https://github.com/rtalexa1/divyUp"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
        :class="{ 'icon-link-dark-theme': $store.state.darkThemeActive }"
      >
        <font-awesome-icon
          icon="fa-brands fa-github"
          size="xl"
          style="margin: 0 5px 0 20px"
        />
      </a>
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot divy-up-snapshot">
        <img
          src="../assets/images/divy_up_screenshots/divyUpScreenshot6.jpg"
          alt="divyUp screenshot"
          class="divy-up-screenshot"
          :class="{
            'divy-up-screenshot-dark-theme': $store.state.darkThemeActive,
          }"
          id="divy-up-screenshot"
        />
        <div class="synopsis-and-link">
          <div
            class="project-synopsis"
            :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
          >
            <p>
              With this app, friends can track expenses related to a group
              outing or vacation and then calculate a fair split based on how
              much everyone has contributed. This app makes things easier for
              the mathematically challenged among us (points at self). While
              mostly fleshed out, this app is still in development.
            </p>
            <br />
            <RouterLink to="divy_up" class="project-link"
              >Learn more about this project
              <font-awesome-icon icon="fa-solid fa-angles-right"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsDisplay",

  data() {
    return {
      currentProject: "mathExitTicket",
    };
  },
  methods: {
    cycleProjects() {
      switch (this.currentProject) {
        case "mathExitTicket":
          this.currentProject = "mathVisualizer";
          break;
        case "mathVisualizer":
          this.currentProject = "divyUp";
          break;
        case "divyUp":
          this.currentProject = "mathExitTicket";
          break;
      }
    },
  },
};
</script>

<style>
.projects-container {
  width: 90%;
}

.projects-title {
  padding: 5px;
}

.projects-title-dark-theme {
  color: #faf9f6;
  filter: drop-shadow(0 0 2px #faf9f6);
}

.project-title {
  display: flex;
  align-items: center;
  border: solid 2px #4f9292;
  border-radius: 10px;
  padding: 5px;
  padding-left: 15px;
  background-color: #63b7b7;
  color: #faf9f6;
  transition: background-color 500ms, color 500ms;
}

.title-dark-theme {
  filter: drop-shadow(0 0 2px #faf9f6);
}

.icon-link {
  color: #faf9f6;
}

.icon-link-dark-theme {
  filter: drop-shadow(0 0 2px #faf9f6);
}

.snapshot-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* border: solid 2px #4f9292; */
  width: 40em;
}

.project-snapshot {
  display: flex;
  justify-content: center;
}

.divy-up-snapshot {
  flex-direction: column;
  align-items: center;
}

.exit-ticket-screenshot {
  margin: 1em 2em;
  width: 376px;
  height: 400px;
}

.exit-ticket-screenshot-dark-theme {
  filter: brightness(70%);
  filter: grayscale(20%);
  filter: drop-shadow(0 0 1em #4dc04d);
  transition: filter 500ms, width 300ms, height 300ms;
}

.exit-ticket-screenshot-dark-theme:hover {
  filter: brightness(90%);
  filter: grayscale(10%);
  filter: drop-shadow(0 0 2em #4dc04d);
  width: 396px;
  height: 421px;
  transition: filter 300ms, width 300ms, height 300ms;
}

.math-viz-screenshot {
  width: 350px;
  height: 450px;
  padding: 1em;
}

.math-viz-screenshot-dark-theme {
  filter: brightness(70%);
  filter: grayscale(20%);
  filter: drop-shadow(0 0 1em #c185fd);
  transition: filter 500ms, width 300ms, height 300ms;
}

.math-viz-screenshot-dark-theme:hover {
  filter: brightness(90%);
  filter: grayscale(10%);
  filter: drop-shadow(0 0 2em #c185fd);
  width: 370px;
  height: 476px;
  transition: filter 300ms, width 300ms, height 300ms;
}

.divy-up-screenshot {
  width: 678px;
  height: 325px;
  padding: 1em;
}

.divy-up-screenshot-dark-theme {
  filter: brightness(70%);
  filter: grayscale(20%);
  filter: drop-shadow(0 0 1em #f8b400);
  transition: filter 500ms, width 300ms, height 300ms;
}

.divy-up-screenshot-dark-theme:hover {
  filter: brightness(90%);
  filter: grayscale(10%);
  filter: drop-shadow(0 0 2em #f8b400);
  width: 720px;
  height: 345px;
  transition: filter 300ms, width 300ms, height 300ms;
}

.synopsis-and-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-synopsis {
  margin: 1em 0.5em 0.5em 0.5em;
  box-shadow: 25px 25px 0 -7px #cecece;
  border: solid 2px #63b7b7;
  border-radius: 10px;
  width: 30em;
  background-color: #eff8f8;
  padding: 0.5em;
  font-size: large;
  transition: background-color 500ms, color 500ms;
}

.math-viz-synopsis {
  box-shadow: -25px 25px 0 -7px #cecece;
}

.project-link {
  text-decoration: none;
  font-weight: 500;
  color: inherit;
}

@media (max-width: 768px) {
  .projects-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .projects-title {
    font-size: xx-large;
  }

  .project-title {
    border-right: none;
    border-left: none;
    border-radius: 0 0 0 0;
    width: 100%;
    padding-left: 5px;
  }

  .snapshot-container {
    width: 100%;
  }

  .project-snapshot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .project-synopsis {
    margin: 1em 0 2em 0;
    box-shadow: 0 0 0 0;
    border: solid 2px #63b7b7;
    border-right: none;
    border-left: none;
    border-radius: 0 0 0 0;
    width: 100%;
    padding: 20px;
  }

  .exit-ticket-screenshot {
    margin: 2em 2em 1em 2em;
    width: 275px;
    height: 293px;
  }

  .exit-ticket-screenshot-dark-theme:hover {
    width: 295px;
    height: 314px;
  }

  .math-viz-screenshot {
    margin-bottom: 2em;
    width: 275px;
    height: 354px;
  }

  .math-viz-screenshot-dark-theme:hover {
    width: 295px;
    height: 379px;
  }

  .divy-up-screenshot {
    width: 350px;
    height: 168px;
    padding: 1em;
  }

  .divy-up-screenshot-dark-theme:hover {
    width: 370px;
    height: 177px;
  }
}
</style>
