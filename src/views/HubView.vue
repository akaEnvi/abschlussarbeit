<template>
  <h1>HUB</h1>
  <button @click="$router.push('CheckInView')">
    <textBtn>Check In</textBtn>
  </button>
  <br />
  <button @click="$router.push('LiveSessionView')">
    <textBtn>Live Session</textBtn>
  </button>
  <br />
  <button @click="$router.push('CheckOutView')">
    <textBtn>Check Out</textBtn>
  </button>
  <br />
  <button @click="$router.push('ExportView')">
    <textBtn>Export</textBtn>
  </button>
  <br />

  <backBtn @click="$router.push('/')"></backBtn>
</template>

<script>
import textBtn from "@/components/Button/textBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";

export default {
  components: {
    textBtn,
    backBtn,
  },
};
</script>
