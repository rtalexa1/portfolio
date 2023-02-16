<template>
  <div class="projects-container">
    <h1 class="projects-title">Projects</h1>
    <h2 class="project-title" style="padding-left: 1em">Math Exit Ticket</h2>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <img
          src="../assets/ExitTicketScreenshot1.jpg"
          alt="Exit Ticket screenshot"
          class="exit-ticket-screenshot"
        />
        <div class="synopsis-and-link">
          <p class="project-synopsis">
            This app allows teachers to quickly and easily create short
            assessments, known as "exit tickets", and to save them as a PDF or
            link to them in Google Classroom. Of course, anyone can make their
            own assessment in a text editor, but this app provides actual
            questions from the STAAR test (Texas's standardized test), rather
            than requiring teachers to write their their own. I would have
            gotten a lot of use out of this app had it existed while I was
            teaching.
          </p>
          <div class="link-container">
            <RouterLink to="met">Learn more about this project</RouterLink>
            <p style="color: orangered">
              Insert link icons to demo and github here
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="project-title" style="text-align: center">Math Visualizer</h2>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <div class="synopsis-and-link">
          <p class="project-synopsis">
            Visual aids can be incredibly helpful when learning something new,
            especially something involving as many steps as long division. This
            generates random long division problems, then walks the user through
            the steps of solving the problem, with hints provided along the way.
          </p>
          <div class="link-container">
            <RouterLink to="math_visualizer"
              >Learn more about this project</RouterLink
            >
            <p style="color: orangered">
              Insert link icons to demo and github here
            </p>
          </div>
        </div>
        <img
          src="../assets/MathVisualizerScreenshot1.jpg"
          alt="Math Visualizer screenshot"
          class="math-viz-screenshot"
        />
      </div>
    </div>
    <h2 class="project-title" style="padding-left: 1em">
      divyUp (in development)
    </h2>
    <div class="snapshot-container">
      <div class="project-snapshot">
        <img
          src="../assets/divyUpScreenshot1.jpg"
          alt="divyUp screenshot"
          class="divy-up-screenshot"
        />
        <div class="synopsis-and-link">
          <p class="project-synopsis">
            With this app, friends can track expenses related to a group outing
            or vacation and then calculate a fair split based on how much
            everyone has contributed. This app makes things easier for the
            mathematically challenged among us (points at self). While mostly
            fleshed out, this app is still in development.
          </p>
          <div class="link-container">
            <RouterLink to="divy_up">Learn more about this project</RouterLink>
            <p style="color: orangered">
              Insert link icons to demo and github here
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsDisplay",
};
</script>

<style>
.projects-container {
  width: 90%;
}

.projects-title {
  padding: 5px;
  color: #3b6895;
}

.project-title {
  padding: 5px;
  background-color: #3b6895;
  color: white;
}

/* .container-container {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.snapshot-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5em;
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
  border-radius: 10px;
  width: 30em;
  height: 13em;
  background-color: #cecece;
  padding: 0.5em;
  font-size: large;
}

.link-container {
  margin: 0.5em;
  border-radius: 10px;
  background-color: #cecece;
  padding: 0.5em;
  text-align: center;
  font-size: large;
}
</style>
