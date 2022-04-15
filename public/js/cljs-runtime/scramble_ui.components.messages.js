goog.provide('scramble_ui.components.messages');
scramble_ui.components.messages.message_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"message-error",new cljs.core.Keyword(null,"info","info",-317069002),"message-info"], null);
scramble_ui.components.messages.render = (function scramble_ui$components$messages$render(var_args){
var G__12188 = arguments.length;
switch (G__12188) {
case 3:
return scramble_ui.components.messages.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return scramble_ui.components.messages.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(scramble_ui.components.messages.render.cljs$core$IFn$_invoke$arity$3 = (function (id_prefix,messages,classes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"messages"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,message){
var attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),classes,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)], null));
}),messages)], null);
}));

(scramble_ui.components.messages.render.cljs$core$IFn$_invoke$arity$2 = (function (id_prefix,messages){
return scramble_ui.components.messages.render.cljs$core$IFn$_invoke$arity$3(id_prefix,messages,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(scramble_ui.components.messages.message_types));
}));

(scramble_ui.components.messages.render.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=scramble_ui.components.messages.js.map
