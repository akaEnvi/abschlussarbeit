<template>
  <h1>Export</h1>
  <h2>Session Moderator</h2>
  <pre>{{ moderatorName }}</pre>
  <h2>CheckIn</h2>
  <pre>{{ checkIn }}</pre>
  <h2>Live Session</h2>
  <pre> {{ liveSessionPresence }}</pre>
  <h2>CheckOut</h2>
  <pre> {{ checkout }}</pre>
  <h2>Questions</h2>
  <pre> {{ questions }}</pre>
  <h2>Knowledge</h2>
  <pre> {{ knowledge }}</pre>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "moderatorName",
      "liveSessionPresence",
      "checkIn",
      "checkout",
      "questions",
      "knowledge",
    ]),
  },
};
</script>
