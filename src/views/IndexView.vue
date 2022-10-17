<template>
  <div>
    <TheDropDown />
  </div>

  <h1>Calendar week presenter</h1>

  <div>
    <select @change="storeCurrentClass" id="testSelect1">
      <option value="">select class</option>
      <option
        v-for="className of getClasses"
        :key="className"
        :value="className"
      >
        {{ className }}
      </option>
    </select>
  </div>

  <br />
  <!-- <OutputModerator></OutputModerator> -->
  <br />
  Moderator: {{ moderatorName }}
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
// import OutputModerator from "@/components/OutputModerator.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    // OutputModerator,
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
