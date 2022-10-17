<template>
  <p>
    {{ this.$store.getters.getCurrentClassAttendees[0].githubName }}
  </p>

  <br />
  <TheTextarea placeholder="What was frustrating yesterday"></TheTextarea>
  <br />
  <TheTextarea placeholder="What are my daily goals"></TheTextarea>
  <br />

  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <button @click="$router.push('HubView')">to Hub</button>
  <saveBtn></saveBtn>
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
};
</script>
