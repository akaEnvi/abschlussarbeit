<template>
  <p>
    Name des Student:
    {{ studentName }} <br />
    {{ currentStep }}
  </p>

  <input type="checkbox" v-model="present" />

  <button @click="$router.push('HubView')">to Hub</button>


  <br />
  <TheTextarea
    placeholder="What was frustrating yesterday"
    v-model="problems"
  ></TheTextarea>
  <br />
  <TheTextarea
    placeholder="What are my daily goals"
    v-model="goals"
  ></TheTextarea>
  <br />



  <continueBtn @click="setRandomStudent"></continueBtn>

  <saveBtn @click="save"></saveBtn>

  <backBtn v-if="currentStudentIndex !== 0" @click="setBack" />
  <continueBtn
    v-if="currentStudentIndex < getCurrentClassAttendees.length - 1"
    @click="setNext"
  />

</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import saveBtn from "@/components/Button/saveBtn.vue";

export default {
  components: {
    TheTextarea,
    backBtn,
    continueBtn,
    saveBtn,
  },
  data() {
    return {
      present: false,
      checking: [...this.$store.state.checking],
    };
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

    save() {
      const checkin = {
        present: this.present,
        student: this.$store.getters.getCurrentClassAttendees[0],
        problems: this.problems,
        goals: this.goals,
      };
      this.$store.commit("addUpdateCheckin", checkin);
    },

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
