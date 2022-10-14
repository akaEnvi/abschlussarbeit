<template>
  <!-- Inputtfeld X
    add button X
    Text wird angezeigt
    Text kann ggf. gelöscht werden -->
  <h1>Test</h1>

  <input
    type="text"
    placeholder="Text"
    v-model="newText"
    @keyup.enter="addText"
  />

  <addBtn @click="addText"></addBtn>
  <trashBtn></trashBtn>

  <div id="output"></div>
</template>

<script>
import addBtn from "@/components/Button/addBtn.vue";
import trashBtn from "@/components/Button/trashBtn.vue";

export default {
  components: {
    addBtn,
    trashBtn,
  },

  data() {
    return {
      newText: "",
    };
  },
  methods: {
    addText() {
      if (this.newText) {
        this.texts.push({
          title: this.newText,
          completed: false,
        });
        this.newText = "";
      }
    },
  },
};
</script>
