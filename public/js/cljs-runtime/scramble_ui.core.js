goog.provide('scramble_ui.core');
scramble_ui.core.mount_root = (function scramble_ui$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scramble_ui.pages.home_page.render], null),document.getElementById("app"));
});
scramble_ui.core.init_BANG_ = (function scramble_ui$core$init_BANG_(){
return scramble_ui.core.mount_root();
});
goog.exportSymbol('scramble_ui.core.init_BANG_', scramble_ui.core.init_BANG_);

//# sourceMappingURL=scramble_ui.core.js.map
