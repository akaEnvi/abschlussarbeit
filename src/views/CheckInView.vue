<template>
  <DropdownClass></DropdownClass>
  <CheckboxAttendance></CheckboxAttendance>
  <br />
  <TheTextarea placeholder="What was frustrating yesterday"></TheTextarea>
  <br />
  <TheTextarea placeholder="What are my daily goals"></TheTextarea>
  <br />

  <backBtn></backBtn>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import DropdownClass from "@/components/DropdownClass.vue";
import backBtn from "@/components/Button/backBtn.vue";

export default {
  components: {
    TheTextarea,
    DropdownClass,
    backBtn,
  },
};
</script>
