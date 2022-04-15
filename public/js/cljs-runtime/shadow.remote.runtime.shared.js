goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17092,res){
var map__17093 = p__17092;
var map__17093__$1 = cljs.core.__destructure_map(map__17093);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17094 = res;
var G__17094__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17094,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17094);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17094__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17094__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17096 = arguments.length;
switch (G__17096) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17098,msg,handlers,timeout_after_ms){
var map__17099 = p__17098;
var map__17099__$1 = cljs.core.__destructure_map(map__17099);
var runtime = map__17099__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___17362 = arguments.length;
var i__4865__auto___17363 = (0);
while(true){
if((i__4865__auto___17363 < len__4864__auto___17362)){
args__4870__auto__.push((arguments[i__4865__auto___17363]));

var G__17365 = (i__4865__auto___17363 + (1));
i__4865__auto___17363 = G__17365;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17115,ev,args){
var map__17121 = p__17115;
var map__17121__$1 = cljs.core.__destructure_map(map__17121);
var runtime = map__17121__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17121__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17124 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17131 = null;
var count__17132 = (0);
var i__17133 = (0);
while(true){
if((i__17133 < count__17132)){
var ext = chunk__17131.cljs$core$IIndexed$_nth$arity$2(null,i__17133);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17367 = seq__17124;
var G__17368 = chunk__17131;
var G__17369 = count__17132;
var G__17370 = (i__17133 + (1));
seq__17124 = G__17367;
chunk__17131 = G__17368;
count__17132 = G__17369;
i__17133 = G__17370;
continue;
} else {
var G__17371 = seq__17124;
var G__17372 = chunk__17131;
var G__17373 = count__17132;
var G__17374 = (i__17133 + (1));
seq__17124 = G__17371;
chunk__17131 = G__17372;
count__17132 = G__17373;
i__17133 = G__17374;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17124);
if(temp__5753__auto__){
var seq__17124__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17124__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17124__$1);
var G__17378 = cljs.core.chunk_rest(seq__17124__$1);
var G__17379 = c__4679__auto__;
var G__17380 = cljs.core.count(c__4679__auto__);
var G__17381 = (0);
seq__17124 = G__17378;
chunk__17131 = G__17379;
count__17132 = G__17380;
i__17133 = G__17381;
continue;
} else {
var ext = cljs.core.first(seq__17124__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17382 = cljs.core.next(seq__17124__$1);
var G__17383 = null;
var G__17384 = (0);
var G__17385 = (0);
seq__17124 = G__17382;
chunk__17131 = G__17383;
count__17132 = G__17384;
i__17133 = G__17385;
continue;
} else {
var G__17386 = cljs.core.next(seq__17124__$1);
var G__17387 = null;
var G__17388 = (0);
var G__17389 = (0);
seq__17124 = G__17386;
chunk__17131 = G__17387;
count__17132 = G__17388;
i__17133 = G__17389;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17100){
var G__17101 = cljs.core.first(seq17100);
var seq17100__$1 = cljs.core.next(seq17100);
var G__17102 = cljs.core.first(seq17100__$1);
var seq17100__$2 = cljs.core.next(seq17100__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17101,G__17102,seq17100__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17140,p__17141){
var map__17142 = p__17140;
var map__17142__$1 = cljs.core.__destructure_map(map__17142);
var runtime = map__17142__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17142__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17143 = p__17141;
var map__17143__$1 = cljs.core.__destructure_map(map__17143);
var msg = map__17143__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17143__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17154 = cljs.core.deref(state_ref);
var map__17154__$1 = cljs.core.__destructure_map(map__17154);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17154__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17154__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17167){
var map__17168 = p__17167;
var map__17168__$1 = cljs.core.__destructure_map(map__17168);
var runtime = map__17168__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17186,msg){
var map__17189 = p__17186;
var map__17189__$1 = cljs.core.__destructure_map(map__17189);
var runtime = map__17189__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17189__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17224,key,p__17225){
var map__17226 = p__17224;
var map__17226__$1 = cljs.core.__destructure_map(map__17226);
var state = map__17226__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17227 = p__17225;
var map__17227__$1 = cljs.core.__destructure_map(map__17227);
var spec = map__17227__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17227__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17238,key,spec){
var map__17240 = p__17238;
var map__17240__$1 = cljs.core.__destructure_map(map__17240);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17246_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17246_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17247_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17247_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17248_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17248_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17249_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17249_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17250_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17250_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17283,key){
var map__17284 = p__17283;
var map__17284__$1 = cljs.core.__destructure_map(map__17284);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17284__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17288,msg){
var map__17289 = p__17288;
var map__17289__$1 = cljs.core.__destructure_map(map__17289);
var runtime = map__17289__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17289__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17302,p__17303){
var map__17304 = p__17302;
var map__17304__$1 = cljs.core.__destructure_map(map__17304);
var runtime = map__17304__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17304__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17305 = p__17303;
var map__17305__$1 = cljs.core.__destructure_map(map__17305);
var msg = map__17305__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17328 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17330 = null;
var count__17331 = (0);
var i__17332 = (0);
while(true){
if((i__17332 < count__17331)){
var map__17347 = chunk__17330.cljs$core$IIndexed$_nth$arity$2(null,i__17332);
var map__17347__$1 = cljs.core.__destructure_map(map__17347);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17347__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17396 = seq__17328;
var G__17397 = chunk__17330;
var G__17398 = count__17331;
var G__17399 = (i__17332 + (1));
seq__17328 = G__17396;
chunk__17330 = G__17397;
count__17331 = G__17398;
i__17332 = G__17399;
continue;
} else {
var G__17400 = seq__17328;
var G__17401 = chunk__17330;
var G__17402 = count__17331;
var G__17403 = (i__17332 + (1));
seq__17328 = G__17400;
chunk__17330 = G__17401;
count__17331 = G__17402;
i__17332 = G__17403;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__17328);
if(temp__5753__auto__){
var seq__17328__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17328__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__17328__$1);
var G__17404 = cljs.core.chunk_rest(seq__17328__$1);
var G__17405 = c__4679__auto__;
var G__17406 = cljs.core.count(c__4679__auto__);
var G__17407 = (0);
seq__17328 = G__17404;
chunk__17330 = G__17405;
count__17331 = G__17406;
i__17332 = G__17407;
continue;
} else {
var map__17349 = cljs.core.first(seq__17328__$1);
var map__17349__$1 = cljs.core.__destructure_map(map__17349);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17349__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17408 = cljs.core.next(seq__17328__$1);
var G__17409 = null;
var G__17410 = (0);
var G__17411 = (0);
seq__17328 = G__17408;
chunk__17330 = G__17409;
count__17331 = G__17410;
i__17332 = G__17411;
continue;
} else {
var G__17412 = cljs.core.next(seq__17328__$1);
var G__17413 = null;
var G__17414 = (0);
var G__17415 = (0);
seq__17328 = G__17412;
chunk__17330 = G__17413;
count__17331 = G__17414;
i__17332 = G__17415;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
