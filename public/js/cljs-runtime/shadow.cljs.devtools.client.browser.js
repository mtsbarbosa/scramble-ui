goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22748 = arguments.length;
var i__4865__auto___22749 = (0);
while(true){
if((i__4865__auto___22749 < len__4864__auto___22748)){
args__4870__auto__.push((arguments[i__4865__auto___22749]));

var G__22750 = (i__4865__auto___22749 + (1));
i__4865__auto___22749 = G__22750;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22276){
var G__22278 = cljs.core.first(seq22276);
var seq22276__$1 = cljs.core.next(seq22276);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22278,seq22276__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22283 = cljs.core.seq(sources);
var chunk__22284 = null;
var count__22285 = (0);
var i__22286 = (0);
while(true){
if((i__22286 < count__22285)){
var map__22295 = chunk__22284.cljs$core$IIndexed$_nth$arity$2(null,i__22286);
var map__22295__$1 = cljs.core.__destructure_map(map__22295);
var src = map__22295__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22295__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22295__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22295__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22295__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22296){var e_22751 = e22296;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22751);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22751.message)].join('')));
}

var G__22752 = seq__22283;
var G__22753 = chunk__22284;
var G__22754 = count__22285;
var G__22755 = (i__22286 + (1));
seq__22283 = G__22752;
chunk__22284 = G__22753;
count__22285 = G__22754;
i__22286 = G__22755;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22283);
if(temp__5753__auto__){
var seq__22283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22283__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22283__$1);
var G__22756 = cljs.core.chunk_rest(seq__22283__$1);
var G__22757 = c__4679__auto__;
var G__22758 = cljs.core.count(c__4679__auto__);
var G__22759 = (0);
seq__22283 = G__22756;
chunk__22284 = G__22757;
count__22285 = G__22758;
i__22286 = G__22759;
continue;
} else {
var map__22298 = cljs.core.first(seq__22283__$1);
var map__22298__$1 = cljs.core.__destructure_map(map__22298);
var src = map__22298__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22300){var e_22760 = e22300;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22760);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22760.message)].join('')));
}

var G__22761 = cljs.core.next(seq__22283__$1);
var G__22762 = null;
var G__22763 = (0);
var G__22764 = (0);
seq__22283 = G__22761;
chunk__22284 = G__22762;
count__22285 = G__22763;
i__22286 = G__22764;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22302 = cljs.core.seq(js_requires);
var chunk__22303 = null;
var count__22304 = (0);
var i__22305 = (0);
while(true){
if((i__22305 < count__22304)){
var js_ns = chunk__22303.cljs$core$IIndexed$_nth$arity$2(null,i__22305);
var require_str_22765 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22765);


var G__22766 = seq__22302;
var G__22767 = chunk__22303;
var G__22768 = count__22304;
var G__22769 = (i__22305 + (1));
seq__22302 = G__22766;
chunk__22303 = G__22767;
count__22304 = G__22768;
i__22305 = G__22769;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22302);
if(temp__5753__auto__){
var seq__22302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22302__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22302__$1);
var G__22770 = cljs.core.chunk_rest(seq__22302__$1);
var G__22771 = c__4679__auto__;
var G__22772 = cljs.core.count(c__4679__auto__);
var G__22773 = (0);
seq__22302 = G__22770;
chunk__22303 = G__22771;
count__22304 = G__22772;
i__22305 = G__22773;
continue;
} else {
var js_ns = cljs.core.first(seq__22302__$1);
var require_str_22774 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22774);


var G__22775 = cljs.core.next(seq__22302__$1);
var G__22776 = null;
var G__22777 = (0);
var G__22778 = (0);
seq__22302 = G__22775;
chunk__22303 = G__22776;
count__22304 = G__22777;
i__22305 = G__22778;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22309){
var map__22310 = p__22309;
var map__22310__$1 = cljs.core.__destructure_map(map__22310);
var msg = map__22310__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22310__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22310__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22311(s__22312){
return (new cljs.core.LazySeq(null,(function (){
var s__22312__$1 = s__22312;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22312__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__22320 = cljs.core.first(xs__6308__auto__);
var map__22320__$1 = cljs.core.__destructure_map(map__22320);
var src = map__22320__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22320__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22320__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__22312__$1,map__22320,map__22320__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22310,map__22310__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22311_$_iter__22313(s__22314){
return (new cljs.core.LazySeq(null,((function (s__22312__$1,map__22320,map__22320__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22310,map__22310__$1,msg,info,reload_info){
return (function (){
var s__22314__$1 = s__22314;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__22314__$1);
if(temp__5753__auto____$1){
var s__22314__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22314__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22314__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22316 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22315 = (0);
while(true){
if((i__22315 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__22315);
cljs.core.chunk_append(b__22316,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22779 = (i__22315 + (1));
i__22315 = G__22779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22316),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22311_$_iter__22313(cljs.core.chunk_rest(s__22314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22316),null);
}
} else {
var warning = cljs.core.first(s__22314__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22311_$_iter__22313(cljs.core.rest(s__22314__$2)));
}
} else {
return null;
}
break;
}
});})(s__22312__$1,map__22320,map__22320__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22310,map__22310__$1,msg,info,reload_info))
,null,null));
});})(s__22312__$1,map__22320,map__22320__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__22310,map__22310__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22311(cljs.core.rest(s__22312__$1)));
} else {
var G__22780 = cljs.core.rest(s__22312__$1);
s__22312__$1 = G__22780;
continue;
}
} else {
var G__22781 = cljs.core.rest(s__22312__$1);
s__22312__$1 = G__22781;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22321_22782 = cljs.core.seq(warnings);
var chunk__22322_22783 = null;
var count__22323_22784 = (0);
var i__22324_22785 = (0);
while(true){
if((i__22324_22785 < count__22323_22784)){
var map__22327_22786 = chunk__22322_22783.cljs$core$IIndexed$_nth$arity$2(null,i__22324_22785);
var map__22327_22787__$1 = cljs.core.__destructure_map(map__22327_22786);
var w_22788 = map__22327_22787__$1;
var msg_22789__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327_22787__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327_22787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327_22787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327_22787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22792)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22790),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22791),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22789__$1)].join(''));


var G__22793 = seq__22321_22782;
var G__22794 = chunk__22322_22783;
var G__22795 = count__22323_22784;
var G__22796 = (i__22324_22785 + (1));
seq__22321_22782 = G__22793;
chunk__22322_22783 = G__22794;
count__22323_22784 = G__22795;
i__22324_22785 = G__22796;
continue;
} else {
var temp__5753__auto___22797 = cljs.core.seq(seq__22321_22782);
if(temp__5753__auto___22797){
var seq__22321_22798__$1 = temp__5753__auto___22797;
if(cljs.core.chunked_seq_QMARK_(seq__22321_22798__$1)){
var c__4679__auto___22799 = cljs.core.chunk_first(seq__22321_22798__$1);
var G__22800 = cljs.core.chunk_rest(seq__22321_22798__$1);
var G__22801 = c__4679__auto___22799;
var G__22802 = cljs.core.count(c__4679__auto___22799);
var G__22803 = (0);
seq__22321_22782 = G__22800;
chunk__22322_22783 = G__22801;
count__22323_22784 = G__22802;
i__22324_22785 = G__22803;
continue;
} else {
var map__22328_22804 = cljs.core.first(seq__22321_22798__$1);
var map__22328_22805__$1 = cljs.core.__destructure_map(map__22328_22804);
var w_22806 = map__22328_22805__$1;
var msg_22807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22328_22805__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22328_22805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22328_22805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22328_22805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22810)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22808),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22809),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22807__$1)].join(''));


var G__22811 = cljs.core.next(seq__22321_22798__$1);
var G__22812 = null;
var G__22813 = (0);
var G__22814 = (0);
seq__22321_22782 = G__22811;
chunk__22322_22783 = G__22812;
count__22323_22784 = G__22813;
i__22324_22785 = G__22814;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22308_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22308_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22349){
var map__22350 = p__22349;
var map__22350__$1 = cljs.core.__destructure_map(map__22350);
var msg = map__22350__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22353 = cljs.core.seq(updates);
var chunk__22355 = null;
var count__22356 = (0);
var i__22357 = (0);
while(true){
if((i__22357 < count__22356)){
var path = chunk__22355.cljs$core$IIndexed$_nth$arity$2(null,i__22357);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22569_22815 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22573_22816 = null;
var count__22574_22817 = (0);
var i__22575_22818 = (0);
while(true){
if((i__22575_22818 < count__22574_22817)){
var node_22819 = chunk__22573_22816.cljs$core$IIndexed$_nth$arity$2(null,i__22575_22818);
if(cljs.core.not(node_22819.shadow$old)){
var path_match_22820 = shadow.cljs.devtools.client.browser.match_paths(node_22819.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22820)){
var new_link_22821 = (function (){var G__22612 = node_22819.cloneNode(true);
G__22612.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22820),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22612;
})();
(node_22819.shadow$old = true);

(new_link_22821.onload = ((function (seq__22569_22815,chunk__22573_22816,count__22574_22817,i__22575_22818,seq__22353,chunk__22355,count__22356,i__22357,new_link_22821,path_match_22820,node_22819,path,map__22350,map__22350__$1,msg,updates,reload_info){
return (function (e){
var seq__22613_22822 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22615_22823 = null;
var count__22616_22824 = (0);
var i__22617_22825 = (0);
while(true){
if((i__22617_22825 < count__22616_22824)){
var map__22622_22826 = chunk__22615_22823.cljs$core$IIndexed$_nth$arity$2(null,i__22617_22825);
var map__22622_22827__$1 = cljs.core.__destructure_map(map__22622_22826);
var task_22828 = map__22622_22827__$1;
var fn_str_22829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622_22827__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622_22827__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22831 = goog.getObjectByName(fn_str_22829,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22830)].join(''));

(fn_obj_22831.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22831.cljs$core$IFn$_invoke$arity$2(path,new_link_22821) : fn_obj_22831.call(null,path,new_link_22821));


var G__22832 = seq__22613_22822;
var G__22833 = chunk__22615_22823;
var G__22834 = count__22616_22824;
var G__22835 = (i__22617_22825 + (1));
seq__22613_22822 = G__22832;
chunk__22615_22823 = G__22833;
count__22616_22824 = G__22834;
i__22617_22825 = G__22835;
continue;
} else {
var temp__5753__auto___22836 = cljs.core.seq(seq__22613_22822);
if(temp__5753__auto___22836){
var seq__22613_22837__$1 = temp__5753__auto___22836;
if(cljs.core.chunked_seq_QMARK_(seq__22613_22837__$1)){
var c__4679__auto___22838 = cljs.core.chunk_first(seq__22613_22837__$1);
var G__22839 = cljs.core.chunk_rest(seq__22613_22837__$1);
var G__22840 = c__4679__auto___22838;
var G__22841 = cljs.core.count(c__4679__auto___22838);
var G__22842 = (0);
seq__22613_22822 = G__22839;
chunk__22615_22823 = G__22840;
count__22616_22824 = G__22841;
i__22617_22825 = G__22842;
continue;
} else {
var map__22623_22843 = cljs.core.first(seq__22613_22837__$1);
var map__22623_22844__$1 = cljs.core.__destructure_map(map__22623_22843);
var task_22845 = map__22623_22844__$1;
var fn_str_22846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623_22844__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623_22844__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22848 = goog.getObjectByName(fn_str_22846,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22847)].join(''));

(fn_obj_22848.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22848.cljs$core$IFn$_invoke$arity$2(path,new_link_22821) : fn_obj_22848.call(null,path,new_link_22821));


var G__22849 = cljs.core.next(seq__22613_22837__$1);
var G__22850 = null;
var G__22851 = (0);
var G__22852 = (0);
seq__22613_22822 = G__22849;
chunk__22615_22823 = G__22850;
count__22616_22824 = G__22851;
i__22617_22825 = G__22852;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22819);
});})(seq__22569_22815,chunk__22573_22816,count__22574_22817,i__22575_22818,seq__22353,chunk__22355,count__22356,i__22357,new_link_22821,path_match_22820,node_22819,path,map__22350,map__22350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22820], 0));

goog.dom.insertSiblingAfter(new_link_22821,node_22819);


var G__22853 = seq__22569_22815;
var G__22854 = chunk__22573_22816;
var G__22855 = count__22574_22817;
var G__22856 = (i__22575_22818 + (1));
seq__22569_22815 = G__22853;
chunk__22573_22816 = G__22854;
count__22574_22817 = G__22855;
i__22575_22818 = G__22856;
continue;
} else {
var G__22857 = seq__22569_22815;
var G__22858 = chunk__22573_22816;
var G__22859 = count__22574_22817;
var G__22860 = (i__22575_22818 + (1));
seq__22569_22815 = G__22857;
chunk__22573_22816 = G__22858;
count__22574_22817 = G__22859;
i__22575_22818 = G__22860;
continue;
}
} else {
var G__22861 = seq__22569_22815;
var G__22862 = chunk__22573_22816;
var G__22863 = count__22574_22817;
var G__22864 = (i__22575_22818 + (1));
seq__22569_22815 = G__22861;
chunk__22573_22816 = G__22862;
count__22574_22817 = G__22863;
i__22575_22818 = G__22864;
continue;
}
} else {
var temp__5753__auto___22865 = cljs.core.seq(seq__22569_22815);
if(temp__5753__auto___22865){
var seq__22569_22866__$1 = temp__5753__auto___22865;
if(cljs.core.chunked_seq_QMARK_(seq__22569_22866__$1)){
var c__4679__auto___22867 = cljs.core.chunk_first(seq__22569_22866__$1);
var G__22868 = cljs.core.chunk_rest(seq__22569_22866__$1);
var G__22869 = c__4679__auto___22867;
var G__22870 = cljs.core.count(c__4679__auto___22867);
var G__22871 = (0);
seq__22569_22815 = G__22868;
chunk__22573_22816 = G__22869;
count__22574_22817 = G__22870;
i__22575_22818 = G__22871;
continue;
} else {
var node_22872 = cljs.core.first(seq__22569_22866__$1);
if(cljs.core.not(node_22872.shadow$old)){
var path_match_22873 = shadow.cljs.devtools.client.browser.match_paths(node_22872.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22873)){
var new_link_22874 = (function (){var G__22624 = node_22872.cloneNode(true);
G__22624.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22873),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22624;
})();
(node_22872.shadow$old = true);

(new_link_22874.onload = ((function (seq__22569_22815,chunk__22573_22816,count__22574_22817,i__22575_22818,seq__22353,chunk__22355,count__22356,i__22357,new_link_22874,path_match_22873,node_22872,seq__22569_22866__$1,temp__5753__auto___22865,path,map__22350,map__22350__$1,msg,updates,reload_info){
return (function (e){
var seq__22626_22875 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22628_22876 = null;
var count__22629_22877 = (0);
var i__22630_22878 = (0);
while(true){
if((i__22630_22878 < count__22629_22877)){
var map__22638_22879 = chunk__22628_22876.cljs$core$IIndexed$_nth$arity$2(null,i__22630_22878);
var map__22638_22880__$1 = cljs.core.__destructure_map(map__22638_22879);
var task_22881 = map__22638_22880__$1;
var fn_str_22882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638_22880__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638_22880__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22884 = goog.getObjectByName(fn_str_22882,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22883)].join(''));

(fn_obj_22884.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22884.cljs$core$IFn$_invoke$arity$2(path,new_link_22874) : fn_obj_22884.call(null,path,new_link_22874));


var G__22885 = seq__22626_22875;
var G__22886 = chunk__22628_22876;
var G__22887 = count__22629_22877;
var G__22888 = (i__22630_22878 + (1));
seq__22626_22875 = G__22885;
chunk__22628_22876 = G__22886;
count__22629_22877 = G__22887;
i__22630_22878 = G__22888;
continue;
} else {
var temp__5753__auto___22889__$1 = cljs.core.seq(seq__22626_22875);
if(temp__5753__auto___22889__$1){
var seq__22626_22890__$1 = temp__5753__auto___22889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22626_22890__$1)){
var c__4679__auto___22891 = cljs.core.chunk_first(seq__22626_22890__$1);
var G__22892 = cljs.core.chunk_rest(seq__22626_22890__$1);
var G__22893 = c__4679__auto___22891;
var G__22894 = cljs.core.count(c__4679__auto___22891);
var G__22895 = (0);
seq__22626_22875 = G__22892;
chunk__22628_22876 = G__22893;
count__22629_22877 = G__22894;
i__22630_22878 = G__22895;
continue;
} else {
var map__22640_22896 = cljs.core.first(seq__22626_22890__$1);
var map__22640_22897__$1 = cljs.core.__destructure_map(map__22640_22896);
var task_22898 = map__22640_22897__$1;
var fn_str_22899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22640_22897__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22640_22897__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22901 = goog.getObjectByName(fn_str_22899,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22900)].join(''));

(fn_obj_22901.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22901.cljs$core$IFn$_invoke$arity$2(path,new_link_22874) : fn_obj_22901.call(null,path,new_link_22874));


var G__22902 = cljs.core.next(seq__22626_22890__$1);
var G__22903 = null;
var G__22904 = (0);
var G__22905 = (0);
seq__22626_22875 = G__22902;
chunk__22628_22876 = G__22903;
count__22629_22877 = G__22904;
i__22630_22878 = G__22905;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22872);
});})(seq__22569_22815,chunk__22573_22816,count__22574_22817,i__22575_22818,seq__22353,chunk__22355,count__22356,i__22357,new_link_22874,path_match_22873,node_22872,seq__22569_22866__$1,temp__5753__auto___22865,path,map__22350,map__22350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22873], 0));

goog.dom.insertSiblingAfter(new_link_22874,node_22872);


var G__22906 = cljs.core.next(seq__22569_22866__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__22569_22815 = G__22906;
chunk__22573_22816 = G__22907;
count__22574_22817 = G__22908;
i__22575_22818 = G__22909;
continue;
} else {
var G__22910 = cljs.core.next(seq__22569_22866__$1);
var G__22911 = null;
var G__22912 = (0);
var G__22913 = (0);
seq__22569_22815 = G__22910;
chunk__22573_22816 = G__22911;
count__22574_22817 = G__22912;
i__22575_22818 = G__22913;
continue;
}
} else {
var G__22914 = cljs.core.next(seq__22569_22866__$1);
var G__22915 = null;
var G__22916 = (0);
var G__22917 = (0);
seq__22569_22815 = G__22914;
chunk__22573_22816 = G__22915;
count__22574_22817 = G__22916;
i__22575_22818 = G__22917;
continue;
}
}
} else {
}
}
break;
}


var G__22918 = seq__22353;
var G__22919 = chunk__22355;
var G__22920 = count__22356;
var G__22921 = (i__22357 + (1));
seq__22353 = G__22918;
chunk__22355 = G__22919;
count__22356 = G__22920;
i__22357 = G__22921;
continue;
} else {
var G__22922 = seq__22353;
var G__22923 = chunk__22355;
var G__22924 = count__22356;
var G__22925 = (i__22357 + (1));
seq__22353 = G__22922;
chunk__22355 = G__22923;
count__22356 = G__22924;
i__22357 = G__22925;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22353);
if(temp__5753__auto__){
var seq__22353__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22353__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22353__$1);
var G__22926 = cljs.core.chunk_rest(seq__22353__$1);
var G__22927 = c__4679__auto__;
var G__22928 = cljs.core.count(c__4679__auto__);
var G__22929 = (0);
seq__22353 = G__22926;
chunk__22355 = G__22927;
count__22356 = G__22928;
i__22357 = G__22929;
continue;
} else {
var path = cljs.core.first(seq__22353__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22642_22930 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22646_22931 = null;
var count__22647_22932 = (0);
var i__22648_22933 = (0);
while(true){
if((i__22648_22933 < count__22647_22932)){
var node_22934 = chunk__22646_22931.cljs$core$IIndexed$_nth$arity$2(null,i__22648_22933);
if(cljs.core.not(node_22934.shadow$old)){
var path_match_22935 = shadow.cljs.devtools.client.browser.match_paths(node_22934.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22935)){
var new_link_22936 = (function (){var G__22706 = node_22934.cloneNode(true);
G__22706.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22935),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22706;
})();
(node_22934.shadow$old = true);

(new_link_22936.onload = ((function (seq__22642_22930,chunk__22646_22931,count__22647_22932,i__22648_22933,seq__22353,chunk__22355,count__22356,i__22357,new_link_22936,path_match_22935,node_22934,path,seq__22353__$1,temp__5753__auto__,map__22350,map__22350__$1,msg,updates,reload_info){
return (function (e){
var seq__22707_22937 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22709_22938 = null;
var count__22710_22939 = (0);
var i__22711_22940 = (0);
while(true){
if((i__22711_22940 < count__22710_22939)){
var map__22715_22941 = chunk__22709_22938.cljs$core$IIndexed$_nth$arity$2(null,i__22711_22940);
var map__22715_22942__$1 = cljs.core.__destructure_map(map__22715_22941);
var task_22943 = map__22715_22942__$1;
var fn_str_22944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715_22942__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715_22942__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22946 = goog.getObjectByName(fn_str_22944,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22945)].join(''));

(fn_obj_22946.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22946.cljs$core$IFn$_invoke$arity$2(path,new_link_22936) : fn_obj_22946.call(null,path,new_link_22936));


var G__22947 = seq__22707_22937;
var G__22948 = chunk__22709_22938;
var G__22949 = count__22710_22939;
var G__22950 = (i__22711_22940 + (1));
seq__22707_22937 = G__22947;
chunk__22709_22938 = G__22948;
count__22710_22939 = G__22949;
i__22711_22940 = G__22950;
continue;
} else {
var temp__5753__auto___22951__$1 = cljs.core.seq(seq__22707_22937);
if(temp__5753__auto___22951__$1){
var seq__22707_22952__$1 = temp__5753__auto___22951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22707_22952__$1)){
var c__4679__auto___22953 = cljs.core.chunk_first(seq__22707_22952__$1);
var G__22954 = cljs.core.chunk_rest(seq__22707_22952__$1);
var G__22955 = c__4679__auto___22953;
var G__22956 = cljs.core.count(c__4679__auto___22953);
var G__22957 = (0);
seq__22707_22937 = G__22954;
chunk__22709_22938 = G__22955;
count__22710_22939 = G__22956;
i__22711_22940 = G__22957;
continue;
} else {
var map__22716_22958 = cljs.core.first(seq__22707_22952__$1);
var map__22716_22959__$1 = cljs.core.__destructure_map(map__22716_22958);
var task_22960 = map__22716_22959__$1;
var fn_str_22961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_22959__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_22959__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22963 = goog.getObjectByName(fn_str_22961,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22962)].join(''));

(fn_obj_22963.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22963.cljs$core$IFn$_invoke$arity$2(path,new_link_22936) : fn_obj_22963.call(null,path,new_link_22936));


var G__22964 = cljs.core.next(seq__22707_22952__$1);
var G__22965 = null;
var G__22966 = (0);
var G__22967 = (0);
seq__22707_22937 = G__22964;
chunk__22709_22938 = G__22965;
count__22710_22939 = G__22966;
i__22711_22940 = G__22967;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22934);
});})(seq__22642_22930,chunk__22646_22931,count__22647_22932,i__22648_22933,seq__22353,chunk__22355,count__22356,i__22357,new_link_22936,path_match_22935,node_22934,path,seq__22353__$1,temp__5753__auto__,map__22350,map__22350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22935], 0));

goog.dom.insertSiblingAfter(new_link_22936,node_22934);


var G__22968 = seq__22642_22930;
var G__22969 = chunk__22646_22931;
var G__22970 = count__22647_22932;
var G__22971 = (i__22648_22933 + (1));
seq__22642_22930 = G__22968;
chunk__22646_22931 = G__22969;
count__22647_22932 = G__22970;
i__22648_22933 = G__22971;
continue;
} else {
var G__22972 = seq__22642_22930;
var G__22973 = chunk__22646_22931;
var G__22974 = count__22647_22932;
var G__22975 = (i__22648_22933 + (1));
seq__22642_22930 = G__22972;
chunk__22646_22931 = G__22973;
count__22647_22932 = G__22974;
i__22648_22933 = G__22975;
continue;
}
} else {
var G__22976 = seq__22642_22930;
var G__22977 = chunk__22646_22931;
var G__22978 = count__22647_22932;
var G__22979 = (i__22648_22933 + (1));
seq__22642_22930 = G__22976;
chunk__22646_22931 = G__22977;
count__22647_22932 = G__22978;
i__22648_22933 = G__22979;
continue;
}
} else {
var temp__5753__auto___22980__$1 = cljs.core.seq(seq__22642_22930);
if(temp__5753__auto___22980__$1){
var seq__22642_22981__$1 = temp__5753__auto___22980__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22642_22981__$1)){
var c__4679__auto___22982 = cljs.core.chunk_first(seq__22642_22981__$1);
var G__22983 = cljs.core.chunk_rest(seq__22642_22981__$1);
var G__22984 = c__4679__auto___22982;
var G__22985 = cljs.core.count(c__4679__auto___22982);
var G__22986 = (0);
seq__22642_22930 = G__22983;
chunk__22646_22931 = G__22984;
count__22647_22932 = G__22985;
i__22648_22933 = G__22986;
continue;
} else {
var node_22987 = cljs.core.first(seq__22642_22981__$1);
if(cljs.core.not(node_22987.shadow$old)){
var path_match_22988 = shadow.cljs.devtools.client.browser.match_paths(node_22987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22988)){
var new_link_22989 = (function (){var G__22717 = node_22987.cloneNode(true);
G__22717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22717;
})();
(node_22987.shadow$old = true);

(new_link_22989.onload = ((function (seq__22642_22930,chunk__22646_22931,count__22647_22932,i__22648_22933,seq__22353,chunk__22355,count__22356,i__22357,new_link_22989,path_match_22988,node_22987,seq__22642_22981__$1,temp__5753__auto___22980__$1,path,seq__22353__$1,temp__5753__auto__,map__22350,map__22350__$1,msg,updates,reload_info){
return (function (e){
var seq__22718_22990 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22720_22991 = null;
var count__22721_22992 = (0);
var i__22722_22993 = (0);
while(true){
if((i__22722_22993 < count__22721_22992)){
var map__22726_22994 = chunk__22720_22991.cljs$core$IIndexed$_nth$arity$2(null,i__22722_22993);
var map__22726_22995__$1 = cljs.core.__destructure_map(map__22726_22994);
var task_22996 = map__22726_22995__$1;
var fn_str_22997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726_22995__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726_22995__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22999 = goog.getObjectByName(fn_str_22997,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22998)].join(''));

(fn_obj_22999.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22999.cljs$core$IFn$_invoke$arity$2(path,new_link_22989) : fn_obj_22999.call(null,path,new_link_22989));


var G__23000 = seq__22718_22990;
var G__23001 = chunk__22720_22991;
var G__23002 = count__22721_22992;
var G__23003 = (i__22722_22993 + (1));
seq__22718_22990 = G__23000;
chunk__22720_22991 = G__23001;
count__22721_22992 = G__23002;
i__22722_22993 = G__23003;
continue;
} else {
var temp__5753__auto___23004__$2 = cljs.core.seq(seq__22718_22990);
if(temp__5753__auto___23004__$2){
var seq__22718_23005__$1 = temp__5753__auto___23004__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22718_23005__$1)){
var c__4679__auto___23006 = cljs.core.chunk_first(seq__22718_23005__$1);
var G__23007 = cljs.core.chunk_rest(seq__22718_23005__$1);
var G__23008 = c__4679__auto___23006;
var G__23009 = cljs.core.count(c__4679__auto___23006);
var G__23010 = (0);
seq__22718_22990 = G__23007;
chunk__22720_22991 = G__23008;
count__22721_22992 = G__23009;
i__22722_22993 = G__23010;
continue;
} else {
var map__22727_23011 = cljs.core.first(seq__22718_23005__$1);
var map__22727_23012__$1 = cljs.core.__destructure_map(map__22727_23011);
var task_23013 = map__22727_23012__$1;
var fn_str_23014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727_23012__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727_23012__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23016 = goog.getObjectByName(fn_str_23014,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23015)].join(''));

(fn_obj_23016.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23016.cljs$core$IFn$_invoke$arity$2(path,new_link_22989) : fn_obj_23016.call(null,path,new_link_22989));


var G__23017 = cljs.core.next(seq__22718_23005__$1);
var G__23018 = null;
var G__23019 = (0);
var G__23020 = (0);
seq__22718_22990 = G__23017;
chunk__22720_22991 = G__23018;
count__22721_22992 = G__23019;
i__22722_22993 = G__23020;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22987);
});})(seq__22642_22930,chunk__22646_22931,count__22647_22932,i__22648_22933,seq__22353,chunk__22355,count__22356,i__22357,new_link_22989,path_match_22988,node_22987,seq__22642_22981__$1,temp__5753__auto___22980__$1,path,seq__22353__$1,temp__5753__auto__,map__22350,map__22350__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22988], 0));

goog.dom.insertSiblingAfter(new_link_22989,node_22987);


var G__23021 = cljs.core.next(seq__22642_22981__$1);
var G__23022 = null;
var G__23023 = (0);
var G__23024 = (0);
seq__22642_22930 = G__23021;
chunk__22646_22931 = G__23022;
count__22647_22932 = G__23023;
i__22648_22933 = G__23024;
continue;
} else {
var G__23025 = cljs.core.next(seq__22642_22981__$1);
var G__23026 = null;
var G__23027 = (0);
var G__23028 = (0);
seq__22642_22930 = G__23025;
chunk__22646_22931 = G__23026;
count__22647_22932 = G__23027;
i__22648_22933 = G__23028;
continue;
}
} else {
var G__23029 = cljs.core.next(seq__22642_22981__$1);
var G__23030 = null;
var G__23031 = (0);
var G__23032 = (0);
seq__22642_22930 = G__23029;
chunk__22646_22931 = G__23030;
count__22647_22932 = G__23031;
i__22648_22933 = G__23032;
continue;
}
}
} else {
}
}
break;
}


var G__23033 = cljs.core.next(seq__22353__$1);
var G__23034 = null;
var G__23035 = (0);
var G__23036 = (0);
seq__22353 = G__23033;
chunk__22355 = G__23034;
count__22356 = G__23035;
i__22357 = G__23036;
continue;
} else {
var G__23037 = cljs.core.next(seq__22353__$1);
var G__23038 = null;
var G__23039 = (0);
var G__23040 = (0);
seq__22353 = G__23037;
chunk__22355 = G__23038;
count__22356 = G__23039;
i__22357 = G__23040;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22728){
var map__22729 = p__22728;
var map__22729__$1 = cljs.core.__destructure_map(map__22729);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22729__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22730){
var map__22731 = p__22730;
var map__22731__$1 = cljs.core.__destructure_map(map__22731);
var _ = map__22731__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22731__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22732,done,error){
var map__22733 = p__22732;
var map__22733__$1 = cljs.core.__destructure_map(map__22733);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22733__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22734,done,error){
var map__22735 = p__22734;
var map__22735__$1 = cljs.core.__destructure_map(map__22735);
var msg = map__22735__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22736){
var map__22737 = p__22736;
var map__22737__$1 = cljs.core.__destructure_map(map__22737);
var src = map__22737__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22737__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22738 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22738) : done.call(null,G__22738));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22739){
var map__22740 = p__22739;
var map__22740__$1 = cljs.core.__destructure_map(map__22740);
var msg__$1 = map__22740__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22741){var ex = e22741;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22742){
var map__22743 = p__22742;
var map__22743__$1 = cljs.core.__destructure_map(map__22743);
var env = map__22743__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22744){
var map__22745 = p__22744;
var map__22745__$1 = cljs.core.__destructure_map(map__22745);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22745__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22745__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22746){
var map__22747 = p__22746;
var map__22747__$1 = cljs.core.__destructure_map(map__22747);
var svc = map__22747__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22747__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
