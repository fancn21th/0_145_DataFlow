<template>
  <div>
    <Foo text="hello foo" />
    <hr />
    <Bar />
    <hr />
    <List :contacts="contacts" />
  </div>
</template>

<script>
import Foo from "./components/Foo";
import Bar from "./components/Bar";
import List from "./components/List";

export default {
  components: {
    Foo,
    Bar,
    List,
  },
  data() {
    return {
      contacts: [
        {
          name: { first: "轶洁", last: "范" },
        },
        {
          name: { first: "超", last: "李" },
        },
        {
          name: { first: "胜", last: "郭" },
        },
        {
          name: { first: "军", last: "彭" },
        },
      ],
    };
  },
};
</script>

<style></style>
