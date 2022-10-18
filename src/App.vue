<<<<<<< HEAD
<template>
  <nav>
    <router-link to="/">Index</router-link> |
    <router-link to="/HubView">Hub</router-link> |
    <router-link to="/CheckInView">CheckIn</router-link> |
    <router-link to="/CheckOutView">CheckOut</router-link> |
    <router-link to="/LiveSessionView">Live Session</router-link> |
    <router-link to="/LearningListView">Learning</router-link> |
    <router-link to="/QuestionListView">Questions</router-link> |
    <router-link to="/TestView">Test</router-link> |
    <router-link to="/ExportView">Export</router-link> |
  </nav>
  <router-view />
=======
  <div class="header">
    <nav>
      <ul>
        <li>
          <div class="burger-menu">
            <img src="@/assets/list.svg" class="burger-menu-icon" />
            <div class="headerline">Cooding Bootcamp Europe</div>
          </div>
        </li>
        <li>
          <div class="router-links">
            <div><router-link to="/">Index</router-link></div>
            <div><router-link to="/HubView">Hub</router-link></div>
            <div><router-link to="/CheckInView">CheckIn</router-link></div>
            <div>
              <router-link to="/CheckOutView">CheckOut</router-link>
            </div>

            <div>
              <router-link to="/LiveSessionView">Live Session</router-link>
            </div>

            <div>
              <router-link to="/LearningListView">Learning</router-link>
            </div>
            <div>
              <router-link to="/QuestionListView">Questions</router-link>
            </div>
            <div><router-link to="/TestView">Test</router-link></div>
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
  <div class="main-content"><h1>Abschlussproject BC Klasse Juni 2022</h1></div>

>>>>>>> f3dabc5ab270966a69a2d5319ab3f58054389e77
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>
