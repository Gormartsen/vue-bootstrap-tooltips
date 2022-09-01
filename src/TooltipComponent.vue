<style lang="scss"></style>
<template>
  <div class="tooltip" :class="tooltipClasses" role="tooltip">
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
      isShow: false,
    };
  },
  emits: ["shown-bs-tooltip"],
  props: ["html", "placement", "value", "el"],
  watch: {
    isShow: function (newValue) {
      if (newValue) {
        console.log("emmited:shownBsTooltip");
        this.$emit("shown-bs-tooltip");
        createPopper(this.el, this.$el, {
          placement: this.placement,
        });
      }
    },
  },
  computed: {
    tooltipClasses: function () {
      var result = ["fade"];
      if (this.isShow) {
        result.push("show");
      }
      result.push(this.placementClass);
      return result.join(" ");
    },
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
  methods: {
    show: function () {
      this.isShow = true;
    },
    hide: function () {
      this.isShow = false;
    },
  },
  updated: function () {},
  mounted: function () {},
};
</script>
