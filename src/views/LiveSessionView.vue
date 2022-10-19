<template>
  <h1>Attendance check</h1>
  <h2>
    {{ getCurrentClass }}
  </h2>
  <ul>
    <li
      v-for="(currentAttendee, index) of getCurrentClassAttendees"
      :key="currentAttendee.uid"
    >
      <input type="checkbox" @change="storePresence(index)" />
      {{ currentAttendee.githubName }}
      <!-- '<span class="fulltime">{{ currentAttendee.fulltime }}</span>' -->
    </li>
  </ul>
  <br />
  <button @click="$router.push('LearningListView')">
    <textBtn>Feedback</textBtn>
  </button>
  <div>
    <button @click="$router.push('HubView')">to Hub</button>
  </div>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    textBtn,
  },
  computed: {
    ...mapGetters(["getCurrentClassAttendees"]),
    studentName() {
      return this.$store.state.studentName;
    },
    currentCLassName() {
      return this.$store.state.currentClass;
    },
  },
  methods: {
    storePresence(index) {
      this.$store.commit("updateSingleLiveSessionPresence", index);
    },
  },
  mounted() {
    const currentAttendees = this.getCurrentClassAttendees.map((attendee) => {
      return {
        name: attendee.githubName,
        fulltime: attendee.fulltime,
        present: false,
      };
    });

    this.$store.commit("setLiveSessionPresence", currentAttendees);
  },
};
</script>
