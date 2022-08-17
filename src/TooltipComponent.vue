<style lang="scss"></style>
<template>
  <div class="tooltip tooltip fade show" :class="placementClass" role="tooltip">
    <div class="tooltip-arrow" data-popper-arrow="placement"></div>
    <div class="tooltip-inner" v-if="!html">{{ value }}</div>
    <div class="tooltip-inner" v-if="html" v-html="value"></div>
  </div>
</template>
<script setup>
import { createPopper } from "@popperjs/core";
defineProps({
  html: {
    required: false,
  },
  placement: {
    required: true,
  },
  value: {
    required: true,
  },
  el: {
    required: true,
  },
});
</script>
<script>
export default {
  data() {
    return {
      msg: "test",
    };
  },
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
