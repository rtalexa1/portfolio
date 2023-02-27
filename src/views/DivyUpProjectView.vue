<template>
  <h1
    class="project-view-title"
    :class="{ 'project-view-title-dark-theme': $store.state.darkThemeActive }"
  >
    divyUp
  </h1>
  <div class="back-link">
    <RouterLink to="/" class="back-link">Back</RouterLink>
  </div>
  <div
    class="project column-display"
    :class="{ 'text-dark-theme': $store.state.darkThemeActive }"
  >
    <img
      src="../assets/images/divy_up_screenshots/divyUpScreenshot2.jpg"
      alt="screenshot of web form"
      class="divy-screenshot"
      :class="{
        'divy-screenshot-dark-theme': $store.state.darkThemeActive,
      }"
    />
    <div class="project-text">
      <p>
        This was the first full stack application that I made on my own. I was
        inspired by group trips with friends. Math has never been my forte, and
        I wanted to make something that would make settling up easier. Users can
        enter receipts, which are added to a group's total. When the group is
        ready to divy up, the app can calculate how much money each group member
        owes or is owed.
      </p>
      <br />
      <p>
        I chose Rails for this project because it was the only framework I had
        learned at the time. That said, I really enjoy the intuitiveness of
        Ruby, and all of Rails conventions make it a great tool with which to
        experiment.
      </p>
      <br />
      <p>
        From a technical standpoint, my top goal with this project was to get my
        feet wet with the basics of HTML and CSS. I learned a lot from this
        project just by trial-and-error, and although I went in a little
        trepidatious, I discovered that I enjoy frontend work a lot more than I
        thought I would.
      </p>
      <br />
      <figure>
        <figcaption>Technologies Used</figcaption>
        <ul>
          <li>
            <span
              ><img
                src="../assets/images/icons/rubyonrails.png"
                alt="Ruby on Rails icon"
                class="tech-icon"
            /></span>
            Ruby on Rails
          </li>
        </ul>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivyUpProjectView",
  created() {
    scroll(0, 0);
  },
};
</script>

<style>
.column-display {
  flex-direction: column;
  align-items: center;
}

.divy-screenshot {
  margin-bottom: 10px;
  width: 620px;
  height: 325px;
}

.divy-screenshot-dark-theme {
  filter: brightness(70%);
  filter: grayscale(20%);
  filter: drop-shadow(0 0 1em #f8b400);
}

@media (max-width: 768px) {
  .divy-screenshot {
    margin: 10px;
    width: 85%;
    height: 45%;
  }
}
</style>
