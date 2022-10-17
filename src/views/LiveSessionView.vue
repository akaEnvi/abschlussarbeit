<template>
  <h1>Attendance check</h1>
  <br />
  <p>
    {{ getCurrentClass }}
  </p>
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

export default {
  components: {
    textBtn,
    backBtn,
  },
  computed: {
    studentName() {
      return this.$store.state.studentName;
    },
    currentCLassName() {
      return this.$store.state.currentClass;
    },
  },
};
</script>
