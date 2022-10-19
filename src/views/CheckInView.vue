<template>
  <h1>Check IN</h1>
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
    <p>What was frustrating yesterday:</p>
    <TheTextarea placeholder="say something" v-model="problems"></TheTextarea>

    <p>What are my daily goals:</p>
    <TheTextarea placeholder="say something" v-model="goals"></TheTextarea>
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
  </div>
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
      this.$store.commit("addUpdateCheckIn", checkin);
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


      this.present = "false";
      const currentStoreData =
        this.$store.state.checkIn[this.currentStudentIndex];


      console.log(this.$store.state.checkIn);
      const currentStoreData =
        this.$store.state.checkIn[this.currentStudentIndex];
      console.log(currentStoreData);


      this.present = "false";
      const currentStoreData =

      if (!currentStoreData) {
        return;
      }

      if (currentStoreData.goals) {
        this.goals = currentStoreData.goals;
      }
      if (currentStoreData.problems) {
        this.problems = currentStoreData.problems;
      }
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
