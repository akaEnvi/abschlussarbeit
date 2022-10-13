<template>
  <table>
    <thead>
      <tr>
        Name:<br />
        <TheName />
        <br />
        Was lief gestern suboptimal?
        <br />
        <TheTextarea />
        <br />
        Daily Goals!
        <br />
        <TheTextarea />
        <br />
      </tr>
    </thead>
  </table>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import TheName from "@/components/TheName.vue";

export default {
  components: {
    TheTextarea,
    TheName,
  },
};
</script>
