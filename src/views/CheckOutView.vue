<template>
  <h1>Check Out</h1>
  <table class="checkin-table">
    <tr>
      <th>Name des Moderators:</th>
      <th>Schüler gesamt</th>
    </tr>
    <tr>
      <td>{{ studentName }}</td>

      <td>{{ currentStep }}</td>
    </tr>
  </table>

  <div class="checkin-content">
    <button @click="$router.push('HubView')">to Hub</button>

    <br />
    <br />
    <TheTextarea placeholder="Rating of the day"></TheTextarea>
    <br />
    <h3>How do I rate the day</h3>
    <p>(from "1" Why did I get up? to "5" Superior)</p>
    <input
      type="radio"
      name="note_inhalt"
      value="Warum bin ich aufgestanden?"
    />
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
  </div>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";

export default {
  components: {
    TheTextarea,
    continueBtn,
    backBtn,
  },
  data() {
    return {
      problems: "",
      goals: "",
      present: false,
      currentStudentIndex: 0,
    };
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
    save() {
      const checkin = {
        present: this.present,
        student:
          this.$store.getters.getCurrentClassAttendees[
            this.currentStudentIndex
          ],
        problems: this.problems,
        goals: this.goals,
      };
      this.$store.commit("addUpdateCheckin", checkin);
    },
    handleFinish() {
      this.save();
      this.$router.push("/HubView");
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    prepareFormFields() {
      this.goals = "";
      this.problems = "";

      const currentStoreData =
        this.$store.state.checking[this.currentStudentIndex];
      this.goals = currentStoreData.goals;
      this.problems = currentStoreData.problems;
    },

    setNext() {
      this.save();
      this.currentStudentIndex = this.currentStudentIndex + 1;
      this.prepareFormFields();
    },

    setBack() {
      this.save();
      this.currentStudentIndex = this.currentStudentIndex - 1;
      this.prepareFormFields();
    },
  },
  beforeRouteLeave() {
    this.save();
  },
};
</script>
