<template>
  <nav>
    <router-link to="/">Index</router-link> |
    <router-link to="/HubView">Hub</router-link> |
    <router-link to="/CheckInView">CheckIn</router-link> |
    <router-link to="/CheckOutView">CheckOut</router-link> |
    <router-link to="/LiveSessionView">Live Session</router-link> |
    <router-link to="/LearningListView">Learning</router-link> |
    <router-link to="/QuestionListView">Questions</router-link> |
  </nav>
  <router-view />
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>
