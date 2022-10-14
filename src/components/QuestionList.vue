<template>

  <div class="header">
    <h1>Questions</h1>
    <button class="add">Add</button>
  </div>
  <div class="main">
    <form class="question-list">
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
    </form>
  </div>
  <button class="submit">Submit</button>
  <button class="back">Back</button>
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
