<template>
  <h1>Attendance check</h1>
  <br />
  <p>
    {{ getCurrentClass }}
  </p>
  <ul>
    <li
      v-for="(currentAttendee, index) of getCurrentClassAttendees"
      :key="currentAttendee.uid"
    >
      <input type="checkbox" @change="storePresence(index)" />
      {{ currentAttendee.githubName }}
    </li>
  </ul>
  <br />
  <button @click="$router.push('LearningListView')">
    <textBtn>Feedback</textBtn>
  </button>
  <br />
  <backBtn @click="$router.push('HubView')"></backBtn>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    textBtn,
    backBtn,
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
