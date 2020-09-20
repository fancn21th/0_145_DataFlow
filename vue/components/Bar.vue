<script>
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
