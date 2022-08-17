import { createVNode, render } from "vue";
import Component from "./src/TooltipComponent.vue";

var node = null;
var cleanTooltip = function(){
  document.querySelector("body").removeChild(node);
}
export default {
  install: function (app) {
    app.directive("tooltip", function (el, binding) {
      el.addEventListener("mouseover", function () {
        const container = document.createElement("div");
        var props = {
          placement: "top",
        };
        if (binding.modifiers.left) {
          props.placement = "left";
        }
        if (binding.modifiers.right) {
          props.placement = "right";
        }
        if (binding.modifiers.bottom) {
          props.placement = "bottom";
        }
        if (binding.modifiers.html) {
          props.html = true;
        }

        props.value = binding.value;
        props.el = el;
        const vm = createVNode(Component, props);
        render(vm, container);

        node = container.firstElementChild;
        document.body.appendChild(node);
      });
      el.addEventListener("mouseleave", cleanTooltip);
    });
  },
};
