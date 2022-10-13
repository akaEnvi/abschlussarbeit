<template>
  <h1>What I learned today</h1>
  <addBtn></addBtn>
  <br />
  <TheTextarea placeholder="Question"></TheTextarea>
  <trashBtn></trashBtn>
  <br />

  <button><textBtn>To Main Menu</textBtn></button>
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
