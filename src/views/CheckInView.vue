<template>
  <p>
    Name des Student:
    {{ studentName }}
  </p>

  <br />np
  <TheTextarea placeholder="What was frustrating yesterday"></TheTextarea>
  <br />
  <TheTextarea placeholder="What are my daily goals"></TheTextarea>
  <br />

  <backBtn></backBtn>
  <continueBtn @click="setRandomStudent"></continueBtn>
  <button @click="$router.push('HubView')">to Hub</button>
  <saveBtn></saveBtn>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";

export default {
  components: {
    TheTextarea,
    backBtn,
    continueBtn,
  },
  computed: {
    studentName() {
      return this.$store.state.studentName;
    },
    currentCLassName() {
      return this.$store.state.currentClass;
    },
  },
  methods: {
    generateRandomNumber(n) {
      return Math.floor(Math.random() * n);
    },
    setRandomStudent() {
      const currentAttendees = this.$store.getters.getCurrentClassAttendees;
      const randomNumber = this.generateRandomNumber(
        currentAttendees.length - 1
      );
      this.$store.commit(
        "setStudentName",
        currentAttendees[randomNumber].githubName
      );
    },
  },
};
</script>
