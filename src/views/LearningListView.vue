<template>
  <h1>What I learned today</h1>
  <addBtn></addBtn>
  <br />
  <TheTextarea placeholder="Knowledge"></TheTextarea>
  <trashBtn></trashBtn>
  <br />
  <backBtn></backBtn>
  <backBtn></backBtn>
</template>

<script>
import backBtn from "@/components/Button/backBtn.vue";
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";

export default {
  components: {
    backBtn,
    addBtn,
    TheTextarea,
    trashBtn,
  },
};
</script>
