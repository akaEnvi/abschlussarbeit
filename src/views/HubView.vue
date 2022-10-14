<template>
  <button><textBtn>Check In</textBtn></button>
  <br />
  <button><textBtn>Live Session</textBtn></button>
  <br />
  <button><textBtn>Check Out</textBtn></button>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    textBtn,
  },
};
</script>
