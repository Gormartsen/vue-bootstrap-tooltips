export default {
  install: function (app, TooltipSettings) {
    app.config.globalProperties["$tooltipText"] = function (name) {
      if (TooltipSettings[name]) {
        return TooltipSettings[name];
      }
      return name;
    };
  },
};
