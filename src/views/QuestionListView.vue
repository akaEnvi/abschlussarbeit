<template>
  <h1>Questions</h1>
  <addBtn></addBtn>
  <button @click="add">add</button>

  <br />
  <template v-for="(question, index) in questions" :key="index">
    <TheTextarea
      placeholder="Questions"
      v-model="questions[index]"
    ></TheTextarea>
    <button @click="trash(index)">trash</button>
    <trashBtn></trashBtn>
  </template>
  <br />
  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <button @click="save">test</button>
  <textBtn></textBtn>
</template>

<script>
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    addBtn,
    TheTextarea,
    trashBtn,
    backBtn,
    continueBtn,
    textBtn,
  },
  data() {
    return {
      questions: [...this.$store.state.questions],
    };
  },
  methods: {
    save() {
      this.$store.commit("setQuest", [...this.questions]);
    },
    add() {
      this.questions.push("");
    },
    trash(index) {
      this.questions.splice(index, 1);
    },
  },
};
</script>
