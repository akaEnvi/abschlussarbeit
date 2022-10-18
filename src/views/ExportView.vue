<template>
  <h1>Export</h1>
  <h2>CheckIn</h2>
  <pre></pre>
  <h2>Live Session</h2>
  <pre></pre>
  <h2>CheckOut</h2>
  <pre></pre>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["liveSessionPresence", "checking", "checkout"]),
  },
};
</script>
