<style lang="scss"></style>
<template>
  <div class="tooltip fade show" :class="placementClass" role="tooltip">
    <div class="tooltip-arrow" data-popper-arrow="placement"></div>
    <div class="tooltip-inner" v-if="!html">{{ value }}</div>
    <div class="tooltip-inner" v-if="html" v-html="value"></div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
export default {
  data() {
    return {
      msg: "test",
    };
  },
  props: ["html", "placement", "value", "el"],
  computed: {
    placementClass: function () {
      var position = this.placement;
      if (position == "left") {
        position = "start";
      }
      if (position == "right") {
        position = "end";
      }
      return " bs-tooltip-" + position;
    },
  },
  mounted() {
    createPopper(this.el, this.$el, {
      placement: this.placement,
    });
  },
};
</script>
