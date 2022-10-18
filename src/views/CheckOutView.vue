<template>
  <h1>Check Out</h1>
  <div class="checkin-table">
    <table>
      <tr>
        <th>Attendee name</th>
        <th>Attendees</th>
      </tr>
      <tr>
        <td>{{ studentName }}</td>
        <td>{{ currentStep }}</td>
      </tr>
      <tr>
        <td>is present<input type="checkbox" v-model="present" /></td>
        <td></td>
      </tr>
    </table>
  </div>

  <div class="checkin-content">
    <TheTextarea
      placeholder="Rating of the day"
      v-model="problems"
    ></TheTextarea>

    <h2>How do I rate the day</h2>
    <p>(from "1" Why did I get up? to "5" Superior)</p>
    <div class="roti-radio">
      <label for="radio-button" class="radio-button"
        ><input
          type="radio"
          name="note_inhalt"
          value="Warum bin ich aufgestanden?"
          id="roadio-button"
        />
        1 Star</label
      >
      <label for="radio-button2" class="radio-button">
        <input
          type="radio"
          name="note_inhalt"
          value="Oh je!"
          id="roadio-button2"
        />
        2 Stars</label
      ><label for="radio-button3" class="radio-button">
        <input
          type="radio"
          name="note_inhalt"
          value="Ganz OK!"
          id="roadio-button3"
        />3 Stars</label
      >
      <label for="radio-button4" class="radio-button">
        <input
          type="radio"
          name="note_inhalt"
          value="Lief nach Plan"
          id="roadio-button4"
        />
        4 Stars</label
      >
      <label for="radio-button5" class="radio-button">
        <input
          type="radio"
          name="note_inhalt"
          value="Überragend"
          id="roadio-button5"
        />
        5 Stars</label
      >
    </div>

    <TheTextarea placeholder="Roti reason" v-model="goals"></TheTextarea>
    <br />
  </div>
  <div>
    <continueBtn
      v-if="currentStudentIndex < getCurrentClassAttendees.length - 1"
      @click="setNext"
    /><backBtn
      v-if="
        currentStudentIndex !== 0 &&
        currentStudentIndex < getCurrentClassAttendees.length - 1
      "
      @click="setBack"
    />

    <button
      v-if="currentStudentIndex === getCurrentClassAttendees.length - 1"
      @click="handleFinish"
    >
      Done and back
    </button>
  </div>
  <div>
    <button @click="$router.push('HubView')">to Hub</button>
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
