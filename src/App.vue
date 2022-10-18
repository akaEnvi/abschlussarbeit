<template>
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
          </div>
          <div>
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
  <div class="main-content"><h1>Abschlussproject BC Klasse Juni 2022</h1></div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>
