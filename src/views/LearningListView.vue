<template>
  <h1>What I learned today</h1>
  <addBtn @click="add"></addBtn>
  <br />
  <template v-for="(know, index) in knowledge" :key="index">
    <TheTextarea
      placeholder="Knowledge"
      v-model="knowledge[index]"
    ></TheTextarea>

    <trashBtn @click="trash(index)"></trashBtn>
  </template>
  <br />
  <saveBtn @click="save"></saveBtn>

  <backBtn @click="$router.push('LiveSessionView')"></backBtn>
  <continueBtn @click="$router.push('QuestionListView')"></continueBtn>
</template>

<script>
import backBtn from "@/components/Button/backBtn.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";
import TheTextarea from "@/components/TheTextarea.vue";
import saveBtn from "@/components/Button/saveBtn.vue";

export default {
  components: {
    backBtn,
    continueBtn,
    addBtn,
    TheTextarea,
    trashBtn,
    saveBtn,
  },
  data() {
    return {
      knowledge: [...this.$store.state.knowledge],
    };
  },
  methods: {
    save() {
      this.$store.commit("setKnowledge", [...this.knowledge]);
    },
    add() {
      this.knowledge.push("");
    },
    trash(index) {
      this.knowledge.splice(index, 1);
    },
  },
};
</script>
