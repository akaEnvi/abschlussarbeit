<template>
  <h1>Attendance check</h1>
  <br />
  <input type="checkbox" name="test" id="" />
  <label for="test">Muss geklärt werden</label>
  <br />
  <button @click="$router.push('LearningListView')">
    <textBtn>Feedback</textBtn>
  </button>
  <br />
  <backBtn></backBtn>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";

export default {
  components: {
    textBtn,
    backBtn,
  },
};
</script>
