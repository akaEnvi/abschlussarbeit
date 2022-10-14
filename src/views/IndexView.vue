<template>
  <h1>Calendar week presenter</h1>

  <DropdownClass></DropdownClass>
  <br />
  <!-- <OutputModerator></OutputModerator> -->
  <br />
  <button><textBtn>Generate moderator</textBtn></button>
  <br />
  <br />
  <button><textBtn>Go to categories</textBtn></button>
</template>

<script>
// import OutputModerator from "@/components/OutputModerator.vue";
import DropdownClass from "@/components/DropdownClass.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    // OutputModerator,
    textBtn,
    DropdownClass,
  },
};
</script>
