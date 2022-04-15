goog.provide('scramble_ui.store.core');
if((typeof scramble_ui !== 'undefined') && (typeof scramble_ui.store !== 'undefined') && (typeof scramble_ui.store.core !== 'undefined') && (typeof scramble_ui.store.core.messages !== 'undefined')){
} else {
scramble_ui.store.core.messages = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof scramble_ui !== 'undefined') && (typeof scramble_ui.store !== 'undefined') && (typeof scramble_ui.store.core !== 'undefined') && (typeof scramble_ui.store.core.result !== 'undefined')){
} else {
scramble_ui.store.core.result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof scramble_ui !== 'undefined') && (typeof scramble_ui.store !== 'undefined') && (typeof scramble_ui.store.core !== 'undefined') && (typeof scramble_ui.store.core.mutations !== 'undefined')){
} else {
scramble_ui.store.core.mutations = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mutation","messages","mutation/messages",-1057065527),(function (new_messages){
return cljs.core.reset_BANG_(scramble_ui.store.core.messages,new_messages);
}),new cljs.core.Keyword("mutation","result","mutation/result",-2083454386),(function (new_result){
return cljs.core.reset_BANG_(scramble_ui.store.core.result,new_result);
})], null);
}
/**
 * execute a store mutation change
 */
scramble_ui.store.core.commit = (function scramble_ui$store$core$commit(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15778 = arguments.length;
var i__4865__auto___15779 = (0);
while(true){
if((i__4865__auto___15779 < len__4864__auto___15778)){
args__4870__auto__.push((arguments[i__4865__auto___15779]));

var G__15780 = (i__4865__auto___15779 + (1));
i__4865__auto___15779 = G__15780;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return scramble_ui.store.core.commit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(scramble_ui.store.core.commit.cljs$core$IFn$_invoke$arity$variadic = (function (key,value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(scramble_ui.store.core.mutations,key),value);
}));

(scramble_ui.store.core.commit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(scramble_ui.store.core.commit.cljs$lang$applyTo = (function (seq15734){
var G__15735 = cljs.core.first(seq15734);
var seq15734__$1 = cljs.core.next(seq15734);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15735,seq15734__$1);
}));

if((typeof scramble_ui !== 'undefined') && (typeof scramble_ui.store !== 'undefined') && (typeof scramble_ui.store.core !== 'undefined') && (typeof scramble_ui.store.core.actions !== 'undefined')){
} else {
scramble_ui.store.core.actions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("action","messages-update","action/messages-update",-354794428),(function (messages){
return scramble_ui.store.core.commit.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("mutation","messages","mutation/messages",-1057065527),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([messages], 0));
}),new cljs.core.Keyword("action","result-update","action/result-update",-1153270297),(function (result){
return scramble_ui.store.core.commit.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("mutation","result","mutation/result",-2083454386),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}),new cljs.core.Keyword("action","post-scramble","action/post-scramble",1594967435),(function (str_1,str_2,store_inst){
var dispatch = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(store_inst);
var c__11235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11236__auto__ = (function (){var switch__11150__auto__ = (function (state_15759){
var state_val_15760 = (state_15759[(1)]);
if((state_val_15760 === (1))){
var inst_15736 = scramble_ui.api.configuration.core.scramble_post_BANG_(str_1,str_2);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15759__$1,(2),inst_15736);
} else {
if((state_val_15760 === (2))){
var inst_15738 = (state_15759[(7)]);
var inst_15738__$1 = (state_15759[(2)]);
var inst_15739 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_15738__$1);
var state_15759__$1 = (function (){var statearr_15761 = state_15759;
(statearr_15761[(7)] = inst_15738__$1);

return statearr_15761;
})();
if(cljs.core.truth_(inst_15739)){
var statearr_15762_15781 = state_15759__$1;
(statearr_15762_15781[(1)] = (3));

} else {
var statearr_15763_15782 = state_15759__$1;
(statearr_15763_15782[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (3))){
var inst_15741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15742 = scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1("fatal");
var inst_15743 = [inst_15742];
var inst_15744 = (new cljs.core.PersistentVector(null,1,(5),inst_15741,inst_15743,null));
var state_15759__$1 = state_15759;
var statearr_15764_15783 = state_15759__$1;
(statearr_15764_15783[(2)] = inst_15744);

(statearr_15764_15783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (4))){
var state_15759__$1 = state_15759;
var statearr_15765_15784 = state_15759__$1;
(statearr_15765_15784[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (5))){
var inst_15738 = (state_15759[(7)]);
var inst_15753 = (state_15759[(2)]);
var inst_15754 = cljs.core.PersistentVector.EMPTY;
var inst_15755 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_15738,new cljs.core.Keyword(null,"result","result",1415092211),inst_15754);
var inst_15756 = (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("action","messages-update","action/messages-update",-354794428),inst_15753) : dispatch.call(null,new cljs.core.Keyword("action","messages-update","action/messages-update",-354794428),inst_15753));
var inst_15757 = (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("action","result-update","action/result-update",-1153270297),inst_15755) : dispatch.call(null,new cljs.core.Keyword("action","result-update","action/result-update",-1153270297),inst_15755));
var state_15759__$1 = (function (){var statearr_15767 = state_15759;
(statearr_15767[(8)] = inst_15756);

return statearr_15767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15759__$1,inst_15757);
} else {
if((state_val_15760 === (6))){
var inst_15738 = (state_15759[(7)]);
var inst_15747 = cljs.core.PersistentVector.EMPTY;
var inst_15748 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_15738,new cljs.core.Keyword(null,"messages","messages",345434482),inst_15747);
var state_15759__$1 = state_15759;
var statearr_15768_15785 = state_15759__$1;
(statearr_15768_15785[(2)] = inst_15748);

(statearr_15768_15785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (7))){
var state_15759__$1 = state_15759;
var statearr_15769_15786 = state_15759__$1;
(statearr_15769_15786[(2)] = null);

(statearr_15769_15786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (8))){
var inst_15751 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15770_15787 = state_15759__$1;
(statearr_15770_15787[(2)] = inst_15751);

(statearr_15770_15787[(1)] = (5));


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
});
return (function() {
var scramble_ui$store$core$state_machine__11151__auto__ = null;
var scramble_ui$store$core$state_machine__11151__auto____0 = (function (){
var statearr_15771 = [null,null,null,null,null,null,null,null,null];
(statearr_15771[(0)] = scramble_ui$store$core$state_machine__11151__auto__);

(statearr_15771[(1)] = (1));

return statearr_15771;
});
var scramble_ui$store$core$state_machine__11151__auto____1 = (function (state_15759){
while(true){
var ret_value__11152__auto__ = (function (){try{while(true){
var result__11153__auto__ = switch__11150__auto__(state_15759);
if(cljs.core.keyword_identical_QMARK_(result__11153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11153__auto__;
}
break;
}
}catch (e15772){var ex__11154__auto__ = e15772;
var statearr_15773_15789 = state_15759;
(statearr_15773_15789[(2)] = ex__11154__auto__);


if(cljs.core.seq((state_15759[(4)]))){
var statearr_15774_15790 = state_15759;
(statearr_15774_15790[(1)] = cljs.core.first((state_15759[(4)])));

} else {
throw ex__11154__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15791 = state_15759;
state_15759 = G__15791;
continue;
} else {
return ret_value__11152__auto__;
}
break;
}
});
scramble_ui$store$core$state_machine__11151__auto__ = function(state_15759){
switch(arguments.length){
case 0:
return scramble_ui$store$core$state_machine__11151__auto____0.call(this);
case 1:
return scramble_ui$store$core$state_machine__11151__auto____1.call(this,state_15759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scramble_ui$store$core$state_machine__11151__auto__.cljs$core$IFn$_invoke$arity$0 = scramble_ui$store$core$state_machine__11151__auto____0;
scramble_ui$store$core$state_machine__11151__auto__.cljs$core$IFn$_invoke$arity$1 = scramble_ui$store$core$state_machine__11151__auto____1;
return scramble_ui$store$core$state_machine__11151__auto__;
})()
})();
var state__11237__auto__ = (function (){var statearr_15775 = f__11236__auto__();
(statearr_15775[(6)] = c__11235__auto__);

return statearr_15775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11237__auto__);
}));

return c__11235__auto__;
})], null);
}
/**
 * execute an action
 */
scramble_ui.store.core.dispatch = (function scramble_ui$store$core$dispatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15792 = arguments.length;
var i__4865__auto___15793 = (0);
while(true){
if((i__4865__auto___15793 < len__4864__auto___15792)){
args__4870__auto__.push((arguments[i__4865__auto___15793]));

var G__15794 = (i__4865__auto___15793 + (1));
i__4865__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return scramble_ui.store.core.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(scramble_ui.store.core.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (key,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(scramble_ui.store.core.actions,key),params);
}));

(scramble_ui.store.core.dispatch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(scramble_ui.store.core.dispatch.cljs$lang$applyTo = (function (seq15776){
var G__15777 = cljs.core.first(seq15776);
var seq15776__$1 = cljs.core.next(seq15776);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15777,seq15776__$1);
}));

if((typeof scramble_ui !== 'undefined') && (typeof scramble_ui.store !== 'undefined') && (typeof scramble_ui.store.core !== 'undefined') && (typeof scramble_ui.store.core.store_instance !== 'undefined')){
} else {
scramble_ui.store.core.store_instance = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actions","actions",-812656882),scramble_ui.store.core.actions,new cljs.core.Keyword(null,"mutations","mutations",338814149),scramble_ui.store.core.mutations,new cljs.core.Keyword(null,"commit","commit",113374389),scramble_ui.store.core.commit,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),scramble_ui.store.core.dispatch], null);
}

//# sourceMappingURL=scramble_ui.store.core.js.map
