<template>
  <p>
    Name des Student:
    {{ this.$store.getters.getCurrentClassAttendees[0].githubName }}
  </p>
  <input type="checkbox" v-model="present" />

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

  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <button @click="$router.push('HubView')">zur Startseite</button>
  <saveBtn @click="save"></saveBtn>
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
  },
};
</script>
