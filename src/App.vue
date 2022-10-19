<template>
  <div class="header">
    <nav>
      <ul>
        <li>
          <div class="burger-menu">
            <div class="headerline">Coding Bootcamp Europe</div>
          </div>
        </li>
        <li>
          <div class="router-links">
            <div><router-link to="/">Index</router-link></div>
            <div>
              <router-link to="/LearningListView">Learning</router-link>
            </div>
            <div>
              <router-link to="/QuestionListView">Questions</router-link>
            </div>

            <div><router-link to="/ExportView">Export</router-link></div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
  <div class="header2"></div>
  <div class="header3"></div>
  <div class="main-content">
    <router-view />
  </div>
  <div class="main-content"><h1>Abschlussproject BC Klasse Juli 2022</h1></div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Source+Sans+Pro:wght@600&display=swap");
</style>
