<script>
/**
 *  在这个demo中, 我们演示的是 组件渲染的 v-model 绑定问题
 */
import ToggleButton from "./ToggleButton";

export default {
  data() {
    return {
      toggled: true,
    };
  },
  render(h) {
    return h(
      ToggleButton,
      {
        props: {
          value: this.toggled,
        },
        on: {
          input: (newValue) => {
            this.toggled = newValue;
          },
        },
      },
      "hello foo"
    );
  },
};
</script>
