<template>
  <h1>Calendar week presenter</h1>

  <div class="select-input">
    <label for="class-select">
      <select @change="storeCurrentClass" id="class-select">
        <option value="">select class</option>
        <option
          v-for="className of getClasses"
          :key="className"
          :value="className"
        >
          {{ className }}
        </option>
      </select>
    </label>
  </div>
  <div class="select-input">Moderator: {{ moderatorName }} <br /></div>
  <button @click="setRandomModerator">
    <textBtn>Generate moderator</textBtn>
  </button>

  <br />
  <br />
  <button @click="$router.push('HubView')">
    <textBtn>Go to categories</textBtn>
  </button>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    textBtn,
  },
  computed: {
    getClasses() {
      return Object.keys(this.$store.getters.getUserByClass);
    },
    moderatorName() {
      return this.$store.state.moderatorName;
    },
    currentCLassName() {
      return this.$store.state.currentClass;
    },
  },
  methods: {
    storeCurrentClass(event) {
      this.$store.dispatch("reset");
      this.$store.commit("setCurrentClass", event.target.value);
    },
    generateRandomNumber(n) {
      return Math.floor(Math.random() * n);
    },
    setRandomModerator() {
      const currentAttendees = this.$store.getters.getCurrentClassAttendees;
      const randomNumber = this.generateRandomNumber(
        currentAttendees.length - 1
      );
      this.$store.commit(
        "setModeratorName",
        currentAttendees[randomNumber].githubName
      );
    },
  },
};
</script>
