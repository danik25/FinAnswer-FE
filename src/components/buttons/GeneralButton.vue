<template>
  <button>{{ content }}</button>
</template>

<script setup>
const props = defineProps(["content"]);
</script>

<style scoped>
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  font-size: 16px;

  border: 2px solid lightgrey;
  width:100px;
  margin: 8px;
  border-radius: 5px;

}
</style>
