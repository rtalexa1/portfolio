<template>
  <h1 style="background-color: #faf9f6">Math Exit Ticket</h1>
  <div class="project">
    <img
      src="../assets/images/met_screenshots/ExitTicketScreenshot1.jpg"
      alt="screenshot of math questions"
      class="met-screenshot"
    />
    <div class="project-text">
      <p>
        This was my first experience with creating separate front and back ends
        for an app, and I learned a lot in the process. For the back end, I went
        with Rails. Although I had used Rails several times before to build
        full-stack apps, this was my first time using it exclusively as an API.
      </p>
      <br />
      <p>
        As for the front end, I decided to go with Vue because of its simple and
        intuitive nature. I like, for example, the way components are laid out
        in the options API, with the HTML, JavaScript, and CSS all in one place.
        This was my first time using a state management library (Vuex), and it
        was actually much less complex than I expected (in a good way).
      </p>
      <br />
      <p>
        This project also marked my first attempt at using Amazon Web Services
        (AWS). I had heard that there was a learning curve with AWS, and that
        was certainly true in my case, especially since the Amazon documentation
        is pretty dense. It took a few days, but I was eventually able to
        achieve the functionality that I set out for.
      </p>
      <br />
      <figure>
        <figcaption>Technologies Used</figcaption>
        <!-- Add icons (?) -->
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
          <li>
            <span
              ><img
                src="../assets/images/icons/rubyonrails.png"
                alt="Ruby on Rails icon"
                class="tech-icon"
            /></span>
            Ruby on Rails
          </li>
          <li>
            <span
              ><img
                src="../assets/images/icons/firebase.png"
                alt="Firebase icon"
                class="tech-icon"
            /></span>
            Firebase Authentication
          </li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "METProjectView",
};
</script>

<style>
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #faf9f6;
}

.met-screenshot {
  width: 350px;
  height: 532px;
}

.project-text {
  width: 60%;
  padding: 0.5em;
  background-color: #eff8f8;
  color: black;
}

li {
  margin-left: 1.5em;
}

.tech-icon {
  width: 20px;
  height: 20px;
}
</style>
