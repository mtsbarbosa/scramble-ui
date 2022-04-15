goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20677,p__20678){
var map__20679 = p__20677;
var map__20679__$1 = cljs.core.__destructure_map(map__20679);
var svc = map__20679__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20680 = p__20678;
var map__20680__$1 = cljs.core.__destructure_map(map__20680);
var msg = map__20680__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20680__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20691,p__20692){
var map__20693 = p__20691;
var map__20693__$1 = cljs.core.__destructure_map(map__20693);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20693__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20694 = p__20692;
var map__20694__$1 = cljs.core.__destructure_map(map__20694);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20699,p__20700){
var map__20702 = p__20699;
var map__20702__$1 = cljs.core.__destructure_map(map__20702);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20703 = p__20700;
var map__20703__$1 = cljs.core.__destructure_map(map__20703);
var msg = map__20703__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20703__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20719,tid){
var map__20720 = p__20719;
var map__20720__$1 = cljs.core.__destructure_map(map__20720);
var svc = map__20720__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20720__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20738 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20739 = null;
var count__20740 = (0);
var i__20741 = (0);
while(true){
if((i__20741 < count__20740)){
var vec__20750 = chunk__20739.cljs$core$IIndexed$_nth$arity$2(null,i__20741);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20750,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20750,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20777 = seq__20738;
var G__20778 = chunk__20739;
var G__20779 = count__20740;
var G__20780 = (i__20741 + (1));
seq__20738 = G__20777;
chunk__20739 = G__20778;
count__20740 = G__20779;
i__20741 = G__20780;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20738);
if(temp__5753__auto__){
var seq__20738__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20738__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20738__$1);
var G__20781 = cljs.core.chunk_rest(seq__20738__$1);
var G__20782 = c__4679__auto__;
var G__20783 = cljs.core.count(c__4679__auto__);
var G__20784 = (0);
seq__20738 = G__20781;
chunk__20739 = G__20782;
count__20740 = G__20783;
i__20741 = G__20784;
continue;
} else {
var vec__20755 = cljs.core.first(seq__20738__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20789 = cljs.core.next(seq__20738__$1);
var G__20790 = null;
var G__20791 = (0);
var G__20792 = (0);
seq__20738 = G__20789;
chunk__20739 = G__20790;
count__20740 = G__20791;
i__20741 = G__20792;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20729_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20729_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20730_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20730_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20732_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20732_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20734_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20734_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20765){
var map__20766 = p__20765;
var map__20766__$1 = cljs.core.__destructure_map(map__20766);
var svc = map__20766__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
