<template>
  <h1>Attendee List</h1>
  <ul>
    <li v-for="attendee of attendees" :key="attendee.uid">
      {{ attendee.githubName }} | {{ attendee.className }} |
      {{ attendee.fulltime }} | {{ attendee.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "AttendeesList",
  computed: {
    attendees() {
      return this.$store.getters.getUserByClass["2022-09"]?.attendees;
    },
  },
};
</script>
