<template>
  <h1>Export</h1>
  <h2>CheckIn</h2>
  <pre>{{ checking }}</pre>
  <h2>Live Session</h2>
  <pre> {{ liveSessionPresence }}</pre>
  <h2>CheckOut</h2>
  <pre> {{ checkout }}</pre>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["liveSessionPresence", "checking", "checkout"]),
  },
};
</script>
