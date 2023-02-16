<template>
  <div class="project">
    <h1>Math Exit Ticket</h1>
    <p class="project-text">
      This project was my first experience creating separate apps for the front
      and back ends. Although I had built several other projects in Rails, this
      was a different challenge, as now I was using Rails exclusively as an API
      for the front end.
    </p>
    <p class="project-text">
      As for the front end, I decided to go with Vue because I like the way
      components are laid out. This was my first time using a state management
      library (Vuex), and it was actually much more intuitive than I expected.
    </p>
    <p class="project-text">
      This project also marked my first attempt at using Amazon Web Services
      (AWS). I had heard that there was a learning curve with AWS, and that was
      certainly true in my case, especially since the Amazon documentation is
      pretty dense. It took a few days, but I was eventually able to achieve the
      functionality that I set out for.
    </p>
    <figure>
      <figcaption>Technologies Used</figcaption>
      <!-- Add icons (?) -->
      <ul>
        <li>Vue.js</li>
        <li>Vuex</li>
        <li>Ruby on Rails</li>
        <li>Firebase Authentication</li>
      </ul>
    </figure>
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
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
}

.project-text {
  width: 90%;
  padding: 0.5em;
  background-color: #f9f9f9;
  color: black;
}
</style>
