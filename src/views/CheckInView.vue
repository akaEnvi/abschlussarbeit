<template>
  <p>Name des Student</p>

  <br />
  <TheTextarea placeholder="What was frustrating yesterday"></TheTextarea>
  <br />
  <TheTextarea placeholder="What are my daily goals"></TheTextarea>
  <br />

  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <textBtn></textBtn>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    TheTextarea,
    backBtn,
    continueBtn,
    textBtn,
  },
};
</script>
