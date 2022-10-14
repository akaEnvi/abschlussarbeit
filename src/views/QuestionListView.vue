<template>
  <h1>Questions</h1>
  <addBtn></addBtn>
  <br />
  <TheTextarea placeholder="Questions"></TheTextarea>
  <trashBtn></trashBtn>
  <br />
  <backBtn></backBtn>
  <button><textBtn>To Main</textBtn></button>
</template>

<script>
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    addBtn,
    TheTextarea,
    trashBtn,
    textBtn,
  },
};
</script>
