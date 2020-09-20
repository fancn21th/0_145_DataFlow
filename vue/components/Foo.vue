<script>
import Button from "./Button";

export default {
  // 在 Render 方法中 注册 组件不是必要的
  // components: {
  //   Button,
  // },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  render(h) {
    return h(
      Button,
      {
        // css class 会覆盖 组件本身的 class
        // attrs: {
        //   class: "button",
        // },
        // on 对 HTML 标签有效
        on: {
          click: () => {
            alert("you click foo");
          },
        },
        // nativeOn 对组件 有效
        nativeOn: {
          click: () => {
            alert("you click foo");
          },
        },
        props: {
          text: this.text,
        },
      },
      "hello foo"
    );
  },
};
</script>
