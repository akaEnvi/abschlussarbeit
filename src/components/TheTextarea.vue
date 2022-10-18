<template>
  <textarea
    class="checkin-textarea"
    placeholder="test"
    rows="5"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
