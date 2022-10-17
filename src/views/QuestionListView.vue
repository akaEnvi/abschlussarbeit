<template>
  <h1>Questions</h1>
  <addBtn @click="add"></addBtn>

  <br />
  <template v-for="(question, index) in questions" :key="index">
    <TheTextarea
      placeholder="Questions"
      v-model="questions[index]"
    ></TheTextarea>

    <trashBtn @click="trash(index)"></trashBtn>
    <saveBtn @click="save"></saveBtn>
  </template>
  <br />
  <backBtn @click="$router.push('LearningListView')"></backBtn>
  <button @click="$router.push('HubView')">to Hub</button>
</template>

<script>
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";
import backBtn from "@/components/Button/backBtn.vue";

import saveBtn from "@/components/Button/saveBtn.vue";

export default {
  components: {
    addBtn,
    TheTextarea,
    trashBtn,
    backBtn,
    saveBtn,
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
