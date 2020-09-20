<template>
  <div>
    <Foo text="hello foo" />
    <Bar />
  </div>
</template>

<script>
import Foo from "./components/Foo";
import Bar from "./components/Bar";

export default {
  components: {
    Foo,
    Bar,
  },
};
</script>

<style></style>
