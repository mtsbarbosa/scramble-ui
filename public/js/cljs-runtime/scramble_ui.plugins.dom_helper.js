goog.provide('scramble_ui.plugins.dom_helper');
scramble_ui.plugins.dom_helper.get_value_from_name = (function scramble_ui$plugins$dom_helper$get_value_from_name(name){
return cljs.core.first(document.getElementsByName(name)).value;
});

//# sourceMappingURL=scramble_ui.plugins.dom_helper.js.map
