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

  data() {
    return {
      attendees: [],
    };
  },

  created() {
    fetch("https://dummy-apis.netlify.app/api/students")
      .then(async (response) => {
        const attendeeData = await response.json();

        if (!response.ok) {
          const error =
            (attendeeData && attendeeData.message) || response.statusText;
          return Promise.reject(error);
        }
        this.attendees = attendeeData;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });

  },
}
</script>
