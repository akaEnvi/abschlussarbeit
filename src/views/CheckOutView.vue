<template>
  <br />
  <p>
    Name des Student:
    {{ studentName }}
  </p>
  <br />
  <br />
  <TheTextarea placeholder="Rating of the day"></TheTextarea>
  <br />
  <h3>How do I rate the day</h3>
  <p>(from "1" Why did I get up? to "5" Superior)</p>
  <input type="radio" name="note_inhalt" value="Warum bin ich aufgestanden?" />
  1 |
  <input type="radio" name="note_inhalt" value="Oh je!" />
  2 |
  <input type="radio" name="note_inhalt" value="Ganz OK!" />
  3 |
  <input type="radio" name="note_inhalt" value="Lief nach Plan" />
  4 |
  <input type="radio" name="note_inhalt" value="Überragend" />
  5 |
  <br />
  <br />

  <TheTextarea placeholder="Roti reason"></TheTextarea>
  <br />

  <backBtn></backBtn>
  <continueBtn @click="setRandomStudent"></continueBtn>
  <button @click="$router.push('HubView')">zur Startseite</button>
  <saveBtn></saveBtn>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";
import saveBtn from "@/components/Button/saveBtn.vue";

export default {
  components: {
    TheTextarea,
    continueBtn,
    backBtn,
    saveBtn,
  },
  data() {
    return {
      checkout: [...this.$store.state.checkout],
    };
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
    save() {
      this.$store.commit("setCheckout", [...this.checkout]);
    },
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
