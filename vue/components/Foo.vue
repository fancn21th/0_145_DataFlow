<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        attrs: {
          class: "font-bold",
        },
        on: {
          click: () => {
            alert("you click foo");
          },
        },
      },
      "hello foo"
    );
  },
};
</script>

<style scoped>
.font-bold {
  font-weight: bold;
}
</style>
