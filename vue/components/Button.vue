<template>
  <button class="button">{{ text }}</button>
</template>

<script>
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_pill_button

export default {
  props: {
    text: {
      type: String,
      default: "Hello Button",
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.button:hover {
  background-color: #f1f1f1;
}
</style>
