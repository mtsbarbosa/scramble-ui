goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22335 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22336 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22336);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22338 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22339 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22339);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22338);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22335);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22352 = arguments.length;
switch (G__22352) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22373 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22373,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22373,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22394_22438 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22395_22439 = null;
var count__22396_22440 = (0);
var i__22397_22441 = (0);
while(true){
if((i__22397_22441 < count__22396_22440)){
var vec__22415_22442 = chunk__22395_22439.cljs$core$IIndexed$_nth$arity$2(null,i__22397_22441);
var container_22443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22415_22442,(0),null);
var comp_22444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22415_22442,(1),null);
reagent.dom.re_render_component(comp_22444,container_22443);


var G__22446 = seq__22394_22438;
var G__22447 = chunk__22395_22439;
var G__22448 = count__22396_22440;
var G__22449 = (i__22397_22441 + (1));
seq__22394_22438 = G__22446;
chunk__22395_22439 = G__22447;
count__22396_22440 = G__22448;
i__22397_22441 = G__22449;
continue;
} else {
var temp__5753__auto___22450 = cljs.core.seq(seq__22394_22438);
if(temp__5753__auto___22450){
var seq__22394_22452__$1 = temp__5753__auto___22450;
if(cljs.core.chunked_seq_QMARK_(seq__22394_22452__$1)){
var c__4679__auto___22453 = cljs.core.chunk_first(seq__22394_22452__$1);
var G__22454 = cljs.core.chunk_rest(seq__22394_22452__$1);
var G__22455 = c__4679__auto___22453;
var G__22456 = cljs.core.count(c__4679__auto___22453);
var G__22457 = (0);
seq__22394_22438 = G__22454;
chunk__22395_22439 = G__22455;
count__22396_22440 = G__22456;
i__22397_22441 = G__22457;
continue;
} else {
var vec__22419_22458 = cljs.core.first(seq__22394_22452__$1);
var container_22459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419_22458,(0),null);
var comp_22460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419_22458,(1),null);
reagent.dom.re_render_component(comp_22460,container_22459);


var G__22462 = cljs.core.next(seq__22394_22452__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__22394_22438 = G__22462;
chunk__22395_22439 = G__22463;
count__22396_22440 = G__22464;
i__22397_22441 = G__22465;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
