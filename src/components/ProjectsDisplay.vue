<template>
  <div class="projects-container">
    <h1 class="projects-title" id="projects-title">Projects</h1>
    <div class="project-title">
      <h2>Math Exit Ticket (MET)</h2>
      <font-awesome-icon
        icon="fa-solid fa-link"
        size="xl"
        style="margin: 0 5px 0 20px; width: 36px; height: 36px"
      />
      <font-awesome-icon
        icon="fa-brands fa-github"
        size="xl"
        style="margin: 0 0 0 5px"
      />
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <img
          src="../assets/ExitTicketScreenshot1.jpg"
          alt="Exit Ticket screenshot"
          class="exit-ticket-screenshot"
        />
        <div class="synopsis-and-link">
          <div class="project-synopsis">
            <p>
              This app allows teachers to quickly and easily create short
              assessments, known as "exit tickets", and to save them as a PDF or
              link to them in Google Classroom. Of course, anyone can make their
              own assessment in a text editor, but this app provides actual
              questions from the STAAR test (Texas's standardized test), rather
              than requiring teachers to write their their own. I would have
              gotten a lot of use out of this app had it existed while I was
              teaching.
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
    <div class="project-title">
      <h2>Math Visualizer</h2>
      <font-awesome-icon
        icon="fa-solid fa-link"
        size="xl"
        style="margin: 0 5px 0 20px"
      />
      <font-awesome-icon
        icon="fa-brands fa-github"
        size="xl"
        style="margin: 0 0 0 5px"
      />
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <div class="synopsis-and-link">
          <div class="project-synopsis">
            <p>
              Visual aids can be incredibly helpful when learning something new,
              especially something involving as many steps as long division.
              This generates random long division problems, then walks the user
              through the steps of solving the problem, with hints provided
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
          src="../assets/MathVisualizerScreenshot1.jpg"
          alt="Math Visualizer screenshot"
          class="math-viz-screenshot"
        />
      </div>
    </div>
    <div class="project-title">
      <h2>divyUp (in development)</h2>
      <font-awesome-icon
        icon="fa-solid fa-link"
        size="xl"
        style="margin: 0 5px 0 20px"
      />
      <font-awesome-icon
        icon="fa-brands fa-github"
        size="xl"
        style="margin: 0 0 0 5px"
      />
    </div>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <img
          src="../assets/divyUpScreenshot1.jpg"
          alt="divyUp screenshot"
          class="divy-up-screenshot"
        />
        <div class="synopsis-and-link">
          <div class="project-synopsis">
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
  color: #63b7b7;
}

.project-title {
  display: flex;
  align-items: center;
  border: solid 2px #4f9292;
  border-radius: 10px;
  padding: 5px;
  padding-left: 15px;
  background-color: #63b7b7;
  color: white;
}

.snapshot-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5em;
  /* border: solid 2px #4f9292; */
  width: 40em;
}

.project-snapshot {
  display: flex;
  justify-content: center;
}

.exit-ticket-screenshot {
  width: 15em;
  height: 19.98em;
  padding: 1em;
}

.math-viz-screenshot {
  width: 27.37em;
  height: 15em;
  padding: 1em;
}

.divy-up-screenshot {
  width: 23.04em;
  height: 10em;
  padding: 1em;
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
}

.project-link {
  text-decoration: none;
  font-weight: 500;
  color: inherit;
}

.text-dark-theme {
  box-shadow: 0 0 0 0;
  border: solid 2px #376767;
  background-color: #4f9292;
  color: white;
}

.link-container {
  margin: 0.5em;
  border-radius: 10px;
  background-color: #eff8f8;
  padding: 0.5em;
  text-align: center;
  font-size: large;
}
</style>
