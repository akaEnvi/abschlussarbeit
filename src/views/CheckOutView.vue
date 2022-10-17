<template>
  <br />
  <p>
    Name des Student:
    {{ studentName }} <br />
    {{ currentStep }}
  </p>
  <button @click="$router.push('HubView')">to Hub</button>

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

  <backBtn v-if="currentStudentIndex !== 0" @click="setBack" />
  <continueBtn
    v-if="currentStudentIndex < getCurrentClassAttendees.length - 1"
    @click="setNext"
  />
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
    return { currentStudentIndex: 0 };
  },
  computed: {
    studentName() {
      return this.getCurrentClassAttendees[this.currentStudentIndex].githubName;
    },
    currentCLassName() {
      return this.$store.state.currentClass;
    },
    getCurrentClassAttendees() {
      return this.shuffle(this.$store.getters.getCurrentClassAttendees);
    },
    currentStep() {
      return `${this.currentStudentIndex + 1}/${
        this.getCurrentClassAttendees.length
      }`;
    },
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    setNext() {
      this.currentStudentIndex = this.currentStudentIndex + 1;
    },
    setBack() {
      this.currentStudentIndex = this.currentStudentIndex - 1;
    },
  },
};
</script>
