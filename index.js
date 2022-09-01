import { createVNode, render } from "vue";
import Component from "./src/TooltipComponent.vue";
var prepareProps = function (binding, originProps) {
  var props = {
    placement: "top",
  };
  if (originProps) {
    props = originProps;
  }
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
  return props;
};

export default {
  install: function (app) {
    app.directive("tooltip", {
      mounted: function (el, binding) {
        el.tooltip = {
          props: prepareProps(binding),
        };
        el.tooltip.props.el = el;
        el.addEventListener("mouseover", function () {
          if (el.tooltip.enabled) {
            return;
          }
          el.tooltip.enabled = true;
          var container = document.createElement("div");
          el.tooltip.vm = createVNode(Component, el.tooltip.props);
          render(el.tooltip.vm, container);

          el.tooltip.node = container.firstElementChild;
          document.body.appendChild(el.tooltip.node);
          el.tooltip.vm.component.ctx.show();
        });
        el.addEventListener("mouseleave", function () {
          if (!el.tooltip.enabled) {
            return;
          }
          el.tooltip.enabled = false;
          el.tooltip.vm.component.ctx.hide();
          setTimeout(function () {
            if (el.tooltip.node !== null) {
              el.tooltip.node.parentNode.removeChild(el.tooltip.node);
              el.tooltip.node = null;
            }
          }, 300);
        });
      },
      beforeDestroy: function (el) {
        if (el.tooltip.node !== null) {
          el.tooltip.node.parentNode.removeChild(el.tooltip.node);
          el.tooltip.node = null;
          delete el.tooltip.vm;
        }
      },
      updated: function (el, binding) {
        prepareProps(binding, el.tooltip.props);
        if (el.tooltip.vm) {
          for (var i in el.tooltip.props) {
            el.tooltip.vm.component.props[i] = el.tooltip.props[i];
          }
        }
      },
    });
  },
};
