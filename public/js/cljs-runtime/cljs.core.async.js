goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17366 = arguments.length;
switch (G__17366) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17375 = (function (f,blockable,meta17376){
this.f = f;
this.blockable = blockable;
this.meta17376 = meta17376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17377,meta17376__$1){
var self__ = this;
var _17377__$1 = this;
return (new cljs.core.async.t_cljs$core$async17375(self__.f,self__.blockable,meta17376__$1));
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17377){
var self__ = this;
var _17377__$1 = this;
return self__.meta17376;
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17376","meta17376",-194022020,null)], null);
}));

(cljs.core.async.t_cljs$core$async17375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17375");

(cljs.core.async.t_cljs$core$async17375.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17375.
 */
cljs.core.async.__GT_t_cljs$core$async17375 = (function cljs$core$async$__GT_t_cljs$core$async17375(f__$1,blockable__$1,meta17376){
return (new cljs.core.async.t_cljs$core$async17375(f__$1,blockable__$1,meta17376));
});

}

return (new cljs.core.async.t_cljs$core$async17375(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17395 = arguments.length;
switch (G__17395) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17418 = arguments.length;
switch (G__17418) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17421 = arguments.length;
switch (G__17421) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19564 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19564) : fn1.call(null,val_19564));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19564) : fn1.call(null,val_19564));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17424 = arguments.length;
switch (G__17424) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___19566 = n;
var x_19567 = (0);
while(true){
if((x_19567 < n__4741__auto___19566)){
(a[x_19567] = x_19567);

var G__19568 = (x_19567 + (1));
x_19567 = G__19568;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17427 = (function (flag,meta17428){
this.flag = flag;
this.meta17428 = meta17428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17429,meta17428__$1){
var self__ = this;
var _17429__$1 = this;
return (new cljs.core.async.t_cljs$core$async17427(self__.flag,meta17428__$1));
}));

(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17429){
var self__ = this;
var _17429__$1 = this;
return self__.meta17428;
}));

(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17428","meta17428",-1359444205,null)], null);
}));

(cljs.core.async.t_cljs$core$async17427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17427");

(cljs.core.async.t_cljs$core$async17427.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17427.
 */
cljs.core.async.__GT_t_cljs$core$async17427 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17427(flag__$1,meta17428){
return (new cljs.core.async.t_cljs$core$async17427(flag__$1,meta17428));
});

}

return (new cljs.core.async.t_cljs$core$async17427(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17432 = (function (flag,cb,meta17433){
this.flag = flag;
this.cb = cb;
this.meta17433 = meta17433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17434,meta17433__$1){
var self__ = this;
var _17434__$1 = this;
return (new cljs.core.async.t_cljs$core$async17432(self__.flag,self__.cb,meta17433__$1));
}));

(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17434){
var self__ = this;
var _17434__$1 = this;
return self__.meta17433;
}));

(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17433","meta17433",1251472025,null)], null);
}));

(cljs.core.async.t_cljs$core$async17432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17432");

(cljs.core.async.t_cljs$core$async17432.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async17432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17432.
 */
cljs.core.async.__GT_t_cljs$core$async17432 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17432(flag__$1,cb__$1,meta17433){
return (new cljs.core.async.t_cljs$core$async17432(flag__$1,cb__$1,meta17433));
});

}

return (new cljs.core.async.t_cljs$core$async17432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17437_SHARP_){
var G__17439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17437_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17439) : fret.call(null,G__17439));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17438_SHARP_){
var G__17440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17438_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17440) : fret.call(null,G__17440));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19571 = (i + (1));
i = G__19571;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19574 = arguments.length;
var i__4865__auto___19575 = (0);
while(true){
if((i__4865__auto___19575 < len__4864__auto___19574)){
args__4870__auto__.push((arguments[i__4865__auto___19575]));

var G__19576 = (i__4865__auto___19575 + (1));
i__4865__auto___19575 = G__19576;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17445){
var map__17446 = p__17445;
var map__17446__$1 = cljs.core.__destructure_map(map__17446);
var opts = map__17446__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17442){
var G__17443 = cljs.core.first(seq17442);
var seq17442__$1 = cljs.core.next(seq17442);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17443,seq17442__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17450 = arguments.length;
switch (G__17450) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17280__auto___19578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17479){
var state_val_17480 = (state_17479[(1)]);
if((state_val_17480 === (7))){
var inst_17474 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17482_19579 = state_17479__$1;
(statearr_17482_19579[(2)] = inst_17474);

(statearr_17482_19579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (1))){
var state_17479__$1 = state_17479;
var statearr_17483_19580 = state_17479__$1;
(statearr_17483_19580[(2)] = null);

(statearr_17483_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (4))){
var inst_17456 = (state_17479[(7)]);
var inst_17456__$1 = (state_17479[(2)]);
var inst_17457 = (inst_17456__$1 == null);
var state_17479__$1 = (function (){var statearr_17484 = state_17479;
(statearr_17484[(7)] = inst_17456__$1);

return statearr_17484;
})();
if(cljs.core.truth_(inst_17457)){
var statearr_17485_19581 = state_17479__$1;
(statearr_17485_19581[(1)] = (5));

} else {
var statearr_17486_19582 = state_17479__$1;
(statearr_17486_19582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (13))){
var state_17479__$1 = state_17479;
var statearr_17488_19583 = state_17479__$1;
(statearr_17488_19583[(2)] = null);

(statearr_17488_19583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (6))){
var inst_17456 = (state_17479[(7)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17479__$1,(11),to,inst_17456);
} else {
if((state_val_17480 === (3))){
var inst_17476 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17479__$1,inst_17476);
} else {
if((state_val_17480 === (12))){
var state_17479__$1 = state_17479;
var statearr_17489_19584 = state_17479__$1;
(statearr_17489_19584[(2)] = null);

(statearr_17489_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (2))){
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17479__$1,(4),from);
} else {
if((state_val_17480 === (11))){
var inst_17466 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17466)){
var statearr_17490_19585 = state_17479__$1;
(statearr_17490_19585[(1)] = (12));

} else {
var statearr_17492_19586 = state_17479__$1;
(statearr_17492_19586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (9))){
var state_17479__$1 = state_17479;
var statearr_17493_19587 = state_17479__$1;
(statearr_17493_19587[(2)] = null);

(statearr_17493_19587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (5))){
var state_17479__$1 = state_17479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17494_19588 = state_17479__$1;
(statearr_17494_19588[(1)] = (8));

} else {
var statearr_17495_19589 = state_17479__$1;
(statearr_17495_19589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (14))){
var inst_17472 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17496_19590 = state_17479__$1;
(statearr_17496_19590[(2)] = inst_17472);

(statearr_17496_19590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (10))){
var inst_17463 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17497_19591 = state_17479__$1;
(statearr_17497_19591[(2)] = inst_17463);

(statearr_17497_19591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (8))){
var inst_17460 = cljs.core.async.close_BANG_(to);
var state_17479__$1 = state_17479;
var statearr_17498_19592 = state_17479__$1;
(statearr_17498_19592[(2)] = inst_17460);

(statearr_17498_19592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_17499 = [null,null,null,null,null,null,null,null];
(statearr_17499[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_17499[(1)] = (1));

return statearr_17499;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_17479){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17479);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17501){var ex__16781__auto__ = e17501;
var statearr_17502_19593 = state_17479;
(statearr_17502_19593[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17479[(4)]))){
var statearr_17503_19595 = state_17479;
(statearr_17503_19595[(1)] = cljs.core.first((state_17479[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19599 = state_17479;
state_17479 = G__19599;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17504 = f__17281__auto__();
(statearr_17504[(6)] = c__17280__auto___19578);

return statearr_17504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__17506){
var vec__17507 = p__17506;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17507,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17507,(1),null);
var job = vec__17507;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17280__auto___19601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17514){
var state_val_17515 = (state_17514[(1)]);
if((state_val_17515 === (1))){
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17514__$1,(2),res,v);
} else {
if((state_val_17515 === (2))){
var inst_17511 = (state_17514[(2)]);
var inst_17512 = cljs.core.async.close_BANG_(res);
var state_17514__$1 = (function (){var statearr_17517 = state_17514;
(statearr_17517[(7)] = inst_17511);

return statearr_17517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17514__$1,inst_17512);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_17518 = [null,null,null,null,null,null,null,null];
(statearr_17518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__);

(statearr_17518[(1)] = (1));

return statearr_17518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1 = (function (state_17514){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17514);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17519){var ex__16781__auto__ = e17519;
var statearr_17520_19605 = state_17514;
(statearr_17520_19605[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17514[(4)]))){
var statearr_17521_19607 = state_17514;
(statearr_17521_19607[(1)] = cljs.core.first((state_17514[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19609 = state_17514;
state_17514 = G__19609;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = function(state_17514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1.call(this,state_17514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17522 = f__17281__auto__();
(statearr_17522[(6)] = c__17280__auto___19601);

return statearr_17522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17524){
var vec__17525 = p__17524;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17525,(1),null);
var job = vec__17525;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___19610 = n;
var __19611 = (0);
while(true){
if((__19611 < n__4741__auto___19610)){
var G__17528_19612 = type;
var G__17528_19613__$1 = (((G__17528_19612 instanceof cljs.core.Keyword))?G__17528_19612.fqn:null);
switch (G__17528_19613__$1) {
case "compute":
var c__17280__auto___19615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19611,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = ((function (__19611,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function (state_17541){
var state_val_17542 = (state_17541[(1)]);
if((state_val_17542 === (1))){
var state_17541__$1 = state_17541;
var statearr_17544_19616 = state_17541__$1;
(statearr_17544_19616[(2)] = null);

(statearr_17544_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (2))){
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17541__$1,(4),jobs);
} else {
if((state_val_17542 === (3))){
var inst_17539 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17541__$1,inst_17539);
} else {
if((state_val_17542 === (4))){
var inst_17531 = (state_17541[(2)]);
var inst_17532 = process(inst_17531);
var state_17541__$1 = state_17541;
if(cljs.core.truth_(inst_17532)){
var statearr_17545_19617 = state_17541__$1;
(statearr_17545_19617[(1)] = (5));

} else {
var statearr_17546_19619 = state_17541__$1;
(statearr_17546_19619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (5))){
var state_17541__$1 = state_17541;
var statearr_17547_19620 = state_17541__$1;
(statearr_17547_19620[(2)] = null);

(statearr_17547_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (6))){
var state_17541__$1 = state_17541;
var statearr_17548_19622 = state_17541__$1;
(statearr_17548_19622[(2)] = null);

(statearr_17548_19622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (7))){
var inst_17537 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17550_19623 = state_17541__$1;
(statearr_17550_19623[(2)] = inst_17537);

(statearr_17550_19623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19611,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
;
return ((function (__19611,switch__16777__auto__,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_17551 = [null,null,null,null,null,null,null];
(statearr_17551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__);

(statearr_17551[(1)] = (1));

return statearr_17551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1 = (function (state_17541){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17541);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17552){var ex__16781__auto__ = e17552;
var statearr_17553_19624 = state_17541;
(statearr_17553_19624[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17541[(4)]))){
var statearr_17554_19625 = state_17541;
(statearr_17554_19625[(1)] = cljs.core.first((state_17541[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19626 = state_17541;
state_17541 = G__19626;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = function(state_17541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1.call(this,state_17541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__;
})()
;})(__19611,switch__16777__auto__,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
})();
var state__17282__auto__ = (function (){var statearr_17555 = f__17281__auto__();
(statearr_17555[(6)] = c__17280__auto___19615);

return statearr_17555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
});})(__19611,c__17280__auto___19615,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
);


break;
case "async":
var c__17280__auto___19627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19611,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = ((function (__19611,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function (state_17569){
var state_val_17570 = (state_17569[(1)]);
if((state_val_17570 === (1))){
var state_17569__$1 = state_17569;
var statearr_17571_19629 = state_17569__$1;
(statearr_17571_19629[(2)] = null);

(statearr_17571_19629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (2))){
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17569__$1,(4),jobs);
} else {
if((state_val_17570 === (3))){
var inst_17567 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17569__$1,inst_17567);
} else {
if((state_val_17570 === (4))){
var inst_17559 = (state_17569[(2)]);
var inst_17560 = async(inst_17559);
var state_17569__$1 = state_17569;
if(cljs.core.truth_(inst_17560)){
var statearr_17572_19632 = state_17569__$1;
(statearr_17572_19632[(1)] = (5));

} else {
var statearr_17573_19633 = state_17569__$1;
(statearr_17573_19633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (5))){
var state_17569__$1 = state_17569;
var statearr_17574_19634 = state_17569__$1;
(statearr_17574_19634[(2)] = null);

(statearr_17574_19634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (6))){
var state_17569__$1 = state_17569;
var statearr_17576_19635 = state_17569__$1;
(statearr_17576_19635[(2)] = null);

(statearr_17576_19635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17570 === (7))){
var inst_17565 = (state_17569[(2)]);
var state_17569__$1 = state_17569;
var statearr_17577_19636 = state_17569__$1;
(statearr_17577_19636[(2)] = inst_17565);

(statearr_17577_19636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19611,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
;
return ((function (__19611,switch__16777__auto__,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_17578 = [null,null,null,null,null,null,null];
(statearr_17578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__);

(statearr_17578[(1)] = (1));

return statearr_17578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1 = (function (state_17569){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17569);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17579){var ex__16781__auto__ = e17579;
var statearr_17580_19637 = state_17569;
(statearr_17580_19637[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17569[(4)]))){
var statearr_17581_19638 = state_17569;
(statearr_17581_19638[(1)] = cljs.core.first((state_17569[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19640 = state_17569;
state_17569 = G__19640;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = function(state_17569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1.call(this,state_17569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__;
})()
;})(__19611,switch__16777__auto__,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
})();
var state__17282__auto__ = (function (){var statearr_17582 = f__17281__auto__();
(statearr_17582[(6)] = c__17280__auto___19627);

return statearr_17582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
});})(__19611,c__17280__auto___19627,G__17528_19612,G__17528_19613__$1,n__4741__auto___19610,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17528_19613__$1)].join('')));

}

var G__19642 = (__19611 + (1));
__19611 = G__19642;
continue;
} else {
}
break;
}

var c__17280__auto___19643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17605){
var state_val_17606 = (state_17605[(1)]);
if((state_val_17606 === (7))){
var inst_17601 = (state_17605[(2)]);
var state_17605__$1 = state_17605;
var statearr_17608_19644 = state_17605__$1;
(statearr_17608_19644[(2)] = inst_17601);

(statearr_17608_19644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17606 === (1))){
var state_17605__$1 = state_17605;
var statearr_17609_19645 = state_17605__$1;
(statearr_17609_19645[(2)] = null);

(statearr_17609_19645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17606 === (4))){
var inst_17586 = (state_17605[(7)]);
var inst_17586__$1 = (state_17605[(2)]);
var inst_17587 = (inst_17586__$1 == null);
var state_17605__$1 = (function (){var statearr_17610 = state_17605;
(statearr_17610[(7)] = inst_17586__$1);

return statearr_17610;
})();
if(cljs.core.truth_(inst_17587)){
var statearr_17611_19646 = state_17605__$1;
(statearr_17611_19646[(1)] = (5));

} else {
var statearr_17612_19647 = state_17605__$1;
(statearr_17612_19647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17606 === (6))){
var inst_17586 = (state_17605[(7)]);
var inst_17591 = (state_17605[(8)]);
var inst_17591__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17593 = [inst_17586,inst_17591__$1];
var inst_17594 = (new cljs.core.PersistentVector(null,2,(5),inst_17592,inst_17593,null));
var state_17605__$1 = (function (){var statearr_17614 = state_17605;
(statearr_17614[(8)] = inst_17591__$1);

return statearr_17614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17605__$1,(8),jobs,inst_17594);
} else {
if((state_val_17606 === (3))){
var inst_17603 = (state_17605[(2)]);
var state_17605__$1 = state_17605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17605__$1,inst_17603);
} else {
if((state_val_17606 === (2))){
var state_17605__$1 = state_17605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17605__$1,(4),from);
} else {
if((state_val_17606 === (9))){
var inst_17598 = (state_17605[(2)]);
var state_17605__$1 = (function (){var statearr_17615 = state_17605;
(statearr_17615[(9)] = inst_17598);

return statearr_17615;
})();
var statearr_17616_19648 = state_17605__$1;
(statearr_17616_19648[(2)] = null);

(statearr_17616_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17606 === (5))){
var inst_17589 = cljs.core.async.close_BANG_(jobs);
var state_17605__$1 = state_17605;
var statearr_17617_19652 = state_17605__$1;
(statearr_17617_19652[(2)] = inst_17589);

(statearr_17617_19652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17606 === (8))){
var inst_17591 = (state_17605[(8)]);
var inst_17596 = (state_17605[(2)]);
var state_17605__$1 = (function (){var statearr_17618 = state_17605;
(statearr_17618[(10)] = inst_17596);

return statearr_17618;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17605__$1,(9),results,inst_17591);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_17620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__);

(statearr_17620[(1)] = (1));

return statearr_17620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1 = (function (state_17605){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17605);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17621){var ex__16781__auto__ = e17621;
var statearr_17622_19655 = state_17605;
(statearr_17622_19655[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17605[(4)]))){
var statearr_17623_19656 = state_17605;
(statearr_17623_19656[(1)] = cljs.core.first((state_17605[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19657 = state_17605;
state_17605 = G__19657;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = function(state_17605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1.call(this,state_17605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17624 = f__17281__auto__();
(statearr_17624[(6)] = c__17280__auto___19643);

return statearr_17624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


var c__17280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17664){
var state_val_17665 = (state_17664[(1)]);
if((state_val_17665 === (7))){
var inst_17660 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17666_19658 = state_17664__$1;
(statearr_17666_19658[(2)] = inst_17660);

(statearr_17666_19658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (20))){
var state_17664__$1 = state_17664;
var statearr_17667_19659 = state_17664__$1;
(statearr_17667_19659[(2)] = null);

(statearr_17667_19659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (1))){
var state_17664__$1 = state_17664;
var statearr_17668_19660 = state_17664__$1;
(statearr_17668_19660[(2)] = null);

(statearr_17668_19660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (4))){
var inst_17628 = (state_17664[(7)]);
var inst_17628__$1 = (state_17664[(2)]);
var inst_17630 = (inst_17628__$1 == null);
var state_17664__$1 = (function (){var statearr_17671 = state_17664;
(statearr_17671[(7)] = inst_17628__$1);

return statearr_17671;
})();
if(cljs.core.truth_(inst_17630)){
var statearr_17672_19661 = state_17664__$1;
(statearr_17672_19661[(1)] = (5));

} else {
var statearr_17673_19662 = state_17664__$1;
(statearr_17673_19662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (15))){
var inst_17642 = (state_17664[(8)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17664__$1,(18),to,inst_17642);
} else {
if((state_val_17665 === (21))){
var inst_17655 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17674_19663 = state_17664__$1;
(statearr_17674_19663[(2)] = inst_17655);

(statearr_17674_19663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (13))){
var inst_17657 = (state_17664[(2)]);
var state_17664__$1 = (function (){var statearr_17675 = state_17664;
(statearr_17675[(9)] = inst_17657);

return statearr_17675;
})();
var statearr_17676_19664 = state_17664__$1;
(statearr_17676_19664[(2)] = null);

(statearr_17676_19664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (6))){
var inst_17628 = (state_17664[(7)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17664__$1,(11),inst_17628);
} else {
if((state_val_17665 === (17))){
var inst_17650 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
if(cljs.core.truth_(inst_17650)){
var statearr_17677_19665 = state_17664__$1;
(statearr_17677_19665[(1)] = (19));

} else {
var statearr_17678_19666 = state_17664__$1;
(statearr_17678_19666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (3))){
var inst_17662 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17664__$1,inst_17662);
} else {
if((state_val_17665 === (12))){
var inst_17639 = (state_17664[(10)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17664__$1,(14),inst_17639);
} else {
if((state_val_17665 === (2))){
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17664__$1,(4),results);
} else {
if((state_val_17665 === (19))){
var state_17664__$1 = state_17664;
var statearr_17679_19669 = state_17664__$1;
(statearr_17679_19669[(2)] = null);

(statearr_17679_19669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (11))){
var inst_17639 = (state_17664[(2)]);
var state_17664__$1 = (function (){var statearr_17680 = state_17664;
(statearr_17680[(10)] = inst_17639);

return statearr_17680;
})();
var statearr_17681_19670 = state_17664__$1;
(statearr_17681_19670[(2)] = null);

(statearr_17681_19670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (9))){
var state_17664__$1 = state_17664;
var statearr_17682_19671 = state_17664__$1;
(statearr_17682_19671[(2)] = null);

(statearr_17682_19671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (5))){
var state_17664__$1 = state_17664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17683_19672 = state_17664__$1;
(statearr_17683_19672[(1)] = (8));

} else {
var statearr_17684_19673 = state_17664__$1;
(statearr_17684_19673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (14))){
var inst_17642 = (state_17664[(8)]);
var inst_17644 = (state_17664[(11)]);
var inst_17642__$1 = (state_17664[(2)]);
var inst_17643 = (inst_17642__$1 == null);
var inst_17644__$1 = cljs.core.not(inst_17643);
var state_17664__$1 = (function (){var statearr_17685 = state_17664;
(statearr_17685[(8)] = inst_17642__$1);

(statearr_17685[(11)] = inst_17644__$1);

return statearr_17685;
})();
if(inst_17644__$1){
var statearr_17686_19674 = state_17664__$1;
(statearr_17686_19674[(1)] = (15));

} else {
var statearr_17688_19675 = state_17664__$1;
(statearr_17688_19675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (16))){
var inst_17644 = (state_17664[(11)]);
var state_17664__$1 = state_17664;
var statearr_17690_19676 = state_17664__$1;
(statearr_17690_19676[(2)] = inst_17644);

(statearr_17690_19676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (10))){
var inst_17636 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17691_19677 = state_17664__$1;
(statearr_17691_19677[(2)] = inst_17636);

(statearr_17691_19677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (18))){
var inst_17647 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17692_19678 = state_17664__$1;
(statearr_17692_19678[(2)] = inst_17647);

(statearr_17692_19678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (8))){
var inst_17633 = cljs.core.async.close_BANG_(to);
var state_17664__$1 = state_17664;
var statearr_17693_19679 = state_17664__$1;
(statearr_17693_19679[(2)] = inst_17633);

(statearr_17693_19679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_17694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__);

(statearr_17694[(1)] = (1));

return statearr_17694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1 = (function (state_17664){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17664);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17695){var ex__16781__auto__ = e17695;
var statearr_17696_19680 = state_17664;
(statearr_17696_19680[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17664[(4)]))){
var statearr_17697_19682 = state_17664;
(statearr_17697_19682[(1)] = cljs.core.first((state_17664[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19683 = state_17664;
state_17664 = G__19683;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__ = function(state_17664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1.call(this,state_17664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17698 = f__17281__auto__();
(statearr_17698[(6)] = c__17280__auto__);

return statearr_17698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

return c__17280__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17700 = arguments.length;
switch (G__17700) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17711 = arguments.length;
switch (G__17711) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17722 = arguments.length;
switch (G__17722) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17280__auto___19694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17759){
var state_val_17760 = (state_17759[(1)]);
if((state_val_17760 === (7))){
var inst_17755 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
var statearr_17765_19695 = state_17759__$1;
(statearr_17765_19695[(2)] = inst_17755);

(statearr_17765_19695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (1))){
var state_17759__$1 = state_17759;
var statearr_17767_19696 = state_17759__$1;
(statearr_17767_19696[(2)] = null);

(statearr_17767_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (4))){
var inst_17733 = (state_17759[(7)]);
var inst_17733__$1 = (state_17759[(2)]);
var inst_17734 = (inst_17733__$1 == null);
var state_17759__$1 = (function (){var statearr_17771 = state_17759;
(statearr_17771[(7)] = inst_17733__$1);

return statearr_17771;
})();
if(cljs.core.truth_(inst_17734)){
var statearr_17772_19697 = state_17759__$1;
(statearr_17772_19697[(1)] = (5));

} else {
var statearr_17774_19698 = state_17759__$1;
(statearr_17774_19698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (13))){
var state_17759__$1 = state_17759;
var statearr_17776_19699 = state_17759__$1;
(statearr_17776_19699[(2)] = null);

(statearr_17776_19699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (6))){
var inst_17733 = (state_17759[(7)]);
var inst_17741 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17733) : p.call(null,inst_17733));
var state_17759__$1 = state_17759;
if(cljs.core.truth_(inst_17741)){
var statearr_17780_19700 = state_17759__$1;
(statearr_17780_19700[(1)] = (9));

} else {
var statearr_17781_19701 = state_17759__$1;
(statearr_17781_19701[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (3))){
var inst_17757 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17759__$1,inst_17757);
} else {
if((state_val_17760 === (12))){
var state_17759__$1 = state_17759;
var statearr_17786_19702 = state_17759__$1;
(statearr_17786_19702[(2)] = null);

(statearr_17786_19702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (2))){
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17759__$1,(4),ch);
} else {
if((state_val_17760 === (11))){
var inst_17733 = (state_17759[(7)]);
var inst_17746 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17759__$1,(8),inst_17746,inst_17733);
} else {
if((state_val_17760 === (9))){
var state_17759__$1 = state_17759;
var statearr_17794_19703 = state_17759__$1;
(statearr_17794_19703[(2)] = tc);

(statearr_17794_19703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (5))){
var inst_17736 = cljs.core.async.close_BANG_(tc);
var inst_17737 = cljs.core.async.close_BANG_(fc);
var state_17759__$1 = (function (){var statearr_17796 = state_17759;
(statearr_17796[(8)] = inst_17736);

return statearr_17796;
})();
var statearr_17799_19704 = state_17759__$1;
(statearr_17799_19704[(2)] = inst_17737);

(statearr_17799_19704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (14))){
var inst_17753 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
var statearr_17802_19705 = state_17759__$1;
(statearr_17802_19705[(2)] = inst_17753);

(statearr_17802_19705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (10))){
var state_17759__$1 = state_17759;
var statearr_17806_19706 = state_17759__$1;
(statearr_17806_19706[(2)] = fc);

(statearr_17806_19706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (8))){
var inst_17748 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
if(cljs.core.truth_(inst_17748)){
var statearr_17808_19707 = state_17759__$1;
(statearr_17808_19707[(1)] = (12));

} else {
var statearr_17810_19708 = state_17759__$1;
(statearr_17810_19708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_17814 = [null,null,null,null,null,null,null,null,null];
(statearr_17814[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_17814[(1)] = (1));

return statearr_17814;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_17759){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17759);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17815){var ex__16781__auto__ = e17815;
var statearr_17816_19709 = state_17759;
(statearr_17816_19709[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17759[(4)]))){
var statearr_17820_19710 = state_17759;
(statearr_17820_19710[(1)] = cljs.core.first((state_17759[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19711 = state_17759;
state_17759 = G__19711;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_17759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_17759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17822 = f__17281__auto__();
(statearr_17822[(6)] = c__17280__auto___19694);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17856){
var state_val_17857 = (state_17856[(1)]);
if((state_val_17857 === (7))){
var inst_17852 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17863_19713 = state_17856__$1;
(statearr_17863_19713[(2)] = inst_17852);

(statearr_17863_19713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (1))){
var inst_17830 = init;
var inst_17831 = inst_17830;
var state_17856__$1 = (function (){var statearr_17866 = state_17856;
(statearr_17866[(7)] = inst_17831);

return statearr_17866;
})();
var statearr_17868_19715 = state_17856__$1;
(statearr_17868_19715[(2)] = null);

(statearr_17868_19715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (4))){
var inst_17834 = (state_17856[(8)]);
var inst_17834__$1 = (state_17856[(2)]);
var inst_17837 = (inst_17834__$1 == null);
var state_17856__$1 = (function (){var statearr_17870 = state_17856;
(statearr_17870[(8)] = inst_17834__$1);

return statearr_17870;
})();
if(cljs.core.truth_(inst_17837)){
var statearr_17871_19716 = state_17856__$1;
(statearr_17871_19716[(1)] = (5));

} else {
var statearr_17874_19717 = state_17856__$1;
(statearr_17874_19717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (6))){
var inst_17834 = (state_17856[(8)]);
var inst_17840 = (state_17856[(9)]);
var inst_17831 = (state_17856[(7)]);
var inst_17840__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17831,inst_17834) : f.call(null,inst_17831,inst_17834));
var inst_17841 = cljs.core.reduced_QMARK_(inst_17840__$1);
var state_17856__$1 = (function (){var statearr_17877 = state_17856;
(statearr_17877[(9)] = inst_17840__$1);

return statearr_17877;
})();
if(inst_17841){
var statearr_17878_19718 = state_17856__$1;
(statearr_17878_19718[(1)] = (8));

} else {
var statearr_17880_19719 = state_17856__$1;
(statearr_17880_19719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (3))){
var inst_17854 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17856__$1,inst_17854);
} else {
if((state_val_17857 === (2))){
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17856__$1,(4),ch);
} else {
if((state_val_17857 === (9))){
var inst_17840 = (state_17856[(9)]);
var inst_17831 = inst_17840;
var state_17856__$1 = (function (){var statearr_17884 = state_17856;
(statearr_17884[(7)] = inst_17831);

return statearr_17884;
})();
var statearr_17885_19720 = state_17856__$1;
(statearr_17885_19720[(2)] = null);

(statearr_17885_19720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (5))){
var inst_17831 = (state_17856[(7)]);
var state_17856__$1 = state_17856;
var statearr_17888_19721 = state_17856__$1;
(statearr_17888_19721[(2)] = inst_17831);

(statearr_17888_19721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (10))){
var inst_17850 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17890_19722 = state_17856__$1;
(statearr_17890_19722[(2)] = inst_17850);

(statearr_17890_19722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (8))){
var inst_17840 = (state_17856[(9)]);
var inst_17846 = cljs.core.deref(inst_17840);
var state_17856__$1 = state_17856;
var statearr_17893_19727 = state_17856__$1;
(statearr_17893_19727[(2)] = inst_17846);

(statearr_17893_19727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16778__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16778__auto____0 = (function (){
var statearr_17895 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17895[(0)] = cljs$core$async$reduce_$_state_machine__16778__auto__);

(statearr_17895[(1)] = (1));

return statearr_17895;
});
var cljs$core$async$reduce_$_state_machine__16778__auto____1 = (function (state_17856){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17856);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17897){var ex__16781__auto__ = e17897;
var statearr_17899_19728 = state_17856;
(statearr_17899_19728[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17856[(4)]))){
var statearr_17901_19729 = state_17856;
(statearr_17901_19729[(1)] = cljs.core.first((state_17856[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19734 = state_17856;
state_17856 = G__19734;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16778__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16778__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16778__auto____0;
cljs$core$async$reduce_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16778__auto____1;
return cljs$core$async$reduce_$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17903 = f__17281__auto__();
(statearr_17903[(6)] = c__17280__auto__);

return statearr_17903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

return c__17280__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (1))){
var inst_17911 = cljs.core.async.reduce(f__$1,init,ch);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17917__$1,(2),inst_17911);
} else {
if((state_val_17918 === (2))){
var inst_17913 = (state_17917[(2)]);
var inst_17915 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17913) : f__$1.call(null,inst_17913));
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17917__$1,inst_17915);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16778__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16778__auto____0 = (function (){
var statearr_17929 = [null,null,null,null,null,null,null];
(statearr_17929[(0)] = cljs$core$async$transduce_$_state_machine__16778__auto__);

(statearr_17929[(1)] = (1));

return statearr_17929;
});
var cljs$core$async$transduce_$_state_machine__16778__auto____1 = (function (state_17917){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17917);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e17931){var ex__16781__auto__ = e17931;
var statearr_17932_19742 = state_17917;
(statearr_17932_19742[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17917[(4)]))){
var statearr_17934_19743 = state_17917;
(statearr_17934_19743[(1)] = cljs.core.first((state_17917[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19744 = state_17917;
state_17917 = G__19744;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16778__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16778__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16778__auto____0;
cljs$core$async$transduce_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16778__auto____1;
return cljs$core$async$transduce_$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_17938 = f__17281__auto__();
(statearr_17938[(6)] = c__17280__auto__);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

return c__17280__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17945 = arguments.length;
switch (G__17945) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_17984){
var state_val_17985 = (state_17984[(1)]);
if((state_val_17985 === (7))){
var inst_17964 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
var statearr_17993_19749 = state_17984__$1;
(statearr_17993_19749[(2)] = inst_17964);

(statearr_17993_19749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (1))){
var inst_17954 = cljs.core.seq(coll);
var inst_17955 = inst_17954;
var state_17984__$1 = (function (){var statearr_17996 = state_17984;
(statearr_17996[(7)] = inst_17955);

return statearr_17996;
})();
var statearr_17999_19753 = state_17984__$1;
(statearr_17999_19753[(2)] = null);

(statearr_17999_19753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (4))){
var inst_17955 = (state_17984[(7)]);
var inst_17962 = cljs.core.first(inst_17955);
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17984__$1,(7),ch,inst_17962);
} else {
if((state_val_17985 === (13))){
var inst_17977 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
var statearr_18004_19754 = state_17984__$1;
(statearr_18004_19754[(2)] = inst_17977);

(statearr_18004_19754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (6))){
var inst_17967 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
if(cljs.core.truth_(inst_17967)){
var statearr_18007_19755 = state_17984__$1;
(statearr_18007_19755[(1)] = (8));

} else {
var statearr_18010_19756 = state_17984__$1;
(statearr_18010_19756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (3))){
var inst_17981 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17984__$1,inst_17981);
} else {
if((state_val_17985 === (12))){
var state_17984__$1 = state_17984;
var statearr_18015_19757 = state_17984__$1;
(statearr_18015_19757[(2)] = null);

(statearr_18015_19757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (2))){
var inst_17955 = (state_17984[(7)]);
var state_17984__$1 = state_17984;
if(cljs.core.truth_(inst_17955)){
var statearr_18017_19758 = state_17984__$1;
(statearr_18017_19758[(1)] = (4));

} else {
var statearr_18018_19759 = state_17984__$1;
(statearr_18018_19759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (11))){
var inst_17974 = cljs.core.async.close_BANG_(ch);
var state_17984__$1 = state_17984;
var statearr_18022_19763 = state_17984__$1;
(statearr_18022_19763[(2)] = inst_17974);

(statearr_18022_19763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (9))){
var state_17984__$1 = state_17984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18027_19764 = state_17984__$1;
(statearr_18027_19764[(1)] = (11));

} else {
var statearr_18028_19765 = state_17984__$1;
(statearr_18028_19765[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (5))){
var inst_17955 = (state_17984[(7)]);
var state_17984__$1 = state_17984;
var statearr_18032_19766 = state_17984__$1;
(statearr_18032_19766[(2)] = inst_17955);

(statearr_18032_19766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (10))){
var inst_17979 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
var statearr_18035_19767 = state_17984__$1;
(statearr_18035_19767[(2)] = inst_17979);

(statearr_18035_19767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (8))){
var inst_17955 = (state_17984[(7)]);
var inst_17970 = cljs.core.next(inst_17955);
var inst_17955__$1 = inst_17970;
var state_17984__$1 = (function (){var statearr_18036 = state_17984;
(statearr_18036[(7)] = inst_17955__$1);

return statearr_18036;
})();
var statearr_18037_19768 = state_17984__$1;
(statearr_18037_19768[(2)] = null);

(statearr_18037_19768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_18038 = [null,null,null,null,null,null,null,null];
(statearr_18038[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_18038[(1)] = (1));

return statearr_18038;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_17984){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_17984);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18039){var ex__16781__auto__ = e18039;
var statearr_18040_19773 = state_17984;
(statearr_18040_19773[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_17984[(4)]))){
var statearr_18041_19774 = state_17984;
(statearr_18041_19774[(1)] = cljs.core.first((state_17984[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19776 = state_17984;
state_17984 = G__19776;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_17984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_17984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18042 = f__17281__auto__();
(statearr_18042[(6)] = c__17280__auto__);

return statearr_18042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

return c__17280__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18044 = arguments.length;
switch (G__18044) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19782 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19782(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19790 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19790(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19794 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19794(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19798 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19798(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18064 = (function (ch,cs,meta18065){
this.ch = ch;
this.cs = cs;
this.meta18065 = meta18065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18066,meta18065__$1){
var self__ = this;
var _18066__$1 = this;
return (new cljs.core.async.t_cljs$core$async18064(self__.ch,self__.cs,meta18065__$1));
}));

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18066){
var self__ = this;
var _18066__$1 = this;
return self__.meta18065;
}));

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18064.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18065","meta18065",1107477852,null)], null);
}));

(cljs.core.async.t_cljs$core$async18064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18064");

(cljs.core.async.t_cljs$core$async18064.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18064.
 */
cljs.core.async.__GT_t_cljs$core$async18064 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18064(ch__$1,cs__$1,meta18065){
return (new cljs.core.async.t_cljs$core$async18064(ch__$1,cs__$1,meta18065));
});

}

return (new cljs.core.async.t_cljs$core$async18064(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17280__auto___19804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18233){
var state_val_18234 = (state_18233[(1)]);
if((state_val_18234 === (7))){
var inst_18228 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18235_19806 = state_18233__$1;
(statearr_18235_19806[(2)] = inst_18228);

(statearr_18235_19806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (20))){
var inst_18124 = (state_18233[(7)]);
var inst_18140 = cljs.core.first(inst_18124);
var inst_18141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18140,(0),null);
var inst_18142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18140,(1),null);
var state_18233__$1 = (function (){var statearr_18240 = state_18233;
(statearr_18240[(8)] = inst_18141);

return statearr_18240;
})();
if(cljs.core.truth_(inst_18142)){
var statearr_18241_19811 = state_18233__$1;
(statearr_18241_19811[(1)] = (22));

} else {
var statearr_18245_19816 = state_18233__$1;
(statearr_18245_19816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (27))){
var inst_18171 = (state_18233[(9)]);
var inst_18173 = (state_18233[(10)]);
var inst_18178 = (state_18233[(11)]);
var inst_18089 = (state_18233[(12)]);
var inst_18178__$1 = cljs.core._nth(inst_18171,inst_18173);
var inst_18179 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18178__$1,inst_18089,done);
var state_18233__$1 = (function (){var statearr_18247 = state_18233;
(statearr_18247[(11)] = inst_18178__$1);

return statearr_18247;
})();
if(cljs.core.truth_(inst_18179)){
var statearr_18248_19817 = state_18233__$1;
(statearr_18248_19817[(1)] = (30));

} else {
var statearr_18249_19819 = state_18233__$1;
(statearr_18249_19819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (1))){
var state_18233__$1 = state_18233;
var statearr_18253_19820 = state_18233__$1;
(statearr_18253_19820[(2)] = null);

(statearr_18253_19820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (24))){
var inst_18124 = (state_18233[(7)]);
var inst_18148 = (state_18233[(2)]);
var inst_18149 = cljs.core.next(inst_18124);
var inst_18099 = inst_18149;
var inst_18100 = null;
var inst_18101 = (0);
var inst_18102 = (0);
var state_18233__$1 = (function (){var statearr_18255 = state_18233;
(statearr_18255[(13)] = inst_18148);

(statearr_18255[(14)] = inst_18099);

(statearr_18255[(15)] = inst_18101);

(statearr_18255[(16)] = inst_18102);

(statearr_18255[(17)] = inst_18100);

return statearr_18255;
})();
var statearr_18256_19821 = state_18233__$1;
(statearr_18256_19821[(2)] = null);

(statearr_18256_19821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (39))){
var state_18233__$1 = state_18233;
var statearr_18264_19823 = state_18233__$1;
(statearr_18264_19823[(2)] = null);

(statearr_18264_19823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (4))){
var inst_18089 = (state_18233[(12)]);
var inst_18089__$1 = (state_18233[(2)]);
var inst_18091 = (inst_18089__$1 == null);
var state_18233__$1 = (function (){var statearr_18265 = state_18233;
(statearr_18265[(12)] = inst_18089__$1);

return statearr_18265;
})();
if(cljs.core.truth_(inst_18091)){
var statearr_18269_19828 = state_18233__$1;
(statearr_18269_19828[(1)] = (5));

} else {
var statearr_18270_19829 = state_18233__$1;
(statearr_18270_19829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (15))){
var inst_18099 = (state_18233[(14)]);
var inst_18101 = (state_18233[(15)]);
var inst_18102 = (state_18233[(16)]);
var inst_18100 = (state_18233[(17)]);
var inst_18117 = (state_18233[(2)]);
var inst_18121 = (inst_18102 + (1));
var tmp18260 = inst_18099;
var tmp18262 = inst_18101;
var tmp18263 = inst_18100;
var inst_18099__$1 = tmp18260;
var inst_18100__$1 = tmp18263;
var inst_18101__$1 = tmp18262;
var inst_18102__$1 = inst_18121;
var state_18233__$1 = (function (){var statearr_18272 = state_18233;
(statearr_18272[(14)] = inst_18099__$1);

(statearr_18272[(15)] = inst_18101__$1);

(statearr_18272[(18)] = inst_18117);

(statearr_18272[(16)] = inst_18102__$1);

(statearr_18272[(17)] = inst_18100__$1);

return statearr_18272;
})();
var statearr_18273_19830 = state_18233__$1;
(statearr_18273_19830[(2)] = null);

(statearr_18273_19830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (21))){
var inst_18152 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18277_19835 = state_18233__$1;
(statearr_18277_19835[(2)] = inst_18152);

(statearr_18277_19835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (31))){
var inst_18178 = (state_18233[(11)]);
var inst_18182 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18178);
var state_18233__$1 = state_18233;
var statearr_18279_19836 = state_18233__$1;
(statearr_18279_19836[(2)] = inst_18182);

(statearr_18279_19836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (32))){
var inst_18171 = (state_18233[(9)]);
var inst_18173 = (state_18233[(10)]);
var inst_18170 = (state_18233[(19)]);
var inst_18172 = (state_18233[(20)]);
var inst_18184 = (state_18233[(2)]);
var inst_18188 = (inst_18173 + (1));
var tmp18274 = inst_18171;
var tmp18275 = inst_18170;
var tmp18276 = inst_18172;
var inst_18170__$1 = tmp18275;
var inst_18171__$1 = tmp18274;
var inst_18172__$1 = tmp18276;
var inst_18173__$1 = inst_18188;
var state_18233__$1 = (function (){var statearr_18280 = state_18233;
(statearr_18280[(9)] = inst_18171__$1);

(statearr_18280[(10)] = inst_18173__$1);

(statearr_18280[(19)] = inst_18170__$1);

(statearr_18280[(21)] = inst_18184);

(statearr_18280[(20)] = inst_18172__$1);

return statearr_18280;
})();
var statearr_18281_19837 = state_18233__$1;
(statearr_18281_19837[(2)] = null);

(statearr_18281_19837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (40))){
var inst_18201 = (state_18233[(22)]);
var inst_18205 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18201);
var state_18233__$1 = state_18233;
var statearr_18282_19838 = state_18233__$1;
(statearr_18282_19838[(2)] = inst_18205);

(statearr_18282_19838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (33))){
var inst_18191 = (state_18233[(23)]);
var inst_18193 = cljs.core.chunked_seq_QMARK_(inst_18191);
var state_18233__$1 = state_18233;
if(inst_18193){
var statearr_18284_19843 = state_18233__$1;
(statearr_18284_19843[(1)] = (36));

} else {
var statearr_18288_19844 = state_18233__$1;
(statearr_18288_19844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (13))){
var inst_18111 = (state_18233[(24)]);
var inst_18114 = cljs.core.async.close_BANG_(inst_18111);
var state_18233__$1 = state_18233;
var statearr_18293_19846 = state_18233__$1;
(statearr_18293_19846[(2)] = inst_18114);

(statearr_18293_19846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (22))){
var inst_18141 = (state_18233[(8)]);
var inst_18145 = cljs.core.async.close_BANG_(inst_18141);
var state_18233__$1 = state_18233;
var statearr_18294_19848 = state_18233__$1;
(statearr_18294_19848[(2)] = inst_18145);

(statearr_18294_19848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (36))){
var inst_18191 = (state_18233[(23)]);
var inst_18196 = cljs.core.chunk_first(inst_18191);
var inst_18197 = cljs.core.chunk_rest(inst_18191);
var inst_18198 = cljs.core.count(inst_18196);
var inst_18170 = inst_18197;
var inst_18171 = inst_18196;
var inst_18172 = inst_18198;
var inst_18173 = (0);
var state_18233__$1 = (function (){var statearr_18298 = state_18233;
(statearr_18298[(9)] = inst_18171);

(statearr_18298[(10)] = inst_18173);

(statearr_18298[(19)] = inst_18170);

(statearr_18298[(20)] = inst_18172);

return statearr_18298;
})();
var statearr_18300_19854 = state_18233__$1;
(statearr_18300_19854[(2)] = null);

(statearr_18300_19854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (41))){
var inst_18191 = (state_18233[(23)]);
var inst_18207 = (state_18233[(2)]);
var inst_18208 = cljs.core.next(inst_18191);
var inst_18170 = inst_18208;
var inst_18171 = null;
var inst_18172 = (0);
var inst_18173 = (0);
var state_18233__$1 = (function (){var statearr_18304 = state_18233;
(statearr_18304[(9)] = inst_18171);

(statearr_18304[(10)] = inst_18173);

(statearr_18304[(25)] = inst_18207);

(statearr_18304[(19)] = inst_18170);

(statearr_18304[(20)] = inst_18172);

return statearr_18304;
})();
var statearr_18306_19855 = state_18233__$1;
(statearr_18306_19855[(2)] = null);

(statearr_18306_19855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (43))){
var state_18233__$1 = state_18233;
var statearr_18307_19856 = state_18233__$1;
(statearr_18307_19856[(2)] = null);

(statearr_18307_19856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (29))){
var inst_18216 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18312_19857 = state_18233__$1;
(statearr_18312_19857[(2)] = inst_18216);

(statearr_18312_19857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (44))){
var inst_18225 = (state_18233[(2)]);
var state_18233__$1 = (function (){var statearr_18313 = state_18233;
(statearr_18313[(26)] = inst_18225);

return statearr_18313;
})();
var statearr_18314_19858 = state_18233__$1;
(statearr_18314_19858[(2)] = null);

(statearr_18314_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (6))){
var inst_18162 = (state_18233[(27)]);
var inst_18161 = cljs.core.deref(cs);
var inst_18162__$1 = cljs.core.keys(inst_18161);
var inst_18163 = cljs.core.count(inst_18162__$1);
var inst_18164 = cljs.core.reset_BANG_(dctr,inst_18163);
var inst_18169 = cljs.core.seq(inst_18162__$1);
var inst_18170 = inst_18169;
var inst_18171 = null;
var inst_18172 = (0);
var inst_18173 = (0);
var state_18233__$1 = (function (){var statearr_18315 = state_18233;
(statearr_18315[(9)] = inst_18171);

(statearr_18315[(10)] = inst_18173);

(statearr_18315[(28)] = inst_18164);

(statearr_18315[(27)] = inst_18162__$1);

(statearr_18315[(19)] = inst_18170);

(statearr_18315[(20)] = inst_18172);

return statearr_18315;
})();
var statearr_18316_19863 = state_18233__$1;
(statearr_18316_19863[(2)] = null);

(statearr_18316_19863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (28))){
var inst_18170 = (state_18233[(19)]);
var inst_18191 = (state_18233[(23)]);
var inst_18191__$1 = cljs.core.seq(inst_18170);
var state_18233__$1 = (function (){var statearr_18317 = state_18233;
(statearr_18317[(23)] = inst_18191__$1);

return statearr_18317;
})();
if(inst_18191__$1){
var statearr_18318_19867 = state_18233__$1;
(statearr_18318_19867[(1)] = (33));

} else {
var statearr_18319_19868 = state_18233__$1;
(statearr_18319_19868[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (25))){
var inst_18173 = (state_18233[(10)]);
var inst_18172 = (state_18233[(20)]);
var inst_18175 = (inst_18173 < inst_18172);
var inst_18176 = inst_18175;
var state_18233__$1 = state_18233;
if(cljs.core.truth_(inst_18176)){
var statearr_18324_19870 = state_18233__$1;
(statearr_18324_19870[(1)] = (27));

} else {
var statearr_18325_19871 = state_18233__$1;
(statearr_18325_19871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (34))){
var state_18233__$1 = state_18233;
var statearr_18326_19872 = state_18233__$1;
(statearr_18326_19872[(2)] = null);

(statearr_18326_19872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (17))){
var state_18233__$1 = state_18233;
var statearr_18327_19873 = state_18233__$1;
(statearr_18327_19873[(2)] = null);

(statearr_18327_19873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (3))){
var inst_18230 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18233__$1,inst_18230);
} else {
if((state_val_18234 === (12))){
var inst_18157 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18329_19875 = state_18233__$1;
(statearr_18329_19875[(2)] = inst_18157);

(statearr_18329_19875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (2))){
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18233__$1,(4),ch);
} else {
if((state_val_18234 === (23))){
var state_18233__$1 = state_18233;
var statearr_18330_19877 = state_18233__$1;
(statearr_18330_19877[(2)] = null);

(statearr_18330_19877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (35))){
var inst_18214 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18331_19878 = state_18233__$1;
(statearr_18331_19878[(2)] = inst_18214);

(statearr_18331_19878[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (19))){
var inst_18124 = (state_18233[(7)]);
var inst_18129 = cljs.core.chunk_first(inst_18124);
var inst_18130 = cljs.core.chunk_rest(inst_18124);
var inst_18131 = cljs.core.count(inst_18129);
var inst_18099 = inst_18130;
var inst_18100 = inst_18129;
var inst_18101 = inst_18131;
var inst_18102 = (0);
var state_18233__$1 = (function (){var statearr_18332 = state_18233;
(statearr_18332[(14)] = inst_18099);

(statearr_18332[(15)] = inst_18101);

(statearr_18332[(16)] = inst_18102);

(statearr_18332[(17)] = inst_18100);

return statearr_18332;
})();
var statearr_18333_19883 = state_18233__$1;
(statearr_18333_19883[(2)] = null);

(statearr_18333_19883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (11))){
var inst_18099 = (state_18233[(14)]);
var inst_18124 = (state_18233[(7)]);
var inst_18124__$1 = cljs.core.seq(inst_18099);
var state_18233__$1 = (function (){var statearr_18334 = state_18233;
(statearr_18334[(7)] = inst_18124__$1);

return statearr_18334;
})();
if(inst_18124__$1){
var statearr_18335_19897 = state_18233__$1;
(statearr_18335_19897[(1)] = (16));

} else {
var statearr_18336_19898 = state_18233__$1;
(statearr_18336_19898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (9))){
var inst_18159 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18337_19899 = state_18233__$1;
(statearr_18337_19899[(2)] = inst_18159);

(statearr_18337_19899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (5))){
var inst_18097 = cljs.core.deref(cs);
var inst_18098 = cljs.core.seq(inst_18097);
var inst_18099 = inst_18098;
var inst_18100 = null;
var inst_18101 = (0);
var inst_18102 = (0);
var state_18233__$1 = (function (){var statearr_18339 = state_18233;
(statearr_18339[(14)] = inst_18099);

(statearr_18339[(15)] = inst_18101);

(statearr_18339[(16)] = inst_18102);

(statearr_18339[(17)] = inst_18100);

return statearr_18339;
})();
var statearr_18341_19907 = state_18233__$1;
(statearr_18341_19907[(2)] = null);

(statearr_18341_19907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (14))){
var state_18233__$1 = state_18233;
var statearr_18342_19909 = state_18233__$1;
(statearr_18342_19909[(2)] = null);

(statearr_18342_19909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (45))){
var inst_18222 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18343_19910 = state_18233__$1;
(statearr_18343_19910[(2)] = inst_18222);

(statearr_18343_19910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (26))){
var inst_18162 = (state_18233[(27)]);
var inst_18218 = (state_18233[(2)]);
var inst_18219 = cljs.core.seq(inst_18162);
var state_18233__$1 = (function (){var statearr_18344 = state_18233;
(statearr_18344[(29)] = inst_18218);

return statearr_18344;
})();
if(inst_18219){
var statearr_18345_19918 = state_18233__$1;
(statearr_18345_19918[(1)] = (42));

} else {
var statearr_18346_19922 = state_18233__$1;
(statearr_18346_19922[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (16))){
var inst_18124 = (state_18233[(7)]);
var inst_18127 = cljs.core.chunked_seq_QMARK_(inst_18124);
var state_18233__$1 = state_18233;
if(inst_18127){
var statearr_18347_19929 = state_18233__$1;
(statearr_18347_19929[(1)] = (19));

} else {
var statearr_18348_19933 = state_18233__$1;
(statearr_18348_19933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (38))){
var inst_18211 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18349_19936 = state_18233__$1;
(statearr_18349_19936[(2)] = inst_18211);

(statearr_18349_19936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (30))){
var state_18233__$1 = state_18233;
var statearr_18350_19941 = state_18233__$1;
(statearr_18350_19941[(2)] = null);

(statearr_18350_19941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (10))){
var inst_18102 = (state_18233[(16)]);
var inst_18100 = (state_18233[(17)]);
var inst_18110 = cljs.core._nth(inst_18100,inst_18102);
var inst_18111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18110,(0),null);
var inst_18112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18110,(1),null);
var state_18233__$1 = (function (){var statearr_18351 = state_18233;
(statearr_18351[(24)] = inst_18111);

return statearr_18351;
})();
if(cljs.core.truth_(inst_18112)){
var statearr_18352_19968 = state_18233__$1;
(statearr_18352_19968[(1)] = (13));

} else {
var statearr_18353_19969 = state_18233__$1;
(statearr_18353_19969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (18))){
var inst_18155 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18354_19971 = state_18233__$1;
(statearr_18354_19971[(2)] = inst_18155);

(statearr_18354_19971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (42))){
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18233__$1,(45),dchan);
} else {
if((state_val_18234 === (37))){
var inst_18089 = (state_18233[(12)]);
var inst_18201 = (state_18233[(22)]);
var inst_18191 = (state_18233[(23)]);
var inst_18201__$1 = cljs.core.first(inst_18191);
var inst_18202 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18201__$1,inst_18089,done);
var state_18233__$1 = (function (){var statearr_18355 = state_18233;
(statearr_18355[(22)] = inst_18201__$1);

return statearr_18355;
})();
if(cljs.core.truth_(inst_18202)){
var statearr_18356_19988 = state_18233__$1;
(statearr_18356_19988[(1)] = (39));

} else {
var statearr_18357_19995 = state_18233__$1;
(statearr_18357_19995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (8))){
var inst_18101 = (state_18233[(15)]);
var inst_18102 = (state_18233[(16)]);
var inst_18104 = (inst_18102 < inst_18101);
var inst_18105 = inst_18104;
var state_18233__$1 = state_18233;
if(cljs.core.truth_(inst_18105)){
var statearr_18358_20002 = state_18233__$1;
(statearr_18358_20002[(1)] = (10));

} else {
var statearr_18359_20004 = state_18233__$1;
(statearr_18359_20004[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__16778__auto__ = null;
var cljs$core$async$mult_$_state_machine__16778__auto____0 = (function (){
var statearr_18360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18360[(0)] = cljs$core$async$mult_$_state_machine__16778__auto__);

(statearr_18360[(1)] = (1));

return statearr_18360;
});
var cljs$core$async$mult_$_state_machine__16778__auto____1 = (function (state_18233){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18233);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18361){var ex__16781__auto__ = e18361;
var statearr_18362_20023 = state_18233;
(statearr_18362_20023[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18233[(4)]))){
var statearr_18363_20024 = state_18233;
(statearr_18363_20024[(1)] = cljs.core.first((state_18233[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20025 = state_18233;
state_18233 = G__20025;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16778__auto__ = function(state_18233){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16778__auto____1.call(this,state_18233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16778__auto____0;
cljs$core$async$mult_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16778__auto____1;
return cljs$core$async$mult_$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18364 = f__17281__auto__();
(statearr_18364[(6)] = c__17280__auto___19804);

return statearr_18364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18366 = arguments.length;
switch (G__18366) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20036 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20036(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20040 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20040(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20043 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20043(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20051 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20051(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20052 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20052(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20054 = arguments.length;
var i__4865__auto___20055 = (0);
while(true){
if((i__4865__auto___20055 < len__4864__auto___20054)){
args__4870__auto__.push((arguments[i__4865__auto___20055]));

var G__20057 = (i__4865__auto___20055 + (1));
i__4865__auto___20055 = G__20057;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18377){
var map__18378 = p__18377;
var map__18378__$1 = cljs.core.__destructure_map(map__18378);
var opts = map__18378__$1;
var statearr_18379_20060 = state;
(statearr_18379_20060[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18380_20061 = state;
(statearr_18380_20061[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_18381_20062 = state;
(statearr_18381_20062[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18371){
var G__18372 = cljs.core.first(seq18371);
var seq18371__$1 = cljs.core.next(seq18371);
var G__18373 = cljs.core.first(seq18371__$1);
var seq18371__$2 = cljs.core.next(seq18371__$1);
var G__18374 = cljs.core.first(seq18371__$2);
var seq18371__$3 = cljs.core.next(seq18371__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18372,G__18373,G__18374,seq18371__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18384 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18385){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18385 = meta18385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18386,meta18385__$1){
var self__ = this;
var _18386__$1 = this;
return (new cljs.core.async.t_cljs$core$async18384(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18385__$1));
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18386){
var self__ = this;
var _18386__$1 = this;
return self__.meta18385;
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18385","meta18385",1815232207,null)], null);
}));

(cljs.core.async.t_cljs$core$async18384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18384");

(cljs.core.async.t_cljs$core$async18384.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18384.
 */
cljs.core.async.__GT_t_cljs$core$async18384 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18385){
return (new cljs.core.async.t_cljs$core$async18384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18385));
});

}

return (new cljs.core.async.t_cljs$core$async18384(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17280__auto___20082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18479){
var state_val_18480 = (state_18479[(1)]);
if((state_val_18480 === (7))){
var inst_18426 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
if(cljs.core.truth_(inst_18426)){
var statearr_18487_20083 = state_18479__$1;
(statearr_18487_20083[(1)] = (8));

} else {
var statearr_18488_20084 = state_18479__$1;
(statearr_18488_20084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (20))){
var inst_18419 = (state_18479[(7)]);
var state_18479__$1 = state_18479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18479__$1,(23),out,inst_18419);
} else {
if((state_val_18480 === (1))){
var inst_18402 = calc_state();
var inst_18403 = cljs.core.__destructure_map(inst_18402);
var inst_18404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18403,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18403,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18403,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18407 = inst_18402;
var state_18479__$1 = (function (){var statearr_18493 = state_18479;
(statearr_18493[(8)] = inst_18404);

(statearr_18493[(9)] = inst_18406);

(statearr_18493[(10)] = inst_18405);

(statearr_18493[(11)] = inst_18407);

return statearr_18493;
})();
var statearr_18497_20097 = state_18479__$1;
(statearr_18497_20097[(2)] = null);

(statearr_18497_20097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (24))){
var inst_18410 = (state_18479[(12)]);
var inst_18407 = inst_18410;
var state_18479__$1 = (function (){var statearr_18501 = state_18479;
(statearr_18501[(11)] = inst_18407);

return statearr_18501;
})();
var statearr_18502_20105 = state_18479__$1;
(statearr_18502_20105[(2)] = null);

(statearr_18502_20105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (4))){
var inst_18419 = (state_18479[(7)]);
var inst_18421 = (state_18479[(13)]);
var inst_18418 = (state_18479[(2)]);
var inst_18419__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18418,(0),null);
var inst_18420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18418,(1),null);
var inst_18421__$1 = (inst_18419__$1 == null);
var state_18479__$1 = (function (){var statearr_18506 = state_18479;
(statearr_18506[(14)] = inst_18420);

(statearr_18506[(7)] = inst_18419__$1);

(statearr_18506[(13)] = inst_18421__$1);

return statearr_18506;
})();
if(cljs.core.truth_(inst_18421__$1)){
var statearr_18507_20120 = state_18479__$1;
(statearr_18507_20120[(1)] = (5));

} else {
var statearr_18508_20121 = state_18479__$1;
(statearr_18508_20121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (15))){
var inst_18411 = (state_18479[(15)]);
var inst_18440 = (state_18479[(16)]);
var inst_18440__$1 = cljs.core.empty_QMARK_(inst_18411);
var state_18479__$1 = (function (){var statearr_18509 = state_18479;
(statearr_18509[(16)] = inst_18440__$1);

return statearr_18509;
})();
if(inst_18440__$1){
var statearr_18510_20126 = state_18479__$1;
(statearr_18510_20126[(1)] = (17));

} else {
var statearr_18511_20127 = state_18479__$1;
(statearr_18511_20127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (21))){
var inst_18410 = (state_18479[(12)]);
var inst_18407 = inst_18410;
var state_18479__$1 = (function (){var statearr_18512 = state_18479;
(statearr_18512[(11)] = inst_18407);

return statearr_18512;
})();
var statearr_18513_20128 = state_18479__$1;
(statearr_18513_20128[(2)] = null);

(statearr_18513_20128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (13))){
var inst_18433 = (state_18479[(2)]);
var inst_18434 = calc_state();
var inst_18407 = inst_18434;
var state_18479__$1 = (function (){var statearr_18514 = state_18479;
(statearr_18514[(17)] = inst_18433);

(statearr_18514[(11)] = inst_18407);

return statearr_18514;
})();
var statearr_18515_20129 = state_18479__$1;
(statearr_18515_20129[(2)] = null);

(statearr_18515_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (22))){
var inst_18467 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
var statearr_18516_20130 = state_18479__$1;
(statearr_18516_20130[(2)] = inst_18467);

(statearr_18516_20130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (6))){
var inst_18420 = (state_18479[(14)]);
var inst_18424 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18420,change);
var state_18479__$1 = state_18479;
var statearr_18521_20136 = state_18479__$1;
(statearr_18521_20136[(2)] = inst_18424);

(statearr_18521_20136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (25))){
var state_18479__$1 = state_18479;
var statearr_18522_20137 = state_18479__$1;
(statearr_18522_20137[(2)] = null);

(statearr_18522_20137[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (17))){
var inst_18420 = (state_18479[(14)]);
var inst_18412 = (state_18479[(18)]);
var inst_18442 = (inst_18412.cljs$core$IFn$_invoke$arity$1 ? inst_18412.cljs$core$IFn$_invoke$arity$1(inst_18420) : inst_18412.call(null,inst_18420));
var inst_18443 = cljs.core.not(inst_18442);
var state_18479__$1 = state_18479;
var statearr_18523_20138 = state_18479__$1;
(statearr_18523_20138[(2)] = inst_18443);

(statearr_18523_20138[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (3))){
var inst_18471 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18479__$1,inst_18471);
} else {
if((state_val_18480 === (12))){
var state_18479__$1 = state_18479;
var statearr_18524_20139 = state_18479__$1;
(statearr_18524_20139[(2)] = null);

(statearr_18524_20139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (2))){
var inst_18410 = (state_18479[(12)]);
var inst_18407 = (state_18479[(11)]);
var inst_18410__$1 = cljs.core.__destructure_map(inst_18407);
var inst_18411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18410__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18410__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18410__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18479__$1 = (function (){var statearr_18525 = state_18479;
(statearr_18525[(15)] = inst_18411);

(statearr_18525[(12)] = inst_18410__$1);

(statearr_18525[(18)] = inst_18412);

return statearr_18525;
})();
return cljs.core.async.ioc_alts_BANG_(state_18479__$1,(4),inst_18413);
} else {
if((state_val_18480 === (23))){
var inst_18458 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
if(cljs.core.truth_(inst_18458)){
var statearr_18526_20140 = state_18479__$1;
(statearr_18526_20140[(1)] = (24));

} else {
var statearr_18527_20141 = state_18479__$1;
(statearr_18527_20141[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (19))){
var inst_18446 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
var statearr_18528_20142 = state_18479__$1;
(statearr_18528_20142[(2)] = inst_18446);

(statearr_18528_20142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (11))){
var inst_18420 = (state_18479[(14)]);
var inst_18430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18420);
var state_18479__$1 = state_18479;
var statearr_18533_20143 = state_18479__$1;
(statearr_18533_20143[(2)] = inst_18430);

(statearr_18533_20143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (9))){
var inst_18411 = (state_18479[(15)]);
var inst_18420 = (state_18479[(14)]);
var inst_18437 = (state_18479[(19)]);
var inst_18437__$1 = (inst_18411.cljs$core$IFn$_invoke$arity$1 ? inst_18411.cljs$core$IFn$_invoke$arity$1(inst_18420) : inst_18411.call(null,inst_18420));
var state_18479__$1 = (function (){var statearr_18534 = state_18479;
(statearr_18534[(19)] = inst_18437__$1);

return statearr_18534;
})();
if(cljs.core.truth_(inst_18437__$1)){
var statearr_18535_20144 = state_18479__$1;
(statearr_18535_20144[(1)] = (14));

} else {
var statearr_18536_20145 = state_18479__$1;
(statearr_18536_20145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (5))){
var inst_18421 = (state_18479[(13)]);
var state_18479__$1 = state_18479;
var statearr_18539_20146 = state_18479__$1;
(statearr_18539_20146[(2)] = inst_18421);

(statearr_18539_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (14))){
var inst_18437 = (state_18479[(19)]);
var state_18479__$1 = state_18479;
var statearr_18540_20147 = state_18479__$1;
(statearr_18540_20147[(2)] = inst_18437);

(statearr_18540_20147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (26))){
var inst_18463 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
var statearr_18542_20148 = state_18479__$1;
(statearr_18542_20148[(2)] = inst_18463);

(statearr_18542_20148[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (16))){
var inst_18448 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
if(cljs.core.truth_(inst_18448)){
var statearr_18543_20153 = state_18479__$1;
(statearr_18543_20153[(1)] = (20));

} else {
var statearr_18545_20155 = state_18479__$1;
(statearr_18545_20155[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (10))){
var inst_18469 = (state_18479[(2)]);
var state_18479__$1 = state_18479;
var statearr_18546_20160 = state_18479__$1;
(statearr_18546_20160[(2)] = inst_18469);

(statearr_18546_20160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (18))){
var inst_18440 = (state_18479[(16)]);
var state_18479__$1 = state_18479;
var statearr_18547_20168 = state_18479__$1;
(statearr_18547_20168[(2)] = inst_18440);

(statearr_18547_20168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18480 === (8))){
var inst_18419 = (state_18479[(7)]);
var inst_18428 = (inst_18419 == null);
var state_18479__$1 = state_18479;
if(cljs.core.truth_(inst_18428)){
var statearr_18548_20174 = state_18479__$1;
(statearr_18548_20174[(1)] = (11));

} else {
var statearr_18549_20175 = state_18479__$1;
(statearr_18549_20175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__16778__auto__ = null;
var cljs$core$async$mix_$_state_machine__16778__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$mix_$_state_machine__16778__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$mix_$_state_machine__16778__auto____1 = (function (state_18479){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18479);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18551){var ex__16781__auto__ = e18551;
var statearr_18552_20177 = state_18479;
(statearr_18552_20177[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18479[(4)]))){
var statearr_18553_20179 = state_18479;
(statearr_18553_20179[(1)] = cljs.core.first((state_18479[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20184 = state_18479;
state_18479 = G__20184;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16778__auto__ = function(state_18479){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16778__auto____1.call(this,state_18479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16778__auto____0;
cljs$core$async$mix_$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16778__auto____1;
return cljs$core$async$mix_$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18556 = f__17281__auto__();
(statearr_18556[(6)] = c__17280__auto___20082);

return statearr_18556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20208 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20208(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20224 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20224(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20240 = (function() {
var G__20241 = null;
var G__20241__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20241__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20241 = function(p,v){
switch(arguments.length){
case 1:
return G__20241__1.call(this,p);
case 2:
return G__20241__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20241.cljs$core$IFn$_invoke$arity$1 = G__20241__1;
G__20241.cljs$core$IFn$_invoke$arity$2 = G__20241__2;
return G__20241;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18570 = arguments.length;
switch (G__18570) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20240(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20240(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18578 = arguments.length;
switch (G__18578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18573_SHARP_){
if(cljs.core.truth_((p1__18573_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18573_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18573_SHARP_.call(null,topic)))){
return p1__18573_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18573_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18580 = meta18580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18581,meta18580__$1){
var self__ = this;
var _18581__$1 = this;
return (new cljs.core.async.t_cljs$core$async18579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18580__$1));
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18581){
var self__ = this;
var _18581__$1 = this;
return self__.meta18580;
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18580","meta18580",-347324369,null)], null);
}));

(cljs.core.async.t_cljs$core$async18579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18579");

(cljs.core.async.t_cljs$core$async18579.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18579.
 */
cljs.core.async.__GT_t_cljs$core$async18579 = (function cljs$core$async$__GT_t_cljs$core$async18579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18580){
return (new cljs.core.async.t_cljs$core$async18579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18580));
});

}

return (new cljs.core.async.t_cljs$core$async18579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17280__auto___20258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18663){
var state_val_18664 = (state_18663[(1)]);
if((state_val_18664 === (7))){
var inst_18659 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18668_20261 = state_18663__$1;
(statearr_18668_20261[(2)] = inst_18659);

(statearr_18668_20261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (20))){
var state_18663__$1 = state_18663;
var statearr_18669_20262 = state_18663__$1;
(statearr_18669_20262[(2)] = null);

(statearr_18669_20262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (1))){
var state_18663__$1 = state_18663;
var statearr_18670_20263 = state_18663__$1;
(statearr_18670_20263[(2)] = null);

(statearr_18670_20263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (24))){
var inst_18642 = (state_18663[(7)]);
var inst_18651 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18642);
var state_18663__$1 = state_18663;
var statearr_18671_20264 = state_18663__$1;
(statearr_18671_20264[(2)] = inst_18651);

(statearr_18671_20264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (4))){
var inst_18592 = (state_18663[(8)]);
var inst_18592__$1 = (state_18663[(2)]);
var inst_18593 = (inst_18592__$1 == null);
var state_18663__$1 = (function (){var statearr_18672 = state_18663;
(statearr_18672[(8)] = inst_18592__$1);

return statearr_18672;
})();
if(cljs.core.truth_(inst_18593)){
var statearr_18673_20267 = state_18663__$1;
(statearr_18673_20267[(1)] = (5));

} else {
var statearr_18674_20268 = state_18663__$1;
(statearr_18674_20268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (15))){
var inst_18636 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18675_20269 = state_18663__$1;
(statearr_18675_20269[(2)] = inst_18636);

(statearr_18675_20269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (21))){
var inst_18656 = (state_18663[(2)]);
var state_18663__$1 = (function (){var statearr_18676 = state_18663;
(statearr_18676[(9)] = inst_18656);

return statearr_18676;
})();
var statearr_18677_20270 = state_18663__$1;
(statearr_18677_20270[(2)] = null);

(statearr_18677_20270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (13))){
var inst_18616 = (state_18663[(10)]);
var inst_18618 = cljs.core.chunked_seq_QMARK_(inst_18616);
var state_18663__$1 = state_18663;
if(inst_18618){
var statearr_18678_20272 = state_18663__$1;
(statearr_18678_20272[(1)] = (16));

} else {
var statearr_18679_20273 = state_18663__$1;
(statearr_18679_20273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (22))){
var inst_18648 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
if(cljs.core.truth_(inst_18648)){
var statearr_18680_20274 = state_18663__$1;
(statearr_18680_20274[(1)] = (23));

} else {
var statearr_18681_20275 = state_18663__$1;
(statearr_18681_20275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (6))){
var inst_18644 = (state_18663[(11)]);
var inst_18592 = (state_18663[(8)]);
var inst_18642 = (state_18663[(7)]);
var inst_18642__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18592) : topic_fn.call(null,inst_18592));
var inst_18643 = cljs.core.deref(mults);
var inst_18644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18643,inst_18642__$1);
var state_18663__$1 = (function (){var statearr_18682 = state_18663;
(statearr_18682[(11)] = inst_18644__$1);

(statearr_18682[(7)] = inst_18642__$1);

return statearr_18682;
})();
if(cljs.core.truth_(inst_18644__$1)){
var statearr_18683_20280 = state_18663__$1;
(statearr_18683_20280[(1)] = (19));

} else {
var statearr_18684_20281 = state_18663__$1;
(statearr_18684_20281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (25))){
var inst_18653 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18685_20282 = state_18663__$1;
(statearr_18685_20282[(2)] = inst_18653);

(statearr_18685_20282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (17))){
var inst_18616 = (state_18663[(10)]);
var inst_18626 = cljs.core.first(inst_18616);
var inst_18627 = cljs.core.async.muxch_STAR_(inst_18626);
var inst_18628 = cljs.core.async.close_BANG_(inst_18627);
var inst_18629 = cljs.core.next(inst_18616);
var inst_18602 = inst_18629;
var inst_18603 = null;
var inst_18604 = (0);
var inst_18605 = (0);
var state_18663__$1 = (function (){var statearr_18686 = state_18663;
(statearr_18686[(12)] = inst_18602);

(statearr_18686[(13)] = inst_18628);

(statearr_18686[(14)] = inst_18605);

(statearr_18686[(15)] = inst_18604);

(statearr_18686[(16)] = inst_18603);

return statearr_18686;
})();
var statearr_18687_20284 = state_18663__$1;
(statearr_18687_20284[(2)] = null);

(statearr_18687_20284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (3))){
var inst_18661 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18663__$1,inst_18661);
} else {
if((state_val_18664 === (12))){
var inst_18638 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18688_20286 = state_18663__$1;
(statearr_18688_20286[(2)] = inst_18638);

(statearr_18688_20286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (2))){
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18663__$1,(4),ch);
} else {
if((state_val_18664 === (23))){
var state_18663__$1 = state_18663;
var statearr_18689_20287 = state_18663__$1;
(statearr_18689_20287[(2)] = null);

(statearr_18689_20287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (19))){
var inst_18644 = (state_18663[(11)]);
var inst_18592 = (state_18663[(8)]);
var inst_18646 = cljs.core.async.muxch_STAR_(inst_18644);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18663__$1,(22),inst_18646,inst_18592);
} else {
if((state_val_18664 === (11))){
var inst_18602 = (state_18663[(12)]);
var inst_18616 = (state_18663[(10)]);
var inst_18616__$1 = cljs.core.seq(inst_18602);
var state_18663__$1 = (function (){var statearr_18690 = state_18663;
(statearr_18690[(10)] = inst_18616__$1);

return statearr_18690;
})();
if(inst_18616__$1){
var statearr_18691_20290 = state_18663__$1;
(statearr_18691_20290[(1)] = (13));

} else {
var statearr_18692_20291 = state_18663__$1;
(statearr_18692_20291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (9))){
var inst_18640 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18693_20292 = state_18663__$1;
(statearr_18693_20292[(2)] = inst_18640);

(statearr_18693_20292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (5))){
var inst_18599 = cljs.core.deref(mults);
var inst_18600 = cljs.core.vals(inst_18599);
var inst_18601 = cljs.core.seq(inst_18600);
var inst_18602 = inst_18601;
var inst_18603 = null;
var inst_18604 = (0);
var inst_18605 = (0);
var state_18663__$1 = (function (){var statearr_18694 = state_18663;
(statearr_18694[(12)] = inst_18602);

(statearr_18694[(14)] = inst_18605);

(statearr_18694[(15)] = inst_18604);

(statearr_18694[(16)] = inst_18603);

return statearr_18694;
})();
var statearr_18695_20301 = state_18663__$1;
(statearr_18695_20301[(2)] = null);

(statearr_18695_20301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (14))){
var state_18663__$1 = state_18663;
var statearr_18699_20302 = state_18663__$1;
(statearr_18699_20302[(2)] = null);

(statearr_18699_20302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (16))){
var inst_18616 = (state_18663[(10)]);
var inst_18620 = cljs.core.chunk_first(inst_18616);
var inst_18621 = cljs.core.chunk_rest(inst_18616);
var inst_18622 = cljs.core.count(inst_18620);
var inst_18602 = inst_18621;
var inst_18603 = inst_18620;
var inst_18604 = inst_18622;
var inst_18605 = (0);
var state_18663__$1 = (function (){var statearr_18700 = state_18663;
(statearr_18700[(12)] = inst_18602);

(statearr_18700[(14)] = inst_18605);

(statearr_18700[(15)] = inst_18604);

(statearr_18700[(16)] = inst_18603);

return statearr_18700;
})();
var statearr_18701_20303 = state_18663__$1;
(statearr_18701_20303[(2)] = null);

(statearr_18701_20303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (10))){
var inst_18602 = (state_18663[(12)]);
var inst_18605 = (state_18663[(14)]);
var inst_18604 = (state_18663[(15)]);
var inst_18603 = (state_18663[(16)]);
var inst_18610 = cljs.core._nth(inst_18603,inst_18605);
var inst_18611 = cljs.core.async.muxch_STAR_(inst_18610);
var inst_18612 = cljs.core.async.close_BANG_(inst_18611);
var inst_18613 = (inst_18605 + (1));
var tmp18696 = inst_18602;
var tmp18697 = inst_18604;
var tmp18698 = inst_18603;
var inst_18602__$1 = tmp18696;
var inst_18603__$1 = tmp18698;
var inst_18604__$1 = tmp18697;
var inst_18605__$1 = inst_18613;
var state_18663__$1 = (function (){var statearr_18702 = state_18663;
(statearr_18702[(17)] = inst_18612);

(statearr_18702[(12)] = inst_18602__$1);

(statearr_18702[(14)] = inst_18605__$1);

(statearr_18702[(15)] = inst_18604__$1);

(statearr_18702[(16)] = inst_18603__$1);

return statearr_18702;
})();
var statearr_18703_20304 = state_18663__$1;
(statearr_18703_20304[(2)] = null);

(statearr_18703_20304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (18))){
var inst_18633 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18705_20305 = state_18663__$1;
(statearr_18705_20305[(2)] = inst_18633);

(statearr_18705_20305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (8))){
var inst_18605 = (state_18663[(14)]);
var inst_18604 = (state_18663[(15)]);
var inst_18607 = (inst_18605 < inst_18604);
var inst_18608 = inst_18607;
var state_18663__$1 = state_18663;
if(cljs.core.truth_(inst_18608)){
var statearr_18706_20307 = state_18663__$1;
(statearr_18706_20307[(1)] = (10));

} else {
var statearr_18707_20308 = state_18663__$1;
(statearr_18707_20308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_18708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18708[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_18708[(1)] = (1));

return statearr_18708;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_18663){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18663);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18709){var ex__16781__auto__ = e18709;
var statearr_18710_20309 = state_18663;
(statearr_18710_20309[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18663[(4)]))){
var statearr_18711_20314 = state_18663;
(statearr_18711_20314[(1)] = cljs.core.first((state_18663[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20315 = state_18663;
state_18663 = G__20315;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18715 = f__17281__auto__();
(statearr_18715[(6)] = c__17280__auto___20258);

return statearr_18715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18717 = arguments.length;
switch (G__18717) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18723 = arguments.length;
switch (G__18723) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18725 = arguments.length;
switch (G__18725) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17280__auto___20336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18808){
var state_val_18809 = (state_18808[(1)]);
if((state_val_18809 === (7))){
var state_18808__$1 = state_18808;
var statearr_18812_20337 = state_18808__$1;
(statearr_18812_20337[(2)] = null);

(statearr_18812_20337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (1))){
var state_18808__$1 = state_18808;
var statearr_18813_20338 = state_18808__$1;
(statearr_18813_20338[(2)] = null);

(statearr_18813_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (4))){
var inst_18728 = (state_18808[(7)]);
var inst_18729 = (state_18808[(8)]);
var inst_18731 = (inst_18729 < inst_18728);
var state_18808__$1 = state_18808;
if(cljs.core.truth_(inst_18731)){
var statearr_18814_20342 = state_18808__$1;
(statearr_18814_20342[(1)] = (6));

} else {
var statearr_18815_20343 = state_18808__$1;
(statearr_18815_20343[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (15))){
var inst_18788 = (state_18808[(9)]);
var inst_18793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18788);
var state_18808__$1 = state_18808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18808__$1,(17),out,inst_18793);
} else {
if((state_val_18809 === (13))){
var inst_18788 = (state_18808[(9)]);
var inst_18788__$1 = (state_18808[(2)]);
var inst_18789 = cljs.core.some(cljs.core.nil_QMARK_,inst_18788__$1);
var state_18808__$1 = (function (){var statearr_18817 = state_18808;
(statearr_18817[(9)] = inst_18788__$1);

return statearr_18817;
})();
if(cljs.core.truth_(inst_18789)){
var statearr_18818_20347 = state_18808__$1;
(statearr_18818_20347[(1)] = (14));

} else {
var statearr_18819_20348 = state_18808__$1;
(statearr_18819_20348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (6))){
var state_18808__$1 = state_18808;
var statearr_18820_20352 = state_18808__$1;
(statearr_18820_20352[(2)] = null);

(statearr_18820_20352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (17))){
var inst_18795 = (state_18808[(2)]);
var state_18808__$1 = (function (){var statearr_18825 = state_18808;
(statearr_18825[(10)] = inst_18795);

return statearr_18825;
})();
var statearr_18826_20353 = state_18808__$1;
(statearr_18826_20353[(2)] = null);

(statearr_18826_20353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (3))){
var inst_18800 = (state_18808[(2)]);
var state_18808__$1 = state_18808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18808__$1,inst_18800);
} else {
if((state_val_18809 === (12))){
var _ = (function (){var statearr_18827 = state_18808;
(statearr_18827[(4)] = cljs.core.rest((state_18808[(4)])));

return statearr_18827;
})();
var state_18808__$1 = state_18808;
var ex18824 = (state_18808__$1[(2)]);
var statearr_18828_20358 = state_18808__$1;
(statearr_18828_20358[(5)] = ex18824);


if((ex18824 instanceof Object)){
var statearr_18829_20359 = state_18808__$1;
(statearr_18829_20359[(1)] = (11));

(statearr_18829_20359[(5)] = null);

} else {
throw ex18824;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (2))){
var inst_18727 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18728 = cnt;
var inst_18729 = (0);
var state_18808__$1 = (function (){var statearr_18830 = state_18808;
(statearr_18830[(7)] = inst_18728);

(statearr_18830[(8)] = inst_18729);

(statearr_18830[(11)] = inst_18727);

return statearr_18830;
})();
var statearr_18831_20361 = state_18808__$1;
(statearr_18831_20361[(2)] = null);

(statearr_18831_20361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (11))){
var inst_18753 = (state_18808[(2)]);
var inst_18754 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18808__$1 = (function (){var statearr_18832 = state_18808;
(statearr_18832[(12)] = inst_18753);

return statearr_18832;
})();
var statearr_18833_20364 = state_18808__$1;
(statearr_18833_20364[(2)] = inst_18754);

(statearr_18833_20364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (9))){
var inst_18729 = (state_18808[(8)]);
var _ = (function (){var statearr_18834 = state_18808;
(statearr_18834[(4)] = cljs.core.cons((12),(state_18808[(4)])));

return statearr_18834;
})();
var inst_18760 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18729) : chs__$1.call(null,inst_18729));
var inst_18761 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18729) : done.call(null,inst_18729));
var inst_18765 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18760,inst_18761);
var ___$1 = (function (){var statearr_18835 = state_18808;
(statearr_18835[(4)] = cljs.core.rest((state_18808[(4)])));

return statearr_18835;
})();
var state_18808__$1 = state_18808;
var statearr_18836_20367 = state_18808__$1;
(statearr_18836_20367[(2)] = inst_18765);

(statearr_18836_20367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (5))){
var inst_18780 = (state_18808[(2)]);
var state_18808__$1 = (function (){var statearr_18837 = state_18808;
(statearr_18837[(13)] = inst_18780);

return statearr_18837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18808__$1,(13),dchan);
} else {
if((state_val_18809 === (14))){
var inst_18791 = cljs.core.async.close_BANG_(out);
var state_18808__$1 = state_18808;
var statearr_18838_20370 = state_18808__$1;
(statearr_18838_20370[(2)] = inst_18791);

(statearr_18838_20370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (16))){
var inst_18798 = (state_18808[(2)]);
var state_18808__$1 = state_18808;
var statearr_18839_20371 = state_18808__$1;
(statearr_18839_20371[(2)] = inst_18798);

(statearr_18839_20371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (10))){
var inst_18729 = (state_18808[(8)]);
var inst_18771 = (state_18808[(2)]);
var inst_18774 = (inst_18729 + (1));
var inst_18729__$1 = inst_18774;
var state_18808__$1 = (function (){var statearr_18840 = state_18808;
(statearr_18840[(8)] = inst_18729__$1);

(statearr_18840[(14)] = inst_18771);

return statearr_18840;
})();
var statearr_18841_20372 = state_18808__$1;
(statearr_18841_20372[(2)] = null);

(statearr_18841_20372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (8))){
var inst_18778 = (state_18808[(2)]);
var state_18808__$1 = state_18808;
var statearr_18842_20373 = state_18808__$1;
(statearr_18842_20373[(2)] = inst_18778);

(statearr_18842_20373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_18843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18843[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_18843[(1)] = (1));

return statearr_18843;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_18808){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18808);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18844){var ex__16781__auto__ = e18844;
var statearr_18845_20376 = state_18808;
(statearr_18845_20376[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18808[(4)]))){
var statearr_18846_20377 = state_18808;
(statearr_18846_20377[(1)] = cljs.core.first((state_18808[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20379 = state_18808;
state_18808 = G__20379;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_18808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_18808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18847 = f__17281__auto__();
(statearr_18847[(6)] = c__17280__auto___20336);

return statearr_18847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18850 = arguments.length;
switch (G__18850) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18893){
var state_val_18894 = (state_18893[(1)]);
if((state_val_18894 === (7))){
var inst_18872 = (state_18893[(7)]);
var inst_18873 = (state_18893[(8)]);
var inst_18872__$1 = (state_18893[(2)]);
var inst_18873__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18872__$1,(0),null);
var inst_18874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18872__$1,(1),null);
var inst_18875 = (inst_18873__$1 == null);
var state_18893__$1 = (function (){var statearr_18895 = state_18893;
(statearr_18895[(9)] = inst_18874);

(statearr_18895[(7)] = inst_18872__$1);

(statearr_18895[(8)] = inst_18873__$1);

return statearr_18895;
})();
if(cljs.core.truth_(inst_18875)){
var statearr_18896_20384 = state_18893__$1;
(statearr_18896_20384[(1)] = (8));

} else {
var statearr_18897_20385 = state_18893__$1;
(statearr_18897_20385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (1))){
var inst_18862 = cljs.core.vec(chs);
var inst_18863 = inst_18862;
var state_18893__$1 = (function (){var statearr_18898 = state_18893;
(statearr_18898[(10)] = inst_18863);

return statearr_18898;
})();
var statearr_18899_20386 = state_18893__$1;
(statearr_18899_20386[(2)] = null);

(statearr_18899_20386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (4))){
var inst_18863 = (state_18893[(10)]);
var state_18893__$1 = state_18893;
return cljs.core.async.ioc_alts_BANG_(state_18893__$1,(7),inst_18863);
} else {
if((state_val_18894 === (6))){
var inst_18889 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18900_20387 = state_18893__$1;
(statearr_18900_20387[(2)] = inst_18889);

(statearr_18900_20387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (3))){
var inst_18891 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18893__$1,inst_18891);
} else {
if((state_val_18894 === (2))){
var inst_18863 = (state_18893[(10)]);
var inst_18865 = cljs.core.count(inst_18863);
var inst_18866 = (inst_18865 > (0));
var state_18893__$1 = state_18893;
if(cljs.core.truth_(inst_18866)){
var statearr_18902_20388 = state_18893__$1;
(statearr_18902_20388[(1)] = (4));

} else {
var statearr_18903_20389 = state_18893__$1;
(statearr_18903_20389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (11))){
var inst_18863 = (state_18893[(10)]);
var inst_18882 = (state_18893[(2)]);
var tmp18901 = inst_18863;
var inst_18863__$1 = tmp18901;
var state_18893__$1 = (function (){var statearr_18904 = state_18893;
(statearr_18904[(11)] = inst_18882);

(statearr_18904[(10)] = inst_18863__$1);

return statearr_18904;
})();
var statearr_18905_20390 = state_18893__$1;
(statearr_18905_20390[(2)] = null);

(statearr_18905_20390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (9))){
var inst_18873 = (state_18893[(8)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18893__$1,(11),out,inst_18873);
} else {
if((state_val_18894 === (5))){
var inst_18887 = cljs.core.async.close_BANG_(out);
var state_18893__$1 = state_18893;
var statearr_18908_20391 = state_18893__$1;
(statearr_18908_20391[(2)] = inst_18887);

(statearr_18908_20391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (10))){
var inst_18885 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18909_20392 = state_18893__$1;
(statearr_18909_20392[(2)] = inst_18885);

(statearr_18909_20392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (8))){
var inst_18874 = (state_18893[(9)]);
var inst_18872 = (state_18893[(7)]);
var inst_18873 = (state_18893[(8)]);
var inst_18863 = (state_18893[(10)]);
var inst_18877 = (function (){var cs = inst_18863;
var vec__18868 = inst_18872;
var v = inst_18873;
var c = inst_18874;
return (function (p1__18848_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18848_SHARP_);
});
})();
var inst_18878 = cljs.core.filterv(inst_18877,inst_18863);
var inst_18863__$1 = inst_18878;
var state_18893__$1 = (function (){var statearr_18912 = state_18893;
(statearr_18912[(10)] = inst_18863__$1);

return statearr_18912;
})();
var statearr_18914_20393 = state_18893__$1;
(statearr_18914_20393[(2)] = null);

(statearr_18914_20393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_18916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18916[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_18916[(1)] = (1));

return statearr_18916;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_18893){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18893);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18917){var ex__16781__auto__ = e18917;
var statearr_18918_20398 = state_18893;
(statearr_18918_20398[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18893[(4)]))){
var statearr_18919_20399 = state_18893;
(statearr_18919_20399[(1)] = cljs.core.first((state_18893[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20400 = state_18893;
state_18893 = G__20400;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18922 = f__17281__auto__();
(statearr_18922[(6)] = c__17280__auto___20382);

return statearr_18922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18924 = arguments.length;
switch (G__18924) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_18948){
var state_val_18949 = (state_18948[(1)]);
if((state_val_18949 === (7))){
var inst_18930 = (state_18948[(7)]);
var inst_18930__$1 = (state_18948[(2)]);
var inst_18931 = (inst_18930__$1 == null);
var inst_18932 = cljs.core.not(inst_18931);
var state_18948__$1 = (function (){var statearr_18950 = state_18948;
(statearr_18950[(7)] = inst_18930__$1);

return statearr_18950;
})();
if(inst_18932){
var statearr_18951_20415 = state_18948__$1;
(statearr_18951_20415[(1)] = (8));

} else {
var statearr_18952_20416 = state_18948__$1;
(statearr_18952_20416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (1))){
var inst_18925 = (0);
var state_18948__$1 = (function (){var statearr_18953 = state_18948;
(statearr_18953[(8)] = inst_18925);

return statearr_18953;
})();
var statearr_18957_20417 = state_18948__$1;
(statearr_18957_20417[(2)] = null);

(statearr_18957_20417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (4))){
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18948__$1,(7),ch);
} else {
if((state_val_18949 === (6))){
var inst_18943 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18958_20421 = state_18948__$1;
(statearr_18958_20421[(2)] = inst_18943);

(statearr_18958_20421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (3))){
var inst_18945 = (state_18948[(2)]);
var inst_18946 = cljs.core.async.close_BANG_(out);
var state_18948__$1 = (function (){var statearr_18959 = state_18948;
(statearr_18959[(9)] = inst_18945);

return statearr_18959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18948__$1,inst_18946);
} else {
if((state_val_18949 === (2))){
var inst_18925 = (state_18948[(8)]);
var inst_18927 = (inst_18925 < n);
var state_18948__$1 = state_18948;
if(cljs.core.truth_(inst_18927)){
var statearr_18960_20423 = state_18948__$1;
(statearr_18960_20423[(1)] = (4));

} else {
var statearr_18961_20424 = state_18948__$1;
(statearr_18961_20424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (11))){
var inst_18925 = (state_18948[(8)]);
var inst_18935 = (state_18948[(2)]);
var inst_18936 = (inst_18925 + (1));
var inst_18925__$1 = inst_18936;
var state_18948__$1 = (function (){var statearr_18962 = state_18948;
(statearr_18962[(8)] = inst_18925__$1);

(statearr_18962[(10)] = inst_18935);

return statearr_18962;
})();
var statearr_18963_20426 = state_18948__$1;
(statearr_18963_20426[(2)] = null);

(statearr_18963_20426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (9))){
var state_18948__$1 = state_18948;
var statearr_18964_20427 = state_18948__$1;
(statearr_18964_20427[(2)] = null);

(statearr_18964_20427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (5))){
var state_18948__$1 = state_18948;
var statearr_18965_20428 = state_18948__$1;
(statearr_18965_20428[(2)] = null);

(statearr_18965_20428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (10))){
var inst_18940 = (state_18948[(2)]);
var state_18948__$1 = state_18948;
var statearr_18969_20429 = state_18948__$1;
(statearr_18969_20429[(2)] = inst_18940);

(statearr_18969_20429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18949 === (8))){
var inst_18930 = (state_18948[(7)]);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18948__$1,(11),out,inst_18930);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_18977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18977[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_18977[(1)] = (1));

return statearr_18977;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_18948){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_18948);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e18981){var ex__16781__auto__ = e18981;
var statearr_18982_20436 = state_18948;
(statearr_18982_20436[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_18948[(4)]))){
var statearr_18983_20437 = state_18948;
(statearr_18983_20437[(1)] = cljs.core.first((state_18948[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20439 = state_18948;
state_18948 = G__20439;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_18948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_18948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_18984 = f__17281__auto__();
(statearr_18984[(6)] = c__17280__auto___20406);

return statearr_18984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18996 = (function (f,ch,meta18997){
this.f = f;
this.ch = ch;
this.meta18997 = meta18997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18998,meta18997__$1){
var self__ = this;
var _18998__$1 = this;
return (new cljs.core.async.t_cljs$core$async18996(self__.f,self__.ch,meta18997__$1));
}));

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18998){
var self__ = this;
var _18998__$1 = this;
return self__.meta18997;
}));

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19016 = (function (f,ch,meta18997,_,fn1,meta19017){
this.f = f;
this.ch = ch;
this.meta18997 = meta18997;
this._ = _;
this.fn1 = fn1;
this.meta19017 = meta19017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19018,meta19017__$1){
var self__ = this;
var _19018__$1 = this;
return (new cljs.core.async.t_cljs$core$async19016(self__.f,self__.ch,self__.meta18997,self__._,self__.fn1,meta19017__$1));
}));

(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19018){
var self__ = this;
var _19018__$1 = this;
return self__.meta19017;
}));

(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18992_SHARP_){
var G__19021 = (((p1__18992_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18992_SHARP_) : self__.f.call(null,p1__18992_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19021) : f1.call(null,G__19021));
});
}));

(cljs.core.async.t_cljs$core$async19016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18997","meta18997",-1799243888,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18996","cljs.core.async/t_cljs$core$async18996",1304657897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19017","meta19017",415944172,null)], null);
}));

(cljs.core.async.t_cljs$core$async19016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19016");

(cljs.core.async.t_cljs$core$async19016.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19016.
 */
cljs.core.async.__GT_t_cljs$core$async19016 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19016(f__$1,ch__$1,meta18997__$1,___$2,fn1__$1,meta19017){
return (new cljs.core.async.t_cljs$core$async19016(f__$1,ch__$1,meta18997__$1,___$2,fn1__$1,meta19017));
});

}

return (new cljs.core.async.t_cljs$core$async19016(self__.f,self__.ch,self__.meta18997,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19022 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19022) : self__.f.call(null,G__19022));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18997","meta18997",-1799243888,null)], null);
}));

(cljs.core.async.t_cljs$core$async18996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18996");

(cljs.core.async.t_cljs$core$async18996.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async18996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18996.
 */
cljs.core.async.__GT_t_cljs$core$async18996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18996(f__$1,ch__$1,meta18997){
return (new cljs.core.async.t_cljs$core$async18996(f__$1,ch__$1,meta18997));
});

}

return (new cljs.core.async.t_cljs$core$async18996(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19023 = (function (f,ch,meta19024){
this.f = f;
this.ch = ch;
this.meta19024 = meta19024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19025,meta19024__$1){
var self__ = this;
var _19025__$1 = this;
return (new cljs.core.async.t_cljs$core$async19023(self__.f,self__.ch,meta19024__$1));
}));

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19025){
var self__ = this;
var _19025__$1 = this;
return self__.meta19024;
}));

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19024","meta19024",-2038648076,null)], null);
}));

(cljs.core.async.t_cljs$core$async19023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19023");

(cljs.core.async.t_cljs$core$async19023.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19023.
 */
cljs.core.async.__GT_t_cljs$core$async19023 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19023(f__$1,ch__$1,meta19024){
return (new cljs.core.async.t_cljs$core$async19023(f__$1,ch__$1,meta19024));
});

}

return (new cljs.core.async.t_cljs$core$async19023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19028 = (function (p,ch,meta19029){
this.p = p;
this.ch = ch;
this.meta19029 = meta19029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19030,meta19029__$1){
var self__ = this;
var _19030__$1 = this;
return (new cljs.core.async.t_cljs$core$async19028(self__.p,self__.ch,meta19029__$1));
}));

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19030){
var self__ = this;
var _19030__$1 = this;
return self__.meta19029;
}));

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19029","meta19029",-711223502,null)], null);
}));

(cljs.core.async.t_cljs$core$async19028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19028");

(cljs.core.async.t_cljs$core$async19028.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async19028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19028.
 */
cljs.core.async.__GT_t_cljs$core$async19028 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19028(p__$1,ch__$1,meta19029){
return (new cljs.core.async.t_cljs$core$async19028(p__$1,ch__$1,meta19029));
});

}

return (new cljs.core.async.t_cljs$core$async19028(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19045 = arguments.length;
switch (G__19045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_19066){
var state_val_19067 = (state_19066[(1)]);
if((state_val_19067 === (7))){
var inst_19062 = (state_19066[(2)]);
var state_19066__$1 = state_19066;
var statearr_19068_20464 = state_19066__$1;
(statearr_19068_20464[(2)] = inst_19062);

(statearr_19068_20464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (1))){
var state_19066__$1 = state_19066;
var statearr_19069_20465 = state_19066__$1;
(statearr_19069_20465[(2)] = null);

(statearr_19069_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (4))){
var inst_19048 = (state_19066[(7)]);
var inst_19048__$1 = (state_19066[(2)]);
var inst_19049 = (inst_19048__$1 == null);
var state_19066__$1 = (function (){var statearr_19070 = state_19066;
(statearr_19070[(7)] = inst_19048__$1);

return statearr_19070;
})();
if(cljs.core.truth_(inst_19049)){
var statearr_19071_20466 = state_19066__$1;
(statearr_19071_20466[(1)] = (5));

} else {
var statearr_19072_20467 = state_19066__$1;
(statearr_19072_20467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (6))){
var inst_19048 = (state_19066[(7)]);
var inst_19053 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19048) : p.call(null,inst_19048));
var state_19066__$1 = state_19066;
if(cljs.core.truth_(inst_19053)){
var statearr_19075_20470 = state_19066__$1;
(statearr_19075_20470[(1)] = (8));

} else {
var statearr_19076_20471 = state_19066__$1;
(statearr_19076_20471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (3))){
var inst_19064 = (state_19066[(2)]);
var state_19066__$1 = state_19066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19066__$1,inst_19064);
} else {
if((state_val_19067 === (2))){
var state_19066__$1 = state_19066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19066__$1,(4),ch);
} else {
if((state_val_19067 === (11))){
var inst_19056 = (state_19066[(2)]);
var state_19066__$1 = state_19066;
var statearr_19078_20472 = state_19066__$1;
(statearr_19078_20472[(2)] = inst_19056);

(statearr_19078_20472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (9))){
var state_19066__$1 = state_19066;
var statearr_19079_20473 = state_19066__$1;
(statearr_19079_20473[(2)] = null);

(statearr_19079_20473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (5))){
var inst_19051 = cljs.core.async.close_BANG_(out);
var state_19066__$1 = state_19066;
var statearr_19080_20474 = state_19066__$1;
(statearr_19080_20474[(2)] = inst_19051);

(statearr_19080_20474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (10))){
var inst_19059 = (state_19066[(2)]);
var state_19066__$1 = (function (){var statearr_19081 = state_19066;
(statearr_19081[(8)] = inst_19059);

return statearr_19081;
})();
var statearr_19082_20475 = state_19066__$1;
(statearr_19082_20475[(2)] = null);

(statearr_19082_20475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (8))){
var inst_19048 = (state_19066[(7)]);
var state_19066__$1 = state_19066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19066__$1,(11),out,inst_19048);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_19083 = [null,null,null,null,null,null,null,null,null];
(statearr_19083[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_19083[(1)] = (1));

return statearr_19083;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_19066){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_19066);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e19093){var ex__16781__auto__ = e19093;
var statearr_19094_20476 = state_19066;
(statearr_19094_20476[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_19066[(4)]))){
var statearr_19095_20478 = state_19066;
(statearr_19095_20478[(1)] = cljs.core.first((state_19066[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20479 = state_19066;
state_19066 = G__20479;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_19066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_19066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_19096 = f__17281__auto__();
(statearr_19096[(6)] = c__17280__auto___20462);

return statearr_19096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19099 = arguments.length;
switch (G__19099) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_19163){
var state_val_19164 = (state_19163[(1)]);
if((state_val_19164 === (7))){
var inst_19157 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19165_20482 = state_19163__$1;
(statearr_19165_20482[(2)] = inst_19157);

(statearr_19165_20482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (20))){
var inst_19127 = (state_19163[(7)]);
var inst_19138 = (state_19163[(2)]);
var inst_19139 = cljs.core.next(inst_19127);
var inst_19113 = inst_19139;
var inst_19114 = null;
var inst_19115 = (0);
var inst_19116 = (0);
var state_19163__$1 = (function (){var statearr_19167 = state_19163;
(statearr_19167[(8)] = inst_19113);

(statearr_19167[(9)] = inst_19116);

(statearr_19167[(10)] = inst_19138);

(statearr_19167[(11)] = inst_19114);

(statearr_19167[(12)] = inst_19115);

return statearr_19167;
})();
var statearr_19169_20484 = state_19163__$1;
(statearr_19169_20484[(2)] = null);

(statearr_19169_20484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (1))){
var state_19163__$1 = state_19163;
var statearr_19170_20488 = state_19163__$1;
(statearr_19170_20488[(2)] = null);

(statearr_19170_20488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (4))){
var inst_19102 = (state_19163[(13)]);
var inst_19102__$1 = (state_19163[(2)]);
var inst_19103 = (inst_19102__$1 == null);
var state_19163__$1 = (function (){var statearr_19171 = state_19163;
(statearr_19171[(13)] = inst_19102__$1);

return statearr_19171;
})();
if(cljs.core.truth_(inst_19103)){
var statearr_19172_20491 = state_19163__$1;
(statearr_19172_20491[(1)] = (5));

} else {
var statearr_19173_20492 = state_19163__$1;
(statearr_19173_20492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (15))){
var state_19163__$1 = state_19163;
var statearr_19177_20499 = state_19163__$1;
(statearr_19177_20499[(2)] = null);

(statearr_19177_20499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (21))){
var state_19163__$1 = state_19163;
var statearr_19178_20500 = state_19163__$1;
(statearr_19178_20500[(2)] = null);

(statearr_19178_20500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (13))){
var inst_19113 = (state_19163[(8)]);
var inst_19116 = (state_19163[(9)]);
var inst_19114 = (state_19163[(11)]);
var inst_19115 = (state_19163[(12)]);
var inst_19123 = (state_19163[(2)]);
var inst_19124 = (inst_19116 + (1));
var tmp19174 = inst_19113;
var tmp19175 = inst_19114;
var tmp19176 = inst_19115;
var inst_19113__$1 = tmp19174;
var inst_19114__$1 = tmp19175;
var inst_19115__$1 = tmp19176;
var inst_19116__$1 = inst_19124;
var state_19163__$1 = (function (){var statearr_19179 = state_19163;
(statearr_19179[(8)] = inst_19113__$1);

(statearr_19179[(9)] = inst_19116__$1);

(statearr_19179[(11)] = inst_19114__$1);

(statearr_19179[(12)] = inst_19115__$1);

(statearr_19179[(14)] = inst_19123);

return statearr_19179;
})();
var statearr_19187_20506 = state_19163__$1;
(statearr_19187_20506[(2)] = null);

(statearr_19187_20506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (22))){
var state_19163__$1 = state_19163;
var statearr_19188_20507 = state_19163__$1;
(statearr_19188_20507[(2)] = null);

(statearr_19188_20507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (6))){
var inst_19102 = (state_19163[(13)]);
var inst_19111 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19102) : f.call(null,inst_19102));
var inst_19112 = cljs.core.seq(inst_19111);
var inst_19113 = inst_19112;
var inst_19114 = null;
var inst_19115 = (0);
var inst_19116 = (0);
var state_19163__$1 = (function (){var statearr_19190 = state_19163;
(statearr_19190[(8)] = inst_19113);

(statearr_19190[(9)] = inst_19116);

(statearr_19190[(11)] = inst_19114);

(statearr_19190[(12)] = inst_19115);

return statearr_19190;
})();
var statearr_19191_20509 = state_19163__$1;
(statearr_19191_20509[(2)] = null);

(statearr_19191_20509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (17))){
var inst_19127 = (state_19163[(7)]);
var inst_19131 = cljs.core.chunk_first(inst_19127);
var inst_19132 = cljs.core.chunk_rest(inst_19127);
var inst_19133 = cljs.core.count(inst_19131);
var inst_19113 = inst_19132;
var inst_19114 = inst_19131;
var inst_19115 = inst_19133;
var inst_19116 = (0);
var state_19163__$1 = (function (){var statearr_19201 = state_19163;
(statearr_19201[(8)] = inst_19113);

(statearr_19201[(9)] = inst_19116);

(statearr_19201[(11)] = inst_19114);

(statearr_19201[(12)] = inst_19115);

return statearr_19201;
})();
var statearr_19202_20514 = state_19163__$1;
(statearr_19202_20514[(2)] = null);

(statearr_19202_20514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (3))){
var inst_19159 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19163__$1,inst_19159);
} else {
if((state_val_19164 === (12))){
var inst_19147 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19203_20515 = state_19163__$1;
(statearr_19203_20515[(2)] = inst_19147);

(statearr_19203_20515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (2))){
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19163__$1,(4),in$);
} else {
if((state_val_19164 === (23))){
var inst_19155 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19208_20516 = state_19163__$1;
(statearr_19208_20516[(2)] = inst_19155);

(statearr_19208_20516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (19))){
var inst_19142 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19216_20517 = state_19163__$1;
(statearr_19216_20517[(2)] = inst_19142);

(statearr_19216_20517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (11))){
var inst_19113 = (state_19163[(8)]);
var inst_19127 = (state_19163[(7)]);
var inst_19127__$1 = cljs.core.seq(inst_19113);
var state_19163__$1 = (function (){var statearr_19217 = state_19163;
(statearr_19217[(7)] = inst_19127__$1);

return statearr_19217;
})();
if(inst_19127__$1){
var statearr_19218_20518 = state_19163__$1;
(statearr_19218_20518[(1)] = (14));

} else {
var statearr_19220_20519 = state_19163__$1;
(statearr_19220_20519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (9))){
var inst_19149 = (state_19163[(2)]);
var inst_19150 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19163__$1 = (function (){var statearr_19221 = state_19163;
(statearr_19221[(15)] = inst_19149);

return statearr_19221;
})();
if(cljs.core.truth_(inst_19150)){
var statearr_19222_20520 = state_19163__$1;
(statearr_19222_20520[(1)] = (21));

} else {
var statearr_19223_20521 = state_19163__$1;
(statearr_19223_20521[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (5))){
var inst_19105 = cljs.core.async.close_BANG_(out);
var state_19163__$1 = state_19163;
var statearr_19224_20522 = state_19163__$1;
(statearr_19224_20522[(2)] = inst_19105);

(statearr_19224_20522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (14))){
var inst_19127 = (state_19163[(7)]);
var inst_19129 = cljs.core.chunked_seq_QMARK_(inst_19127);
var state_19163__$1 = state_19163;
if(inst_19129){
var statearr_19227_20524 = state_19163__$1;
(statearr_19227_20524[(1)] = (17));

} else {
var statearr_19228_20526 = state_19163__$1;
(statearr_19228_20526[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (16))){
var inst_19145 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19232_20527 = state_19163__$1;
(statearr_19232_20527[(2)] = inst_19145);

(statearr_19232_20527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (10))){
var inst_19116 = (state_19163[(9)]);
var inst_19114 = (state_19163[(11)]);
var inst_19121 = cljs.core._nth(inst_19114,inst_19116);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19163__$1,(13),out,inst_19121);
} else {
if((state_val_19164 === (18))){
var inst_19127 = (state_19163[(7)]);
var inst_19136 = cljs.core.first(inst_19127);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19163__$1,(20),out,inst_19136);
} else {
if((state_val_19164 === (8))){
var inst_19116 = (state_19163[(9)]);
var inst_19115 = (state_19163[(12)]);
var inst_19118 = (inst_19116 < inst_19115);
var inst_19119 = inst_19118;
var state_19163__$1 = state_19163;
if(cljs.core.truth_(inst_19119)){
var statearr_19235_20529 = state_19163__$1;
(statearr_19235_20529[(1)] = (10));

} else {
var statearr_19236_20530 = state_19163__$1;
(statearr_19236_20530[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____0 = (function (){
var statearr_19238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19238[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__);

(statearr_19238[(1)] = (1));

return statearr_19238;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____1 = (function (state_19163){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_19163);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e19240){var ex__16781__auto__ = e19240;
var statearr_19243_20531 = state_19163;
(statearr_19243_20531[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_19163[(4)]))){
var statearr_19244_20532 = state_19163;
(statearr_19244_20532[(1)] = cljs.core.first((state_19163[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20533 = state_19163;
state_19163 = G__20533;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__ = function(state_19163){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____1.call(this,state_19163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16778__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_19246 = f__17281__auto__();
(statearr_19246[(6)] = c__17280__auto__);

return statearr_19246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));

return c__17280__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19248 = arguments.length;
switch (G__19248) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19258 = arguments.length;
switch (G__19258) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19263 = arguments.length;
switch (G__19263) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_19290){
var state_val_19291 = (state_19290[(1)]);
if((state_val_19291 === (7))){
var inst_19285 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19293_20538 = state_19290__$1;
(statearr_19293_20538[(2)] = inst_19285);

(statearr_19293_20538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (1))){
var inst_19266 = null;
var state_19290__$1 = (function (){var statearr_19294 = state_19290;
(statearr_19294[(7)] = inst_19266);

return statearr_19294;
})();
var statearr_19295_20540 = state_19290__$1;
(statearr_19295_20540[(2)] = null);

(statearr_19295_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (4))){
var inst_19269 = (state_19290[(8)]);
var inst_19269__$1 = (state_19290[(2)]);
var inst_19270 = (inst_19269__$1 == null);
var inst_19271 = cljs.core.not(inst_19270);
var state_19290__$1 = (function (){var statearr_19296 = state_19290;
(statearr_19296[(8)] = inst_19269__$1);

return statearr_19296;
})();
if(inst_19271){
var statearr_19297_20541 = state_19290__$1;
(statearr_19297_20541[(1)] = (5));

} else {
var statearr_19298_20542 = state_19290__$1;
(statearr_19298_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (6))){
var state_19290__$1 = state_19290;
var statearr_19299_20543 = state_19290__$1;
(statearr_19299_20543[(2)] = null);

(statearr_19299_20543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (3))){
var inst_19287 = (state_19290[(2)]);
var inst_19288 = cljs.core.async.close_BANG_(out);
var state_19290__$1 = (function (){var statearr_19300 = state_19290;
(statearr_19300[(9)] = inst_19287);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19290__$1,inst_19288);
} else {
if((state_val_19291 === (2))){
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19290__$1,(4),ch);
} else {
if((state_val_19291 === (11))){
var inst_19269 = (state_19290[(8)]);
var inst_19279 = (state_19290[(2)]);
var inst_19266 = inst_19269;
var state_19290__$1 = (function (){var statearr_19301 = state_19290;
(statearr_19301[(10)] = inst_19279);

(statearr_19301[(7)] = inst_19266);

return statearr_19301;
})();
var statearr_19302_20547 = state_19290__$1;
(statearr_19302_20547[(2)] = null);

(statearr_19302_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (9))){
var inst_19269 = (state_19290[(8)]);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19290__$1,(11),out,inst_19269);
} else {
if((state_val_19291 === (5))){
var inst_19269 = (state_19290[(8)]);
var inst_19266 = (state_19290[(7)]);
var inst_19273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19269,inst_19266);
var state_19290__$1 = state_19290;
if(inst_19273){
var statearr_19308_20548 = state_19290__$1;
(statearr_19308_20548[(1)] = (8));

} else {
var statearr_19309_20549 = state_19290__$1;
(statearr_19309_20549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (10))){
var inst_19282 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19310_20550 = state_19290__$1;
(statearr_19310_20550[(2)] = inst_19282);

(statearr_19310_20550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (8))){
var inst_19266 = (state_19290[(7)]);
var tmp19307 = inst_19266;
var inst_19266__$1 = tmp19307;
var state_19290__$1 = (function (){var statearr_19312 = state_19290;
(statearr_19312[(7)] = inst_19266__$1);

return statearr_19312;
})();
var statearr_19313_20551 = state_19290__$1;
(statearr_19313_20551[(2)] = null);

(statearr_19313_20551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_19290){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_19290);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e19315){var ex__16781__auto__ = e19315;
var statearr_19322_20554 = state_19290;
(statearr_19322_20554[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_19290[(4)]))){
var statearr_19323_20555 = state_19290;
(statearr_19323_20555[(1)] = cljs.core.first((state_19290[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20556 = state_19290;
state_19290 = G__20556;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_19290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_19290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_19327 = f__17281__auto__();
(statearr_19327[(6)] = c__17280__auto___20537);

return statearr_19327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19333 = arguments.length;
switch (G__19333) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_19383){
var state_val_19384 = (state_19383[(1)]);
if((state_val_19384 === (7))){
var inst_19379 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
var statearr_19386_20565 = state_19383__$1;
(statearr_19386_20565[(2)] = inst_19379);

(statearr_19386_20565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (1))){
var inst_19340 = (new Array(n));
var inst_19341 = inst_19340;
var inst_19342 = (0);
var state_19383__$1 = (function (){var statearr_19387 = state_19383;
(statearr_19387[(7)] = inst_19342);

(statearr_19387[(8)] = inst_19341);

return statearr_19387;
})();
var statearr_19388_20566 = state_19383__$1;
(statearr_19388_20566[(2)] = null);

(statearr_19388_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (4))){
var inst_19345 = (state_19383[(9)]);
var inst_19345__$1 = (state_19383[(2)]);
var inst_19346 = (inst_19345__$1 == null);
var inst_19347 = cljs.core.not(inst_19346);
var state_19383__$1 = (function (){var statearr_19390 = state_19383;
(statearr_19390[(9)] = inst_19345__$1);

return statearr_19390;
})();
if(inst_19347){
var statearr_19391_20568 = state_19383__$1;
(statearr_19391_20568[(1)] = (5));

} else {
var statearr_19392_20569 = state_19383__$1;
(statearr_19392_20569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (15))){
var inst_19373 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
var statearr_19393_20570 = state_19383__$1;
(statearr_19393_20570[(2)] = inst_19373);

(statearr_19393_20570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (13))){
var state_19383__$1 = state_19383;
var statearr_19394_20571 = state_19383__$1;
(statearr_19394_20571[(2)] = null);

(statearr_19394_20571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (6))){
var inst_19342 = (state_19383[(7)]);
var inst_19369 = (inst_19342 > (0));
var state_19383__$1 = state_19383;
if(cljs.core.truth_(inst_19369)){
var statearr_19395_20572 = state_19383__$1;
(statearr_19395_20572[(1)] = (12));

} else {
var statearr_19396_20573 = state_19383__$1;
(statearr_19396_20573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (3))){
var inst_19381 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19383__$1,inst_19381);
} else {
if((state_val_19384 === (12))){
var inst_19341 = (state_19383[(8)]);
var inst_19371 = cljs.core.vec(inst_19341);
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19383__$1,(15),out,inst_19371);
} else {
if((state_val_19384 === (2))){
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19383__$1,(4),ch);
} else {
if((state_val_19384 === (11))){
var inst_19357 = (state_19383[(2)]);
var inst_19358 = (new Array(n));
var inst_19341 = inst_19358;
var inst_19342 = (0);
var state_19383__$1 = (function (){var statearr_19407 = state_19383;
(statearr_19407[(7)] = inst_19342);

(statearr_19407[(8)] = inst_19341);

(statearr_19407[(10)] = inst_19357);

return statearr_19407;
})();
var statearr_19408_20574 = state_19383__$1;
(statearr_19408_20574[(2)] = null);

(statearr_19408_20574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (9))){
var inst_19341 = (state_19383[(8)]);
var inst_19355 = cljs.core.vec(inst_19341);
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19383__$1,(11),out,inst_19355);
} else {
if((state_val_19384 === (5))){
var inst_19350 = (state_19383[(11)]);
var inst_19345 = (state_19383[(9)]);
var inst_19342 = (state_19383[(7)]);
var inst_19341 = (state_19383[(8)]);
var inst_19349 = (inst_19341[inst_19342] = inst_19345);
var inst_19350__$1 = (inst_19342 + (1));
var inst_19351 = (inst_19350__$1 < n);
var state_19383__$1 = (function (){var statearr_19409 = state_19383;
(statearr_19409[(11)] = inst_19350__$1);

(statearr_19409[(12)] = inst_19349);

return statearr_19409;
})();
if(cljs.core.truth_(inst_19351)){
var statearr_19411_20577 = state_19383__$1;
(statearr_19411_20577[(1)] = (8));

} else {
var statearr_19412_20578 = state_19383__$1;
(statearr_19412_20578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (14))){
var inst_19376 = (state_19383[(2)]);
var inst_19377 = cljs.core.async.close_BANG_(out);
var state_19383__$1 = (function (){var statearr_19414 = state_19383;
(statearr_19414[(13)] = inst_19376);

return statearr_19414;
})();
var statearr_19415_20579 = state_19383__$1;
(statearr_19415_20579[(2)] = inst_19377);

(statearr_19415_20579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (10))){
var inst_19367 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
var statearr_19417_20582 = state_19383__$1;
(statearr_19417_20582[(2)] = inst_19367);

(statearr_19417_20582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (8))){
var inst_19350 = (state_19383[(11)]);
var inst_19341 = (state_19383[(8)]);
var tmp19413 = inst_19341;
var inst_19341__$1 = tmp19413;
var inst_19342 = inst_19350;
var state_19383__$1 = (function (){var statearr_19418 = state_19383;
(statearr_19418[(7)] = inst_19342);

(statearr_19418[(8)] = inst_19341__$1);

return statearr_19418;
})();
var statearr_19419_20584 = state_19383__$1;
(statearr_19419_20584[(2)] = null);

(statearr_19419_20584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_19425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19425[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_19425[(1)] = (1));

return statearr_19425;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_19383){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_19383);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e19426){var ex__16781__auto__ = e19426;
var statearr_19427_20588 = state_19383;
(statearr_19427_20588[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_19383[(4)]))){
var statearr_19428_20589 = state_19383;
(statearr_19428_20589[(1)] = cljs.core.first((state_19383[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20590 = state_19383;
state_19383 = G__20590;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_19383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_19383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_19429 = f__17281__auto__();
(statearr_19429[(6)] = c__17280__auto___20563);

return statearr_19429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19432 = arguments.length;
switch (G__19432) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17280__auto___20594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17281__auto__ = (function (){var switch__16777__auto__ = (function (state_19490){
var state_val_19491 = (state_19490[(1)]);
if((state_val_19491 === (7))){
var inst_19486 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19492_20596 = state_19490__$1;
(statearr_19492_20596[(2)] = inst_19486);

(statearr_19492_20596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (1))){
var inst_19436 = [];
var inst_19437 = inst_19436;
var inst_19438 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19490__$1 = (function (){var statearr_19493 = state_19490;
(statearr_19493[(7)] = inst_19438);

(statearr_19493[(8)] = inst_19437);

return statearr_19493;
})();
var statearr_19494_20600 = state_19490__$1;
(statearr_19494_20600[(2)] = null);

(statearr_19494_20600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (4))){
var inst_19441 = (state_19490[(9)]);
var inst_19441__$1 = (state_19490[(2)]);
var inst_19442 = (inst_19441__$1 == null);
var inst_19443 = cljs.core.not(inst_19442);
var state_19490__$1 = (function (){var statearr_19495 = state_19490;
(statearr_19495[(9)] = inst_19441__$1);

return statearr_19495;
})();
if(inst_19443){
var statearr_19496_20601 = state_19490__$1;
(statearr_19496_20601[(1)] = (5));

} else {
var statearr_19500_20602 = state_19490__$1;
(statearr_19500_20602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (15))){
var inst_19437 = (state_19490[(8)]);
var inst_19478 = cljs.core.vec(inst_19437);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19490__$1,(18),out,inst_19478);
} else {
if((state_val_19491 === (13))){
var inst_19470 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19501_20607 = state_19490__$1;
(statearr_19501_20607[(2)] = inst_19470);

(statearr_19501_20607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (6))){
var inst_19437 = (state_19490[(8)]);
var inst_19475 = inst_19437.length;
var inst_19476 = (inst_19475 > (0));
var state_19490__$1 = state_19490;
if(cljs.core.truth_(inst_19476)){
var statearr_19502_20609 = state_19490__$1;
(statearr_19502_20609[(1)] = (15));

} else {
var statearr_19503_20613 = state_19490__$1;
(statearr_19503_20613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (17))){
var inst_19483 = (state_19490[(2)]);
var inst_19484 = cljs.core.async.close_BANG_(out);
var state_19490__$1 = (function (){var statearr_19504 = state_19490;
(statearr_19504[(10)] = inst_19483);

return statearr_19504;
})();
var statearr_19505_20614 = state_19490__$1;
(statearr_19505_20614[(2)] = inst_19484);

(statearr_19505_20614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (3))){
var inst_19488 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19490__$1,inst_19488);
} else {
if((state_val_19491 === (12))){
var inst_19437 = (state_19490[(8)]);
var inst_19463 = cljs.core.vec(inst_19437);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19490__$1,(14),out,inst_19463);
} else {
if((state_val_19491 === (2))){
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19490__$1,(4),ch);
} else {
if((state_val_19491 === (11))){
var inst_19441 = (state_19490[(9)]);
var inst_19437 = (state_19490[(8)]);
var inst_19445 = (state_19490[(11)]);
var inst_19460 = inst_19437.push(inst_19441);
var tmp19506 = inst_19437;
var inst_19437__$1 = tmp19506;
var inst_19438 = inst_19445;
var state_19490__$1 = (function (){var statearr_19507 = state_19490;
(statearr_19507[(7)] = inst_19438);

(statearr_19507[(8)] = inst_19437__$1);

(statearr_19507[(12)] = inst_19460);

return statearr_19507;
})();
var statearr_19508_20615 = state_19490__$1;
(statearr_19508_20615[(2)] = null);

(statearr_19508_20615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (9))){
var inst_19438 = (state_19490[(7)]);
var inst_19456 = cljs.core.keyword_identical_QMARK_(inst_19438,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19490__$1 = state_19490;
var statearr_19509_20617 = state_19490__$1;
(statearr_19509_20617[(2)] = inst_19456);

(statearr_19509_20617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (5))){
var inst_19438 = (state_19490[(7)]);
var inst_19441 = (state_19490[(9)]);
var inst_19450 = (state_19490[(13)]);
var inst_19445 = (state_19490[(11)]);
var inst_19445__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19441) : f.call(null,inst_19441));
var inst_19450__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19445__$1,inst_19438);
var state_19490__$1 = (function (){var statearr_19510 = state_19490;
(statearr_19510[(13)] = inst_19450__$1);

(statearr_19510[(11)] = inst_19445__$1);

return statearr_19510;
})();
if(inst_19450__$1){
var statearr_19511_20623 = state_19490__$1;
(statearr_19511_20623[(1)] = (8));

} else {
var statearr_19512_20624 = state_19490__$1;
(statearr_19512_20624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (14))){
var inst_19441 = (state_19490[(9)]);
var inst_19445 = (state_19490[(11)]);
var inst_19465 = (state_19490[(2)]);
var inst_19466 = [];
var inst_19467 = inst_19466.push(inst_19441);
var inst_19437 = inst_19466;
var inst_19438 = inst_19445;
var state_19490__$1 = (function (){var statearr_19513 = state_19490;
(statearr_19513[(14)] = inst_19467);

(statearr_19513[(15)] = inst_19465);

(statearr_19513[(7)] = inst_19438);

(statearr_19513[(8)] = inst_19437);

return statearr_19513;
})();
var statearr_19514_20625 = state_19490__$1;
(statearr_19514_20625[(2)] = null);

(statearr_19514_20625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (16))){
var state_19490__$1 = state_19490;
var statearr_19515_20626 = state_19490__$1;
(statearr_19515_20626[(2)] = null);

(statearr_19515_20626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (10))){
var inst_19458 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
if(cljs.core.truth_(inst_19458)){
var statearr_19516_20628 = state_19490__$1;
(statearr_19516_20628[(1)] = (11));

} else {
var statearr_19517_20629 = state_19490__$1;
(statearr_19517_20629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (18))){
var inst_19480 = (state_19490[(2)]);
var state_19490__$1 = state_19490;
var statearr_19518_20633 = state_19490__$1;
(statearr_19518_20633[(2)] = inst_19480);

(statearr_19518_20633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (8))){
var inst_19450 = (state_19490[(13)]);
var state_19490__$1 = state_19490;
var statearr_19519_20634 = state_19490__$1;
(statearr_19519_20634[(2)] = inst_19450);

(statearr_19519_20634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16778__auto__ = null;
var cljs$core$async$state_machine__16778__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19520[(0)] = cljs$core$async$state_machine__16778__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var cljs$core$async$state_machine__16778__auto____1 = (function (state_19490){
while(true){
var ret_value__16779__auto__ = (function (){try{while(true){
var result__16780__auto__ = switch__16777__auto__(state_19490);
if(cljs.core.keyword_identical_QMARK_(result__16780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16780__auto__;
}
break;
}
}catch (e19521){var ex__16781__auto__ = e19521;
var statearr_19522_20635 = state_19490;
(statearr_19522_20635[(2)] = ex__16781__auto__);


if(cljs.core.seq((state_19490[(4)]))){
var statearr_19523_20637 = state_19490;
(statearr_19523_20637[(1)] = cljs.core.first((state_19490[(4)])));

} else {
throw ex__16781__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20638 = state_19490;
state_19490 = G__20638;
continue;
} else {
return ret_value__16779__auto__;
}
break;
}
});
cljs$core$async$state_machine__16778__auto__ = function(state_19490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16778__auto____1.call(this,state_19490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16778__auto____0;
cljs$core$async$state_machine__16778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16778__auto____1;
return cljs$core$async$state_machine__16778__auto__;
})()
})();
var state__17282__auto__ = (function (){var statearr_19524 = f__17281__auto__();
(statearr_19524[(6)] = c__17280__auto___20594);

return statearr_19524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17282__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
