goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20834 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20834(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20838 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20838(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19572 = coll;
var G__19573 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19572,G__19573) : shadow.dom.lazy_native_coll_seq.call(null,G__19572,G__19573));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19608 = arguments.length;
switch (G__19608) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19621 = arguments.length;
switch (G__19621) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19630 = arguments.length;
switch (G__19630) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19641 = arguments.length;
switch (G__19641) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19654 = arguments.length;
switch (G__19654) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19668 = arguments.length;
switch (G__19668) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19681){if((e19681 instanceof Object)){
var e = e19681;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19681;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19689 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19690 = null;
var count__19691 = (0);
var i__19692 = (0);
while(true){
if((i__19692 < count__19691)){
var el = chunk__19690.cljs$core$IIndexed$_nth$arity$2(null,i__19692);
var handler_20883__$1 = ((function (seq__19689,chunk__19690,count__19691,i__19692,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19689,chunk__19690,count__19691,i__19692,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20883__$1);


var G__20885 = seq__19689;
var G__20886 = chunk__19690;
var G__20887 = count__19691;
var G__20888 = (i__19692 + (1));
seq__19689 = G__20885;
chunk__19690 = G__20886;
count__19691 = G__20887;
i__19692 = G__20888;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19689);
if(temp__5753__auto__){
var seq__19689__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19689__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19689__$1);
var G__20889 = cljs.core.chunk_rest(seq__19689__$1);
var G__20890 = c__4679__auto__;
var G__20891 = cljs.core.count(c__4679__auto__);
var G__20892 = (0);
seq__19689 = G__20889;
chunk__19690 = G__20890;
count__19691 = G__20891;
i__19692 = G__20892;
continue;
} else {
var el = cljs.core.first(seq__19689__$1);
var handler_20893__$1 = ((function (seq__19689,chunk__19690,count__19691,i__19692,el,seq__19689__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19689,chunk__19690,count__19691,i__19692,el,seq__19689__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20893__$1);


var G__20895 = cljs.core.next(seq__19689__$1);
var G__20896 = null;
var G__20897 = (0);
var G__20898 = (0);
seq__19689 = G__20895;
chunk__19690 = G__20896;
count__19691 = G__20897;
i__19692 = G__20898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19714 = arguments.length;
switch (G__19714) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19735 = cljs.core.seq(events);
var chunk__19736 = null;
var count__19737 = (0);
var i__19738 = (0);
while(true){
if((i__19738 < count__19737)){
var vec__19750 = chunk__19736.cljs$core$IIndexed$_nth$arity$2(null,i__19738);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19750,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20905 = seq__19735;
var G__20906 = chunk__19736;
var G__20907 = count__19737;
var G__20908 = (i__19738 + (1));
seq__19735 = G__20905;
chunk__19736 = G__20906;
count__19737 = G__20907;
i__19738 = G__20908;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19735);
if(temp__5753__auto__){
var seq__19735__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19735__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19735__$1);
var G__20913 = cljs.core.chunk_rest(seq__19735__$1);
var G__20914 = c__4679__auto__;
var G__20915 = cljs.core.count(c__4679__auto__);
var G__20916 = (0);
seq__19735 = G__20913;
chunk__19736 = G__20914;
count__19737 = G__20915;
i__19738 = G__20916;
continue;
} else {
var vec__19760 = cljs.core.first(seq__19735__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19760,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20917 = cljs.core.next(seq__19735__$1);
var G__20918 = null;
var G__20919 = (0);
var G__20920 = (0);
seq__19735 = G__20917;
chunk__19736 = G__20918;
count__19737 = G__20919;
i__19738 = G__20920;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19769 = cljs.core.seq(styles);
var chunk__19770 = null;
var count__19771 = (0);
var i__19772 = (0);
while(true){
if((i__19772 < count__19771)){
var vec__19791 = chunk__19770.cljs$core$IIndexed$_nth$arity$2(null,i__19772);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19791,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20926 = seq__19769;
var G__20927 = chunk__19770;
var G__20928 = count__19771;
var G__20929 = (i__19772 + (1));
seq__19769 = G__20926;
chunk__19770 = G__20927;
count__19771 = G__20928;
i__19772 = G__20929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19769);
if(temp__5753__auto__){
var seq__19769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19769__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19769__$1);
var G__20932 = cljs.core.chunk_rest(seq__19769__$1);
var G__20933 = c__4679__auto__;
var G__20934 = cljs.core.count(c__4679__auto__);
var G__20935 = (0);
seq__19769 = G__20932;
chunk__19770 = G__20933;
count__19771 = G__20934;
i__19772 = G__20935;
continue;
} else {
var vec__19795 = cljs.core.first(seq__19769__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19795,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20938 = cljs.core.next(seq__19769__$1);
var G__20939 = null;
var G__20940 = (0);
var G__20941 = (0);
seq__19769 = G__20938;
chunk__19770 = G__20939;
count__19771 = G__20940;
i__19772 = G__20941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19801_20944 = key;
var G__19801_20945__$1 = (((G__19801_20944 instanceof cljs.core.Keyword))?G__19801_20944.fqn:null);
switch (G__19801_20945__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20948 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_20948,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_20948,"aria-");
}
})())){
el.setAttribute(ks_20948,value);
} else {
(el[ks_20948] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19861){
var map__19862 = p__19861;
var map__19862__$1 = cljs.core.__destructure_map(map__19862);
var props = map__19862__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19864 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19864,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19864,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19864,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19869 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19869,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19869;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19876 = arguments.length;
switch (G__19876) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19908){
var vec__19911 = p__19908;
var seq__19912 = cljs.core.seq(vec__19911);
var first__19913 = cljs.core.first(seq__19912);
var seq__19912__$1 = cljs.core.next(seq__19912);
var nn = first__19913;
var first__19913__$1 = cljs.core.first(seq__19912__$1);
var seq__19912__$2 = cljs.core.next(seq__19912__$1);
var np = first__19913__$1;
var nc = seq__19912__$2;
var node = vec__19911;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19934 = nn;
var G__19935 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19934,G__19935) : create_fn.call(null,G__19934,G__19935));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19942 = nn;
var G__19943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19942,G__19943) : create_fn.call(null,G__19942,G__19943));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19972 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(1),null);
var seq__19975_20976 = cljs.core.seq(node_children);
var chunk__19976_20977 = null;
var count__19977_20978 = (0);
var i__19978_20979 = (0);
while(true){
if((i__19978_20979 < count__19977_20978)){
var child_struct_20981 = chunk__19976_20977.cljs$core$IIndexed$_nth$arity$2(null,i__19978_20979);
var children_20982 = shadow.dom.dom_node(child_struct_20981);
if(cljs.core.seq_QMARK_(children_20982)){
var seq__20066_20983 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20982));
var chunk__20068_20984 = null;
var count__20069_20985 = (0);
var i__20070_20986 = (0);
while(true){
if((i__20070_20986 < count__20069_20985)){
var child_20987 = chunk__20068_20984.cljs$core$IIndexed$_nth$arity$2(null,i__20070_20986);
if(cljs.core.truth_(child_20987)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20987);


var G__20988 = seq__20066_20983;
var G__20989 = chunk__20068_20984;
var G__20990 = count__20069_20985;
var G__20991 = (i__20070_20986 + (1));
seq__20066_20983 = G__20988;
chunk__20068_20984 = G__20989;
count__20069_20985 = G__20990;
i__20070_20986 = G__20991;
continue;
} else {
var G__20992 = seq__20066_20983;
var G__20993 = chunk__20068_20984;
var G__20994 = count__20069_20985;
var G__20995 = (i__20070_20986 + (1));
seq__20066_20983 = G__20992;
chunk__20068_20984 = G__20993;
count__20069_20985 = G__20994;
i__20070_20986 = G__20995;
continue;
}
} else {
var temp__5753__auto___20996 = cljs.core.seq(seq__20066_20983);
if(temp__5753__auto___20996){
var seq__20066_20997__$1 = temp__5753__auto___20996;
if(cljs.core.chunked_seq_QMARK_(seq__20066_20997__$1)){
var c__4679__auto___21000 = cljs.core.chunk_first(seq__20066_20997__$1);
var G__21001 = cljs.core.chunk_rest(seq__20066_20997__$1);
var G__21002 = c__4679__auto___21000;
var G__21003 = cljs.core.count(c__4679__auto___21000);
var G__21004 = (0);
seq__20066_20983 = G__21001;
chunk__20068_20984 = G__21002;
count__20069_20985 = G__21003;
i__20070_20986 = G__21004;
continue;
} else {
var child_21005 = cljs.core.first(seq__20066_20997__$1);
if(cljs.core.truth_(child_21005)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21005);


var G__21006 = cljs.core.next(seq__20066_20997__$1);
var G__21007 = null;
var G__21008 = (0);
var G__21009 = (0);
seq__20066_20983 = G__21006;
chunk__20068_20984 = G__21007;
count__20069_20985 = G__21008;
i__20070_20986 = G__21009;
continue;
} else {
var G__21011 = cljs.core.next(seq__20066_20997__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20066_20983 = G__21011;
chunk__20068_20984 = G__21012;
count__20069_20985 = G__21013;
i__20070_20986 = G__21014;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20982);
}


var G__21016 = seq__19975_20976;
var G__21017 = chunk__19976_20977;
var G__21018 = count__19977_20978;
var G__21019 = (i__19978_20979 + (1));
seq__19975_20976 = G__21016;
chunk__19976_20977 = G__21017;
count__19977_20978 = G__21018;
i__19978_20979 = G__21019;
continue;
} else {
var temp__5753__auto___21020 = cljs.core.seq(seq__19975_20976);
if(temp__5753__auto___21020){
var seq__19975_21021__$1 = temp__5753__auto___21020;
if(cljs.core.chunked_seq_QMARK_(seq__19975_21021__$1)){
var c__4679__auto___21022 = cljs.core.chunk_first(seq__19975_21021__$1);
var G__21023 = cljs.core.chunk_rest(seq__19975_21021__$1);
var G__21024 = c__4679__auto___21022;
var G__21025 = cljs.core.count(c__4679__auto___21022);
var G__21026 = (0);
seq__19975_20976 = G__21023;
chunk__19976_20977 = G__21024;
count__19977_20978 = G__21025;
i__19978_20979 = G__21026;
continue;
} else {
var child_struct_21027 = cljs.core.first(seq__19975_21021__$1);
var children_21028 = shadow.dom.dom_node(child_struct_21027);
if(cljs.core.seq_QMARK_(children_21028)){
var seq__20106_21029 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21028));
var chunk__20108_21030 = null;
var count__20109_21031 = (0);
var i__20110_21032 = (0);
while(true){
if((i__20110_21032 < count__20109_21031)){
var child_21033 = chunk__20108_21030.cljs$core$IIndexed$_nth$arity$2(null,i__20110_21032);
if(cljs.core.truth_(child_21033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21033);


var G__21034 = seq__20106_21029;
var G__21035 = chunk__20108_21030;
var G__21036 = count__20109_21031;
var G__21037 = (i__20110_21032 + (1));
seq__20106_21029 = G__21034;
chunk__20108_21030 = G__21035;
count__20109_21031 = G__21036;
i__20110_21032 = G__21037;
continue;
} else {
var G__21038 = seq__20106_21029;
var G__21039 = chunk__20108_21030;
var G__21040 = count__20109_21031;
var G__21041 = (i__20110_21032 + (1));
seq__20106_21029 = G__21038;
chunk__20108_21030 = G__21039;
count__20109_21031 = G__21040;
i__20110_21032 = G__21041;
continue;
}
} else {
var temp__5753__auto___21044__$1 = cljs.core.seq(seq__20106_21029);
if(temp__5753__auto___21044__$1){
var seq__20106_21045__$1 = temp__5753__auto___21044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20106_21045__$1)){
var c__4679__auto___21046 = cljs.core.chunk_first(seq__20106_21045__$1);
var G__21047 = cljs.core.chunk_rest(seq__20106_21045__$1);
var G__21048 = c__4679__auto___21046;
var G__21049 = cljs.core.count(c__4679__auto___21046);
var G__21050 = (0);
seq__20106_21029 = G__21047;
chunk__20108_21030 = G__21048;
count__20109_21031 = G__21049;
i__20110_21032 = G__21050;
continue;
} else {
var child_21051 = cljs.core.first(seq__20106_21045__$1);
if(cljs.core.truth_(child_21051)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21051);


var G__21052 = cljs.core.next(seq__20106_21045__$1);
var G__21053 = null;
var G__21054 = (0);
var G__21055 = (0);
seq__20106_21029 = G__21052;
chunk__20108_21030 = G__21053;
count__20109_21031 = G__21054;
i__20110_21032 = G__21055;
continue;
} else {
var G__21056 = cljs.core.next(seq__20106_21045__$1);
var G__21057 = null;
var G__21058 = (0);
var G__21059 = (0);
seq__20106_21029 = G__21056;
chunk__20108_21030 = G__21057;
count__20109_21031 = G__21058;
i__20110_21032 = G__21059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21028);
}


var G__21061 = cljs.core.next(seq__19975_21021__$1);
var G__21062 = null;
var G__21063 = (0);
var G__21064 = (0);
seq__19975_20976 = G__21061;
chunk__19976_20977 = G__21062;
count__19977_20978 = G__21063;
i__19978_20979 = G__21064;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20216 = cljs.core.seq(node);
var chunk__20217 = null;
var count__20218 = (0);
var i__20219 = (0);
while(true){
if((i__20219 < count__20218)){
var n = chunk__20217.cljs$core$IIndexed$_nth$arity$2(null,i__20219);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21072 = seq__20216;
var G__21073 = chunk__20217;
var G__21074 = count__20218;
var G__21075 = (i__20219 + (1));
seq__20216 = G__21072;
chunk__20217 = G__21073;
count__20218 = G__21074;
i__20219 = G__21075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20216);
if(temp__5753__auto__){
var seq__20216__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20216__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20216__$1);
var G__21076 = cljs.core.chunk_rest(seq__20216__$1);
var G__21077 = c__4679__auto__;
var G__21078 = cljs.core.count(c__4679__auto__);
var G__21079 = (0);
seq__20216 = G__21076;
chunk__20217 = G__21077;
count__20218 = G__21078;
i__20219 = G__21079;
continue;
} else {
var n = cljs.core.first(seq__20216__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21080 = cljs.core.next(seq__20216__$1);
var G__21081 = null;
var G__21082 = (0);
var G__21083 = (0);
seq__20216 = G__21080;
chunk__20217 = G__21081;
count__20218 = G__21082;
i__20219 = G__21083;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20251 = arguments.length;
switch (G__20251) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20257 = arguments.length;
switch (G__20257) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20285 = arguments.length;
switch (G__20285) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21093 = arguments.length;
var i__4865__auto___21094 = (0);
while(true){
if((i__4865__auto___21094 < len__4864__auto___21093)){
args__4870__auto__.push((arguments[i__4865__auto___21094]));

var G__21095 = (i__4865__auto___21094 + (1));
i__4865__auto___21094 = G__21095;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20310_21096 = cljs.core.seq(nodes);
var chunk__20311_21097 = null;
var count__20312_21098 = (0);
var i__20313_21099 = (0);
while(true){
if((i__20313_21099 < count__20312_21098)){
var node_21100 = chunk__20311_21097.cljs$core$IIndexed$_nth$arity$2(null,i__20313_21099);
fragment.appendChild(shadow.dom._to_dom(node_21100));


var G__21101 = seq__20310_21096;
var G__21102 = chunk__20311_21097;
var G__21103 = count__20312_21098;
var G__21104 = (i__20313_21099 + (1));
seq__20310_21096 = G__21101;
chunk__20311_21097 = G__21102;
count__20312_21098 = G__21103;
i__20313_21099 = G__21104;
continue;
} else {
var temp__5753__auto___21105 = cljs.core.seq(seq__20310_21096);
if(temp__5753__auto___21105){
var seq__20310_21106__$1 = temp__5753__auto___21105;
if(cljs.core.chunked_seq_QMARK_(seq__20310_21106__$1)){
var c__4679__auto___21107 = cljs.core.chunk_first(seq__20310_21106__$1);
var G__21108 = cljs.core.chunk_rest(seq__20310_21106__$1);
var G__21109 = c__4679__auto___21107;
var G__21110 = cljs.core.count(c__4679__auto___21107);
var G__21111 = (0);
seq__20310_21096 = G__21108;
chunk__20311_21097 = G__21109;
count__20312_21098 = G__21110;
i__20313_21099 = G__21111;
continue;
} else {
var node_21112 = cljs.core.first(seq__20310_21106__$1);
fragment.appendChild(shadow.dom._to_dom(node_21112));


var G__21113 = cljs.core.next(seq__20310_21106__$1);
var G__21114 = null;
var G__21115 = (0);
var G__21116 = (0);
seq__20310_21096 = G__21113;
chunk__20311_21097 = G__21114;
count__20312_21098 = G__21115;
i__20313_21099 = G__21116;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20306){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20306));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20327_21119 = cljs.core.seq(scripts);
var chunk__20328_21120 = null;
var count__20329_21121 = (0);
var i__20330_21122 = (0);
while(true){
if((i__20330_21122 < count__20329_21121)){
var vec__20344_21123 = chunk__20328_21120.cljs$core$IIndexed$_nth$arity$2(null,i__20330_21122);
var script_tag_21124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20344_21123,(0),null);
var script_body_21125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20344_21123,(1),null);
eval(script_body_21125);


var G__21127 = seq__20327_21119;
var G__21128 = chunk__20328_21120;
var G__21129 = count__20329_21121;
var G__21130 = (i__20330_21122 + (1));
seq__20327_21119 = G__21127;
chunk__20328_21120 = G__21128;
count__20329_21121 = G__21129;
i__20330_21122 = G__21130;
continue;
} else {
var temp__5753__auto___21131 = cljs.core.seq(seq__20327_21119);
if(temp__5753__auto___21131){
var seq__20327_21132__$1 = temp__5753__auto___21131;
if(cljs.core.chunked_seq_QMARK_(seq__20327_21132__$1)){
var c__4679__auto___21134 = cljs.core.chunk_first(seq__20327_21132__$1);
var G__21135 = cljs.core.chunk_rest(seq__20327_21132__$1);
var G__21136 = c__4679__auto___21134;
var G__21137 = cljs.core.count(c__4679__auto___21134);
var G__21138 = (0);
seq__20327_21119 = G__21135;
chunk__20328_21120 = G__21136;
count__20329_21121 = G__21137;
i__20330_21122 = G__21138;
continue;
} else {
var vec__20349_21139 = cljs.core.first(seq__20327_21132__$1);
var script_tag_21140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349_21139,(0),null);
var script_body_21141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349_21139,(1),null);
eval(script_body_21141);


var G__21142 = cljs.core.next(seq__20327_21132__$1);
var G__21143 = null;
var G__21144 = (0);
var G__21145 = (0);
seq__20327_21119 = G__21142;
chunk__20328_21120 = G__21143;
count__20329_21121 = G__21144;
i__20330_21122 = G__21145;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20354){
var vec__20355 = p__20354;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20366 = arguments.length;
switch (G__20366) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20394 = cljs.core.seq(style_keys);
var chunk__20395 = null;
var count__20396 = (0);
var i__20397 = (0);
while(true){
if((i__20397 < count__20396)){
var it = chunk__20395.cljs$core$IIndexed$_nth$arity$2(null,i__20397);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21150 = seq__20394;
var G__21151 = chunk__20395;
var G__21152 = count__20396;
var G__21153 = (i__20397 + (1));
seq__20394 = G__21150;
chunk__20395 = G__21151;
count__20396 = G__21152;
i__20397 = G__21153;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20394);
if(temp__5753__auto__){
var seq__20394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20394__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20394__$1);
var G__21154 = cljs.core.chunk_rest(seq__20394__$1);
var G__21155 = c__4679__auto__;
var G__21156 = cljs.core.count(c__4679__auto__);
var G__21157 = (0);
seq__20394 = G__21154;
chunk__20395 = G__21155;
count__20396 = G__21156;
i__20397 = G__21157;
continue;
} else {
var it = cljs.core.first(seq__20394__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21158 = cljs.core.next(seq__20394__$1);
var G__21159 = null;
var G__21160 = (0);
var G__21161 = (0);
seq__20394 = G__21158;
chunk__20395 = G__21159;
count__20396 = G__21160;
i__20397 = G__21161;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k20408,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__20425 = k20408;
var G__20425__$1 = (((G__20425 instanceof cljs.core.Keyword))?G__20425.fqn:null);
switch (G__20425__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20408,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__20432){
var vec__20433 = p__20432;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20407){
var self__ = this;
var G__20407__$1 = this;
return (new cljs.core.RecordIter((0),G__20407__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20410,other20411){
var self__ = this;
var this20410__$1 = this;
return (((!((other20411 == null)))) && ((((this20410__$1.constructor === other20411.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20410__$1.x,other20411.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20410__$1.y,other20411.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20410__$1.__extmap,other20411.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k20408){
var self__ = this;
var this__4509__auto____$1 = this;
var G__20454 = k20408;
var G__20454__$1 = (((G__20454 instanceof cljs.core.Keyword))?G__20454.fqn:null);
switch (G__20454__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20408);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__20407){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__20456 = cljs.core.keyword_identical_QMARK_;
var expr__20457 = k__4511__auto__;
if(cljs.core.truth_((pred__20456.cljs$core$IFn$_invoke$arity$2 ? pred__20456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20457) : pred__20456.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20457)))){
return (new shadow.dom.Coordinate(G__20407,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20456.cljs$core$IFn$_invoke$arity$2 ? pred__20456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20457) : pred__20456.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20457)))){
return (new shadow.dom.Coordinate(self__.x,G__20407,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__20407),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__20407){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20407,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20414){
var extmap__4542__auto__ = (function (){var G__20477 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20414,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20414)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20477);
} else {
return G__20477;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20414),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20414),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k20496,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__20508 = k20496;
var G__20508__$1 = (((G__20508 instanceof cljs.core.Keyword))?G__20508.fqn:null);
switch (G__20508__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20496,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__20510){
var vec__20511 = p__20510;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20511,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20511,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20495){
var self__ = this;
var G__20495__$1 = this;
return (new cljs.core.RecordIter((0),G__20495__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20497,other20498){
var self__ = this;
var this20497__$1 = this;
return (((!((other20498 == null)))) && ((((this20497__$1.constructor === other20498.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20497__$1.w,other20498.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20497__$1.h,other20498.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20497__$1.__extmap,other20498.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k20496){
var self__ = this;
var this__4509__auto____$1 = this;
var G__20539 = k20496;
var G__20539__$1 = (((G__20539 instanceof cljs.core.Keyword))?G__20539.fqn:null);
switch (G__20539__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20496);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__20495){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__20544 = cljs.core.keyword_identical_QMARK_;
var expr__20545 = k__4511__auto__;
if(cljs.core.truth_((pred__20544.cljs$core$IFn$_invoke$arity$2 ? pred__20544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20545) : pred__20544.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20545)))){
return (new shadow.dom.Size(G__20495,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20544.cljs$core$IFn$_invoke$arity$2 ? pred__20544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20545) : pred__20544.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20545)))){
return (new shadow.dom.Size(self__.w,G__20495,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__20495),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__20495){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20495,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20501){
var extmap__4542__auto__ = (function (){var G__20567 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20501,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20501)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20567);
} else {
return G__20567;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20501),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20501),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__21187 = (i + (1));
var G__21188 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21187;
ret = G__21188;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20608){
var vec__20610 = p__20608;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20620 = arguments.length;
switch (G__20620) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21192 = ps;
var G__21193 = (i + (1));
el__$1 = G__21192;
i = G__21193;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20660 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20663_21201 = cljs.core.seq(props);
var chunk__20664_21202 = null;
var count__20665_21203 = (0);
var i__20666_21204 = (0);
while(true){
if((i__20666_21204 < count__20665_21203)){
var vec__20674_21207 = chunk__20664_21202.cljs$core$IIndexed$_nth$arity$2(null,i__20666_21204);
var k_21208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20674_21207,(0),null);
var v_21209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20674_21207,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_21208);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21208),v_21209);


var G__21211 = seq__20663_21201;
var G__21212 = chunk__20664_21202;
var G__21213 = count__20665_21203;
var G__21214 = (i__20666_21204 + (1));
seq__20663_21201 = G__21211;
chunk__20664_21202 = G__21212;
count__20665_21203 = G__21213;
i__20666_21204 = G__21214;
continue;
} else {
var temp__5753__auto___21215 = cljs.core.seq(seq__20663_21201);
if(temp__5753__auto___21215){
var seq__20663_21216__$1 = temp__5753__auto___21215;
if(cljs.core.chunked_seq_QMARK_(seq__20663_21216__$1)){
var c__4679__auto___21218 = cljs.core.chunk_first(seq__20663_21216__$1);
var G__21219 = cljs.core.chunk_rest(seq__20663_21216__$1);
var G__21220 = c__4679__auto___21218;
var G__21221 = cljs.core.count(c__4679__auto___21218);
var G__21222 = (0);
seq__20663_21201 = G__21219;
chunk__20664_21202 = G__21220;
count__20665_21203 = G__21221;
i__20666_21204 = G__21222;
continue;
} else {
var vec__20683_21223 = cljs.core.first(seq__20663_21216__$1);
var k_21224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683_21223,(0),null);
var v_21225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683_21223,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_21224);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21224),v_21225);


var G__21227 = cljs.core.next(seq__20663_21216__$1);
var G__21228 = null;
var G__21229 = (0);
var G__21230 = (0);
seq__20663_21201 = G__21227;
chunk__20664_21202 = G__21228;
count__20665_21203 = G__21229;
i__20666_21204 = G__21230;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20705 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(1),null);
var seq__20709_21232 = cljs.core.seq(node_children);
var chunk__20711_21233 = null;
var count__20712_21234 = (0);
var i__20713_21235 = (0);
while(true){
if((i__20713_21235 < count__20712_21234)){
var child_struct_21236 = chunk__20711_21233.cljs$core$IIndexed$_nth$arity$2(null,i__20713_21235);
if((!((child_struct_21236 == null)))){
if(typeof child_struct_21236 === 'string'){
var text_21237 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21237),child_struct_21236].join(''));
} else {
var children_21238 = shadow.dom.svg_node(child_struct_21236);
if(cljs.core.seq_QMARK_(children_21238)){
var seq__20767_21239 = cljs.core.seq(children_21238);
var chunk__20769_21240 = null;
var count__20770_21241 = (0);
var i__20771_21242 = (0);
while(true){
if((i__20771_21242 < count__20770_21241)){
var child_21243 = chunk__20769_21240.cljs$core$IIndexed$_nth$arity$2(null,i__20771_21242);
if(cljs.core.truth_(child_21243)){
node.appendChild(child_21243);


var G__21244 = seq__20767_21239;
var G__21245 = chunk__20769_21240;
var G__21246 = count__20770_21241;
var G__21247 = (i__20771_21242 + (1));
seq__20767_21239 = G__21244;
chunk__20769_21240 = G__21245;
count__20770_21241 = G__21246;
i__20771_21242 = G__21247;
continue;
} else {
var G__21248 = seq__20767_21239;
var G__21249 = chunk__20769_21240;
var G__21250 = count__20770_21241;
var G__21251 = (i__20771_21242 + (1));
seq__20767_21239 = G__21248;
chunk__20769_21240 = G__21249;
count__20770_21241 = G__21250;
i__20771_21242 = G__21251;
continue;
}
} else {
var temp__5753__auto___21252 = cljs.core.seq(seq__20767_21239);
if(temp__5753__auto___21252){
var seq__20767_21253__$1 = temp__5753__auto___21252;
if(cljs.core.chunked_seq_QMARK_(seq__20767_21253__$1)){
var c__4679__auto___21254 = cljs.core.chunk_first(seq__20767_21253__$1);
var G__21255 = cljs.core.chunk_rest(seq__20767_21253__$1);
var G__21256 = c__4679__auto___21254;
var G__21257 = cljs.core.count(c__4679__auto___21254);
var G__21258 = (0);
seq__20767_21239 = G__21255;
chunk__20769_21240 = G__21256;
count__20770_21241 = G__21257;
i__20771_21242 = G__21258;
continue;
} else {
var child_21259 = cljs.core.first(seq__20767_21253__$1);
if(cljs.core.truth_(child_21259)){
node.appendChild(child_21259);


var G__21260 = cljs.core.next(seq__20767_21253__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__20767_21239 = G__21260;
chunk__20769_21240 = G__21261;
count__20770_21241 = G__21262;
i__20771_21242 = G__21263;
continue;
} else {
var G__21264 = cljs.core.next(seq__20767_21253__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__20767_21239 = G__21264;
chunk__20769_21240 = G__21265;
count__20770_21241 = G__21266;
i__20771_21242 = G__21267;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21238);
}
}


var G__21268 = seq__20709_21232;
var G__21269 = chunk__20711_21233;
var G__21270 = count__20712_21234;
var G__21271 = (i__20713_21235 + (1));
seq__20709_21232 = G__21268;
chunk__20711_21233 = G__21269;
count__20712_21234 = G__21270;
i__20713_21235 = G__21271;
continue;
} else {
var G__21273 = seq__20709_21232;
var G__21274 = chunk__20711_21233;
var G__21275 = count__20712_21234;
var G__21276 = (i__20713_21235 + (1));
seq__20709_21232 = G__21273;
chunk__20711_21233 = G__21274;
count__20712_21234 = G__21275;
i__20713_21235 = G__21276;
continue;
}
} else {
var temp__5753__auto___21278 = cljs.core.seq(seq__20709_21232);
if(temp__5753__auto___21278){
var seq__20709_21279__$1 = temp__5753__auto___21278;
if(cljs.core.chunked_seq_QMARK_(seq__20709_21279__$1)){
var c__4679__auto___21281 = cljs.core.chunk_first(seq__20709_21279__$1);
var G__21282 = cljs.core.chunk_rest(seq__20709_21279__$1);
var G__21283 = c__4679__auto___21281;
var G__21284 = cljs.core.count(c__4679__auto___21281);
var G__21285 = (0);
seq__20709_21232 = G__21282;
chunk__20711_21233 = G__21283;
count__20712_21234 = G__21284;
i__20713_21235 = G__21285;
continue;
} else {
var child_struct_21286 = cljs.core.first(seq__20709_21279__$1);
if((!((child_struct_21286 == null)))){
if(typeof child_struct_21286 === 'string'){
var text_21288 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21288),child_struct_21286].join(''));
} else {
var children_21289 = shadow.dom.svg_node(child_struct_21286);
if(cljs.core.seq_QMARK_(children_21289)){
var seq__20793_21290 = cljs.core.seq(children_21289);
var chunk__20795_21291 = null;
var count__20796_21292 = (0);
var i__20797_21293 = (0);
while(true){
if((i__20797_21293 < count__20796_21292)){
var child_21294 = chunk__20795_21291.cljs$core$IIndexed$_nth$arity$2(null,i__20797_21293);
if(cljs.core.truth_(child_21294)){
node.appendChild(child_21294);


var G__21297 = seq__20793_21290;
var G__21298 = chunk__20795_21291;
var G__21299 = count__20796_21292;
var G__21300 = (i__20797_21293 + (1));
seq__20793_21290 = G__21297;
chunk__20795_21291 = G__21298;
count__20796_21292 = G__21299;
i__20797_21293 = G__21300;
continue;
} else {
var G__21301 = seq__20793_21290;
var G__21302 = chunk__20795_21291;
var G__21303 = count__20796_21292;
var G__21304 = (i__20797_21293 + (1));
seq__20793_21290 = G__21301;
chunk__20795_21291 = G__21302;
count__20796_21292 = G__21303;
i__20797_21293 = G__21304;
continue;
}
} else {
var temp__5753__auto___21305__$1 = cljs.core.seq(seq__20793_21290);
if(temp__5753__auto___21305__$1){
var seq__20793_21306__$1 = temp__5753__auto___21305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20793_21306__$1)){
var c__4679__auto___21307 = cljs.core.chunk_first(seq__20793_21306__$1);
var G__21309 = cljs.core.chunk_rest(seq__20793_21306__$1);
var G__21310 = c__4679__auto___21307;
var G__21311 = cljs.core.count(c__4679__auto___21307);
var G__21312 = (0);
seq__20793_21290 = G__21309;
chunk__20795_21291 = G__21310;
count__20796_21292 = G__21311;
i__20797_21293 = G__21312;
continue;
} else {
var child_21314 = cljs.core.first(seq__20793_21306__$1);
if(cljs.core.truth_(child_21314)){
node.appendChild(child_21314);


var G__21315 = cljs.core.next(seq__20793_21306__$1);
var G__21316 = null;
var G__21317 = (0);
var G__21318 = (0);
seq__20793_21290 = G__21315;
chunk__20795_21291 = G__21316;
count__20796_21292 = G__21317;
i__20797_21293 = G__21318;
continue;
} else {
var G__21320 = cljs.core.next(seq__20793_21306__$1);
var G__21321 = null;
var G__21322 = (0);
var G__21323 = (0);
seq__20793_21290 = G__21320;
chunk__20795_21291 = G__21321;
count__20796_21292 = G__21322;
i__20797_21293 = G__21323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21289);
}
}


var G__21327 = cljs.core.next(seq__20709_21279__$1);
var G__21328 = null;
var G__21329 = (0);
var G__21330 = (0);
seq__20709_21232 = G__21327;
chunk__20711_21233 = G__21328;
count__20712_21234 = G__21329;
i__20713_21235 = G__21330;
continue;
} else {
var G__21331 = cljs.core.next(seq__20709_21279__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__20709_21232 = G__21331;
chunk__20711_21233 = G__21332;
count__20712_21234 = G__21333;
i__20713_21235 = G__21334;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21340 = arguments.length;
var i__4865__auto___21341 = (0);
while(true){
if((i__4865__auto___21341 < len__4864__auto___21340)){
args__4870__auto__.push((arguments[i__4865__auto___21341]));

var G__21342 = (i__4865__auto___21341 + (1));
i__4865__auto___21341 = G__21342;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20799){
var G__20800 = cljs.core.first(seq20799);
var seq20799__$1 = cljs.core.next(seq20799);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20800,seq20799__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20802 = arguments.length;
switch (G__20802) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__17280__auto___21344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_20809){
var state_val_20810 = (state_20809[(1)]);
if((state_val_20810 === (1))){
var state_20809__$1 = state_20809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20809__$1,(2),once_or_cleanup);
} else {
if((state_val_20810 === (2))){
var inst_20805 = (state_20809[(2)]);
var inst_20806 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20809__$1 = (function (){var statearr_20811 = state_20809;
(statearr_20811[(7)] = inst_20805);

return statearr_20811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20809__$1,inst_20806);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16778__auto__ = null;
var shadow$dom$state_machine__16778__auto____0 = (function (){
var statearr_20814 = [null,null,null,null,null,null,null,null];
(statearr_20814[(0)] = shadow$dom$state_machine__16778__auto__);

(statearr_20814[(1)] = (1));

return statearr_20814;
});
var shadow$dom$state_machine__16778__auto____1 = (function (state_20809){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_20809);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e20815){var ex__16781__auto__ = e20815;
var statearr_20816_21347 = state_20809;
(statearr_20816_21347[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_20809[(4)]))){
var statearr_20817_21348 = state_20809;
(statearr_20817_21348[(1)] = cljs.core.first((state_20809[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21349 = state_20809;
state_20809 = G__21349;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
shadow$dom$state_machine__16778__auto__ = function(state_20809){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16778__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16778__auto____1.call(this,state_20809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16778__auto____0;
shadow$dom$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16778__auto____1;
return shadow$dom$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_20819 = f__17281__auto__();
(statearr_20819[(6)] = c__17280__auto___21344);

return statearr_20819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
