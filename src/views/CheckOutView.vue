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
    <p>Rating of the day:</p>
    <TheTextarea placeholder="say something" v-model="ratingDay"></TheTextarea>

    <h2>How do I rate the day</h2>
    <p>(from 1⭐ Why did I get up? to 5⭐ Superior)</p>
    <div class="roti-radio">
      <label for="radio-button" class="radio-button"
        ><input
          v-model="rotiValue"
          type="radio"
          name="note_inhalt"
          value="Warum bin ich aufgestanden?"
          id="radio-button"
        />
        <span class="star">⭐</span>
      </label>

      <label for="radio-button2" class="radio-button">
        <input
          v-model="rotiValue"
          type="radio"
          name="note_inhalt"
          value="Oh je!"
          id="radio-button2"
        />
        ⭐⭐</label
      >

      <label for="radio-button3" class="radio-button">
        <input
          v-model="rotiValue"
          type="radio"
          name="note_inhalt"
          value="Ganz OK!"
          id="radio-button3"
        />⭐⭐⭐</label
      >
      <label for="radio-button4" class="radio-button">
        <input
          v-model="rotiValue"
          type="radio"
          name="note_inhalt"
          value="Lief nach Plan"
          id="radio-button4"
        />
        ⭐⭐⭐⭐</label
      >
      <label for="radio-button5" class="radio-button">
        <input
          v-model="rotiValue"
          type="radio"
          name="note_inhalt"
          value="Überragend"
          id="radio-button5"
        />
        ⭐⭐⭐⭐⭐</label
      >
    </div>

    <TheTextarea placeholder="Roti reason" v-model="rotiReason"></TheTextarea>
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
      ratingDay: "",
      rotiValue: "",
      rotiReason: "",
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
      const checkOut = {
        present: this.present,
        student:
          this.$store.getters.getCurrentClassAttendees[
            this.currentStudentIndex
          ],
        ratingDay: this.ratingDay,
        rotiReason: this.rotiReason,
        rotiValue: this.rotiValue,
      };
      this.$store.commit("addUpdateCheckOut", checkOut);
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
      this.rotiReason = "";
      this.ratingDay = "";
      this.rotiValue = "";
      this.present = "false";
      const currentStoreData =
        this.$store.state.checkout[this.currentStudentIndex];
      if (!currentStoreData) {
        return;
      }

      if (currentStoreData.rotiReason) {
        this.rotiReason = currentStoreData.rotiReason;
      }
      if (currentStoreData.ratingDay) {
        this.ratingDay = currentStoreData.ratingDay;
      }
      if (currentStoreData.rotiValue) {
        this.rotiValue = currentStoreData.rotiValue;
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
