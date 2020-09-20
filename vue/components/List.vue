<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: [],
    },
  },
  render(h) {
    return h("div", {}, [
      h("h2", {}, "姓名列表:"),
      this.$scopedSlots.default({
        count: this.contacts.length,
      }),
      h(
        "ul",
        {
          attrs: {
            class: "name-list",
          },
        },
        this.contacts.map((contact) => {
          return h(
            "li",
            {
              attrs: {
                class: "name",
              },
            },
            `${contact.name.first} ${contact.name.last}`
          );
        })
      ),
    ]);
  },
};
</script>

<style scoped>
.name-list {
  padding-left: 0;
}
.name {
  background-color: #efefef;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.name:hover {
  background-color: #ddd;
}
</style>
