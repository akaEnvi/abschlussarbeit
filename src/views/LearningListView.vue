<template>
  <h1>What I learned today</h1>
  <addBtn></addBtn>
  <br />
  <TheTextarea placeholder="Knowledge"></TheTextarea>
  <trashBtn></trashBtn>
  <br />
  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <textBtn></textBtn>
</template>

<script>
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    backBtn,
    continueBtn,
    addBtn,
    TheTextarea,
    trashBtn,
    textBtn,
  },
};
</script>
