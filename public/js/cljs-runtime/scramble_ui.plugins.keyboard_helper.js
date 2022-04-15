goog.provide('scramble_ui.plugins.keyboard_helper');
scramble_ui.plugins.keyboard_helper.on_return_key_enter = (function scramble_ui$plugins$keyboard_helper$on_return_key_enter(evt,exec_fn){
var return_key_code = (13);
var current_key_code = evt.keyCode;
var is_return_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(return_key_code,current_key_code);
if(is_return_QMARK_){
return (exec_fn.cljs$core$IFn$_invoke$arity$0 ? exec_fn.cljs$core$IFn$_invoke$arity$0() : exec_fn.call(null));
} else {
return null;
}
});

//# sourceMappingURL=scramble_ui.plugins.keyboard_helper.js.map
