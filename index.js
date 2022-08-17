import { createVNode, render } from "vue";
import Component from "./src/TooltipComponent.vue";


var cleanTooltip = function(){
  var node = document.querySelector(".tooltip")
  node.parentNode.removeChild(node);
  console.log('remove', node)
}
export default {
  install: function (app) {
    app.directive("tooltip", function (el, binding) {
      var node = null;
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
