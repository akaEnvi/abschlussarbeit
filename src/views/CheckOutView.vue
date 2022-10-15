<template>
  <br />
  <p>
    Name des Student:
    {{ this.$store.getters.getCurrentClassAttendees[0].githubName }}
  </p>
  <br />
  <br />
  <TheTextarea placeholder="Rating of the day"></TheTextarea>
  <br />
  <h3>How do I rate the day</h3>
  <p>(from "1" Why did I get up? to "5" Superior)</p>
  <input type="radio" name="note_inhalt" value="Warum bin ich aufgestanden?" />
  1 |
  <input type="radio" name="note_inhalt" value="Oh je!" />
  2 |
  <input type="radio" name="note_inhalt" value="Ganz OK!" />
  3 |
  <input type="radio" name="note_inhalt" value="Lief nach Plan" />
  4 |
  <input type="radio" name="note_inhalt" value="Überragend" />
  5 |
  <br />
  <br />

  <TheTextarea placeholder="Roti reason"></TheTextarea>
  <br />

  <backBtn></backBtn>
  <continueBtn></continueBtn>
  <textBtn></textBtn>
</template>

<script>
import TheTextarea from "@/components/TheTextarea.vue";
import continueBtn from "@/components/Button/continueBtn.vue";
import backBtn from "@/components/Button/backBtn.vue";
import textBtn from "@/components/Button/textBtn.vue";

export default {
  components: {
    TheTextarea,
    continueBtn,
    backBtn,
    textBtn,
  },
};
</script>
